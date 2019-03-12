import asyncio
import pathlib
from os import path

import aiohttp.client_exceptions
import aiohttp
import aiohttp.http
import aiohttp_cors
import aiohttp_jinja2
import jinja2
from aiohttp import web
import pytz

from .config import oauth_url, github_url
from .db import setup_mongo
from .types import WebRequest
from .views import collect_episode_info, report_missing_bangumi, \
    statistics_missing_bangumi, collected_episode_info, \
    version, get_player_url, submit_player_url, missing_episode, get_token, \
    refresh_auth_token, query_subject_id
import aiohttp

base_dir = pathlib.Path(path.dirname(__file__))


def redirect(location):
    async def r(request: WebRequest):
        raise web.HTTPFound(location)

    return r


async def clean_up(app):
    await app.client_session.close()


# class PlayerUrl(web.View)

# async def setupClientSession(app: web.Application,
#                              io_loop: asyncio.AbstractEventLoop):
#     app.client_session = aiohttp.ClientSession(loop=io_loop)


def create_app(io_loop=asyncio.get_event_loop()):
    app = web.Application(
        # middlewares=[error_middleware, ]
    )
    app.tz = pytz.timezone('Asia/Shanghai')
    app.on_cleanup.append(clean_up)
    app.client_session = aiohttp.ClientSession(
        loop=io_loop,
        connector=aiohttp.TCPConnector(loop=io_loop,
                                       resolver=aiohttp.AsyncResolver)
    )
    # await setupClientSession(app, io_loop)
    setup_mongo(app, io_loop)
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
        web.post('/api/v0.1/refresh_token', refresh_auth_token),
        web.post('/api/v0.1/reportMissingBangumi', report_missing_bangumi),
        web.get('/api/v0.1/collected_episode_info', collected_episode_info),
        web.post('/api/v0.1/collect_episode_info', collect_episode_info),
        web.get('/api/v0.1/player_url', get_player_url),
        web.post('/api/v0.1/player_url', submit_player_url),
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
