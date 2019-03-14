import json

import aiohttp.client_exceptions
import aiohttp_jinja2
from aiohttp import web
from dateutil import parser as date_parser

from server.app_types import WebRequest
from server.config import oauth_url, APP_ID, APP_SECRET, callback_url


async def get_token(request: WebRequest, ):
    code = request.query.get('code', None)
    if not code:
        raise web.HTTPFound(location=oauth_url)
    async with request.app.client_session.post(
        'https://bgm.tv/oauth/access_token',
        data={'grant_type'   : 'authorization_code',
              'client_id'    : APP_ID,
              'client_secret': APP_SECRET,
              'code'         : code,
              'redirect_uri' : callback_url}) as resp:
        try:
            r = await resp.json()
        except aiohttp.client_exceptions.ContentTypeError:
            raise web.HTTPFound(oauth_url)
    if 'error' in r:
        return web.json_response(r, status=400)
    r['auth_time'] = int(date_parser.parse(resp.headers['Date']).timestamp())
    async with request.app.client_session.get(
        'https://api.bgm.tv/user/{}'.format(r['user_id'])
    ) as resp:
        try:
            user_info = await resp.json()
        except aiohttp.client_exceptions.ContentTypeError:
            raise web.HTTPFound(oauth_url)

    session = await request.session.new_session()
    session.update(r)
    session.update(user_info)
    session.login = True
    return aiohttp_jinja2.render_template('post_to_extension.html',
                                          request,
                                          {'data': json.dumps(r)})


async def refresh_auth_token(request: WebRequest, ):
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
    async with request.app.client_session.post(
        'https://bgm.tv/oauth/access_token', json=data
    ) as resp:
        try:
            r = await resp.json()
        except aiohttp.client_exceptions.ContentTypeError:
            return web.json_response({}, status=504)
    if 'error' in r:
        return web.json_response(r)
    r['auth_time'] = int(date_parser.parse(resp.headers['Date']).timestamp())

    async with request.app.client_session.get(
        'https://api.bgm.tv/user/{}'.format(r['user_id'])
    ) as resp:
        try:
            user_info = await resp.json()
        except aiohttp.client_exceptions.ContentTypeError:
            raise web.HTTPFound(oauth_url)

    if request.session.login:
        request.session.update(r)
    else:
        s = await request.session.new_session()
        s.update(r)
    request.session.update(user_info)
    return web.json_response(r)
