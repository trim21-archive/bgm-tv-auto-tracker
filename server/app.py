import asyncio
import pathlib
import time
from os import path
from typing import List

import aiohttp_cors
import aiohttp
import aiohttp_jinja2
import jinja2
import aiofiles
from aiohttp import web

from config import APP_ID, APP_SECRET, HOST, PROTOCOL

callback_url = f'{PROTOCOL}://{HOST}/oauth_callback'
from db import mongo
from dateutil import parser

base_dir = pathlib.Path(path.dirname(__file__))

import json
import functools


def cacheFunction(key_name, collection_name, expires=60 * 60 * 3):
    def wrapper(f):
        @functools.wraps(f)
        async def wrapped(request, *args, **kwargs):
            print(args)
            key = kwargs.get(key_name, args[0])
            r = await request.app.mongo.bilibili_bangumi[collection_name].find_one({'_id': key})

            # 已缓存
            if r:
                # 未过期
                if r.get('_expires', 35029759086) > int(time.time()):
                    return r['data']
                # 过期
                else:
                    r = await f(*args, **kwargs)
                    await request.app.mongo.bilibili_bangumi[collection_name] \
                        .update_one({'_id': key},
                                    {'$set': {'data'    : r,
                                              '_expires': int(time.time()) + expires}},
                                    upsert=True)
                    return r
            # 未缓存
            else:
                d = {}
                d['data'] = await f(*args, **kwargs)
                d['_expires'] = int(time.time()) + expires
                await request.app.mongo.bilibili_bangumi[collection_name].update_one({'_id': key}, {'$set': d},
                                                                                     upsert=True)
                return d['data']

        return wrapped

    return wrapper


def get_mongo_collection(request):
    return request.app.mongo.bilibili_bangumi.token


@web.middleware
async def error_middleware(request: web.Request, handler):
    try:
        response = await handler(request)
        if request.path.startswith('/api/'):
            if 'html' in request.headers.get('accept', ''):
                response.text = json.dumps(json.loads(response.text), ensure_ascii=False, indent=2)
        return response
    except web.HTTPError as e:
        status = e.status_code
        message = e.reason
        if request.path.startswith('/api/'):
            if 'html' in request.headers.get('accept', ''):
                indent = 2
            else:
                indent = 0
            return web.Response(text=json.dumps({'error': message, 'status_code': status},
                                                ensure_ascii=False, indent=indent),
                                status=status)
        return aiohttp_jinja2.render_template('error/404.html', request, {'error': message, })


async def getToken(request: web.Request, ):
    code = request.query.get('code', None)
    if not code:
        return aiohttp_jinja2.render_template('post_to_extension.html', request, {'data': json.dumps({
            "_id"          : 1,
            "access_token" : "example_access_token",
            "expires_in"   : 604800,
            "token_type"   : "Bearer",
            "scope"        : None,
            "user_id"      : 1,
            "refresh_token": "example_refresh_token",
            "auth_time"    : 1529418738
        }), })
    async with aiohttp.ClientSession() as session:
        async with session.post('https://bgm.tv/oauth/access_token',
                                data={'grant_type'   : 'authorization_code',
                                      'client_id'    : APP_ID,
                                      'client_secret': APP_SECRET,
                                      'code'         : code,
                                      'redirect_uri' : callback_url}) as resp:
            r = await resp.json()
        if 'error' in r:
            return web.json_response(r)
        r['auth_time'] = int(parser.parse(resp.headers['Date']).timestamp())

        get_mongo_collection(request).update_one({'_id': r['user_id']}, {'$set': r}, upsert=True)
        return aiohttp_jinja2.render_template('post_to_extension.html', request, {'data': json.dumps(r), })


async def fromPlayerUrlToBangumiSubjectID(request: web.Request):
    bangumi_id = request.query.get('bangumi_id', None)
    website = request.match_info.get('website', None)
    if bangumi_id and website:
        r = await request.app.mongo.bilibili_bangumi.bilibili.find_one({'_id': bangumi_id},
                                                                       {'_id': 0, 'title': 0, 'name': 0})
        if r:
            return web.json_response(r)
        else:
            raise web.HTTPNotFound()
    else:
        raise web.HTTPBadRequest()


async def refreshToken(request: web.Request, ):
    data = await request.json()
    refresh_token = data.get('refresh_token', None)
    user_id = data.get('user_id', None)
    if not (refresh_token and user_id):
        return web.HTTPBadRequest()
    data = {'grant_type'   : 'refresh_token',
            'client_id'    : APP_ID,
            'client_secret': APP_SECRET,
            'refresh_token': refresh_token,
            'redirect_uri' : callback_url}
    print(data)
    async with aiohttp.ClientSession() as session:
        async with session.post('https://bgm.tv/oauth/access_token', json=data) as resp:
            # async with session.post('https://postman-echo.com/post', json=data) as resp:
            r = await resp.json()
        print(r)
        if 'error' in r:
            return web.json_response(r)
        r['_id'] = r['user_id']
        r['auth_time'] = int(parser.parse(resp.headers['Date']).timestamp())

        get_mongo_collection(request).update_one({'_id': r['_id']}, {'$set': r}, upsert=True)
        return web.json_response(r)


async def aio_get(url, headers=None):
    async with aiohttp.ClientSession(headers=headers) as session:
        async with session.get(url) as resp:
            return await resp.json()


async def aio_post(url, data=None, headers=None):
    async with aiohttp.ClientSession(headers=headers) as session:
        async with session.post(url, data=data) as resp:
            return await resp.json()


@cacheFunction(key_name='subject_id', collection_name='eps', expires=60 * 60 * 24)
async def getEps(subject_id):
    response = await aio_get(f'https://api.bgm.tv/subject/{subject_id}/ep')
    return response


async def collectSubject(request, subject_id, user_id, access_token):
    r = await request.app.mongo.bilibili_bangumi.user_collection.find_one({'_id': user_id, 'subject_id': subject_id})
    if not r:
        await aio_post(f'https://api.bgm.tv/collection/{subject_id}/update', data='status=do',
                       headers={'Content-Type' : 'application/x-www-form-urlencoded',
                                'authorization': f'Bearer {access_token}'})
        await request.app.mongo.bilibili_bangumi.user_collection.update_one({'_id': user_id},
                                                                            {'_id': user_id, 'subject_id': subject_id},
                                                                            upsert=True)


async def watchEpisode(request: web.Request):
    body = await request.json()
    website = body.get('website', None)
    episode = body.get('episode', None)
    bangumi_id = body.get('bangumi_id', None)
    user_id = body.get('user_id', None)
    access_token = body.get('access_token', None)

    if not (website and episode and bangumi_id and access_token) and website != 'bilibili':
        return web.HTTPBadRequest()

    r = await request.app.mongo.bilibili_bangumi.bilibili.find_one({'_id': str(bangumi_id)})

    if not r:
        return web.HTTPNotFound(reason='bangumi not found')

    subject_id = r['bangumi_id']
    response = await getEps(request, subject_id)
    ep = response['eps'][int(episode) - 1]['id']

    if user_id:
        r2 = await collectSubject(request, subject_id, user_id, access_token)
    else:
        return web.json_response({'status': 'error', 'message': 'please upgrade userscript'}, status=400)

    r3 = await aio_post(f'https://api.bgm.tv/ep/{ep}/status/watched',
                        headers={'authorization': f'Bearer {access_token}'})

    print(r3)
    if r3['error'] != 'OK':
        return web.json_response({'status': 'error', 'message': r3['error']}, status=400)

    return web.json_response({'status': 'success'})


def _raise(exception: Exception):
    raise exception


import nameToSubject


@cacheFunction('title', 'title_parse_result', expires=60 * 60 * 24 * 365 * 10)
async def parseTitle(title):
    return {
        'episode'   : nameToSubject.parse_episode(title),
        'subject_id': nameToSubject.fromTitleToSubject(title)
    }


async def nameToSubjectID(request: web.Request):
    j = await request.json()
    title = j.get('title', None)
    title_with_episode = j.get('title_with_episode', None)
    if title:
        d = await parseTitle(request, title)
        if title_with_episode:
            d['episode'] = nameToSubject.parse_episode(title_with_episode)
        return web.json_response(d)
    else:
        raise web.HTTPBadRequest()


async def w(request):
    return web.json_response(await getEps(request, request.match_info.get('subject_id')))


async def collectMissingBangumiInBilibili(request: web.Request):
    bangumi_id = request.query.get('bangumi_id', None)
    subject_id = request.query.get('subject_id', None)
    if not (bangumi_id and subject_id):
        raise web.HTTPBadRequest()
    else:
        await request.app.mongo.bilibili_bangumi.missing_bangumi.insert(
            {'bangumi_id': bangumi_id, 'subject_id': subject_id})
        return web.json_response({'status': 'success'})


async def querySubjectID(request: web.Request):
    website = request.query.get('website', None)
    bangumi_id = request.query.get('bangumiID', None)
    if not (website and bangumi_id and website in ['iqiyi', 'bilibili']):
        raise web.HTTPBadRequest(reason='missing input `website` or `bangumiID`')
    collection = request.app.mongo.bilibili_bangumi.get_collection(website)
    e = await collection.find_one({'_id': bangumi_id})
    if e:
        return web.json_response(e)
    else:
        raise web.HTTPNotFound()
    # request.mongo.get_data

    pass


def create_app(io_loop=None):
    app = web.Application(loop=io_loop,
                          # middlewares=[error_middleware, ]
                          )
    app.mongo = mongo
    aiohttp_jinja2.setup(app, loader=jinja2.FileSystemLoader(str(base_dir / 'templates')))
    app.add_routes([
        web.get('/', lambda request: aiohttp_jinja2.render_template('index.html', request, {})),
        web.get('/version', lambda request: web.Response(text='0.0.3')),
        web.get('/oauth_callback', getToken),
        web.post('/api/v0.1/refresh_token', refreshToken),
        web.get('/query/{website}', fromPlayerUrlToBangumiSubjectID),
        web.post('/watch_episode', watchEpisode),
        web.get('/eps/{subject_id}', w),
        web.post('/api/v0.1/parser/title', nameToSubjectID),
        web.get('/api/v0.2/querySubjectID', querySubjectID),
        web.get('/api/v0.1/missingBilibili', collectMissingBangumiInBilibili),
        web.get('/auth', lambda request: _raise(web.HTTPFound(
            f'https://bgm.tv/oauth/authorize?client_id={APP_ID}&response_type=code&redirect_uri={callback_url}')))
    ])
    cors = aiohttp_cors.setup(app, defaults={
        "*": aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            expose_headers="*",
            allow_headers="*",
        )
    })
    for route in list(app.router.routes()):
        cors.add(route)
    print('create app', flush=True)
    return app


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    web.run_app(create_app(io_loop=loop), port=6003)
