import asyncio
import pathlib
from os import path
from validator import Validator, StringField, IntegerField, EnumField

import aiohttp_cors
import aiohttp
import aiohttp_jinja2
import jinja2
from aiohttp import web

from config import APP_ID, APP_SECRET, HOST, PROTOCOL

callback_url = f'{PROTOCOL}://{HOST}/oauth_callback'
from db import mongo
from dateutil import parser

base_dir = pathlib.Path(path.dirname(__file__))

import json


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
            try:
                r = await resp.json()
            except Exception as e:
                text = await resp.text()
                print(text)
                raise web.HTTPError(reason='bangumi 服务器出现问题 考虑重新授权 返回不是正确的数据而是 ' + text)
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


def _raise(exception: Exception):
    def wrapper(*args, **kwargs):
        raise exception

    return wrapper


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


class ReportMissingBangumiValidator(Validator):
    bangumiID = StringField(strict=False)
    subjectID = StringField()
    title = StringField()
    href = StringField()
    website = EnumField(choices=['bilibili', 'iqiyi'])


async def reportMissingBangumi(request: web.Request):
    data = await request.json()
    v = ReportMissingBangumiValidator(data)
    if not v.is_valid():
        return web.json_response({'message': v.str_errors, 'code': 400, 'status': 'error'}, status=400)
    data = v.validated_data
    try:
        r = await request.app.mongo.bilibili_bangumi.get_collection('missing_bangumi').insert_one(data)
        print(r.inserted_id)
        return web.json_response({'status': 'success'}, status=201)
    except Exception as e:
        return web.json_response({'status': 'error', 'message': str(e)}, status=502)




def create_app(io_loop=None):
    app = web.Application(loop=io_loop,
                          # middlewares=[error_middleware, ]
                          )
    app.mongo = mongo
    aiohttp_jinja2.setup(app, loader=jinja2.FileSystemLoader(str(base_dir / 'templates')))
    app.add_routes([
        web.post('/api/v0.1/refresh_token', refreshToken),
        web.post('/api/v0.1/reportMissingBangumi', reportMissingBangumi),
        web.get('/', _raise(web.HTTPFound('https://github.com/Trim21/bilibili-bangumi-tv-auto-tracker'))),
        web.get('/oauth_callback', getToken),
        web.get('/api/v0.2/querySubjectID', querySubjectID),
        web.get('/api/v0.1/missingBilibili', collectMissingBangumiInBilibili),
        web.get('/auth', _raise(web.HTTPFound(
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
