import asyncio
import pathlib
from os import path
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
    extension_id = request.match_info.get('extension_id', 'gdifpeefpjjmkgcpiaplkhemifadigmp')

    if not code:
        return web.Response()
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
        r['_id'] = r['user_id']
        r['auth_time'] = int(parser.parse(resp.headers['Date']).timestamp())

        get_mongo_collection(request).update({'_id': r['_id']}, r, upsert=True)
        return aiohttp_jinja2.render_template('post_to_extension.html', request, {'data': json.dumps(r), {'extension_id': extension_id}})


from utils import fromIDToSubject


async def fromPlayerUrlToBangumiSubjectID(request: web.Request):
    data = request.query
    bangumi_id = request.query.get('bangumi_id', None)
    website = request.match_info.get('website', None)
    if bangumi_id and website:
        r = await request.app.mongo.bilibili_bangumi.bilibili.find_one({'_id': bangumi_id})
        print(r)
        if r:
            return web.json_response({'subject_id': r['bangumi_id']})
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

    async with aiohttp.ClientSession() as session:
        async with session.post('https://bgm.tv/oauth/access_token',
                                data={'grant_type'   : 'refresh_token',
                                      'client_id'    : APP_ID,
                                      'client_secret': APP_SECRET,
                                      'refresh_token': refresh_token,
                                      'redirect_uri' : callback_url}) as resp:
            r = await resp.json()
        if 'error' in r:
            return web.json_response(r)
        r['_id'] = r['user_id']
        r['auth_time'] = int(parser.parse(resp.headers['Date']).timestamp())

        get_mongo_collection(request).update({'_id': r['_id']}, r, upsert=True)
        return web.json_response(r)


def _raise(exception: Exception):
    raise exception


def create_app(io_loop=None):
    app = web.Application(loop=io_loop,
                          # middlewares=[error_middleware, ]
                          )
    app.mongo = mongo
    aiohttp_jinja2.setup(app, loader=jinja2.FileSystemLoader(str(base_dir / 'templates')))
    cors = aiohttp_cors.setup(app)
    app.add_routes([
        web.get('/', lambda request: aiohttp_jinja2.render_template('index.html', request, {})),
        web.get('/version', lambda request: web.Response(text='0.0.1')),
        web.get('/oauth_callback/{extension_id}', getToken),
        web.post('/refresh_token', refreshToken),
        web.get('/query/{website}', fromPlayerUrlToBangumiSubjectID)
    ])
    print('create app', flush=True)
    return app


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    web.run_app(create_app(io_loop=loop), port=6003)
