from typing import Callable

import aiohttp.client_exceptions

import motor.core
import pytz
from aiohttp import web


class TypeDatabase:
    bangumi: motor.core.AgnosticCollection
    token: motor.core.AgnosticCollection
    missing_bangumi: motor.core.AgnosticCollection
    get_collection: Callable[[str], motor.core.AgnosticCollection]
    statistics_missing_bangumi: motor.core.AgnosticCollection
    episode_info: motor.core.AgnosticCollection
    bilibili_episode_map: motor.core.AgnosticCollection
    bilibili_missing_episode: motor.core.AgnosticCollection


class TypeMongoClient(object):
    bilibili_bangumi: TypeDatabase


class TypeApp(web.Application):
    tz: pytz.timezone
    db: TypeDatabase
    mongo: TypeMongoClient
    client_session: aiohttp.ClientSession


class WebRequest(web.Request):
    app: TypeApp


