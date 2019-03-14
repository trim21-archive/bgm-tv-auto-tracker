import asyncio
import os
import pathlib
from os import path

import aiohttp
import aiohttp.client_exceptions
import aiohttp.http
import aiohttp_cors
import aiohttp_jinja2
import aiohttp_session
import jinja2
import pytz
from aiohttp import web

from server.middlewares import session_middleware
from server.views.oauth import get_token, refresh_auth_token
from server.app_types import WebRequest, TypeApp
from server.config import oauth_url, github_url
from server.db import setup_mongo
from server.session import MongoStorage
from server.views import collect_episode_info, report_missing_bangumi, \
    statistics_missing_bangumi, collected_episode_info, \
    version, missing_episode, query_subject_id, PlayerUrl, \
    report_missing_episode

base_dir = pathlib.Path(path.dirname(__file__))


def redirect(location):
    async def r(request: WebRequest):
        raise web.HTTPFound(location)

    return r


async def clean_up(app):
    await app.client_session.close()


def create_app(io_loop=asyncio.get_event_loop()):
    app: TypeApp = web.Application(
        # middlewares=[error_middleware, ]
    )
    app.tz = pytz.timezone('Asia/Shanghai')
    app.on_cleanup.append(clean_up)
    app.client_session = aiohttp.ClientSession(loop=io_loop)
    setup_mongo(app, io_loop)

    aiohttp_session.setup(
        app,
        MongoStorage(
            collection=app.db.get_collection('user_session'),
            max_age=60 * 60 * 24 * 14,
        )
    )
    app.middlewares.append(session_middleware)
    aiohttp_jinja2.setup(
        app, loader=jinja2.FileSystemLoader(str(base_dir / 'templates'))
    )
    app.add_routes([
        web.get('/', redirect(github_url)),
        web.get('/auth', redirect(oauth_url)),
        web.get('/version', version),
        web.get('/oauth_callback', get_token),
        web.get('/api/v0.2/querySubjectID', query_subject_id),
        web.get('/statistics_missing_bangumi', statistics_missing_bangumi),
        web.get('/bilibili_missing_episode', missing_episode),
        web.get('/api/v0.1/collected_episode_info', collected_episode_info),

        web.post('/api/v0.1/refresh_token', refresh_auth_token),
        web.post('/api/v0.1/collect_episode_info', collect_episode_info),

        web.post('/api/v0.1/reportMissingBangumi', report_missing_bangumi),
        web.post('/api/v0.1/report_missing_episode', report_missing_episode),

        web.view('/api/v0.1/player_url', PlayerUrl),
    ])
    if os.getenv('DEV'):
        import json

        async def show_session(request: WebRequest):
            return web.json_response({
                key: value for key, value in request.session.items()
            }, dumps=lambda x: json.dumps(x, indent=2, ensure_ascii=False))

        app.add_routes([
            web.get('/dev/show_session', show_session),
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
    return app


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    web.run_app(create_app(io_loop=loop), port=6003)
