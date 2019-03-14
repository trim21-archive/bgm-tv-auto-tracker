from decimal import Decimal
from typing import Callable, List, Optional, Union
from typing import Mapping

import aiohttp.client_exceptions
import aiohttp_session

import motor.core
import pytz
from aiohttp import web


class S:
    login: bool
    # message: List
    # user info
    # nickname: Optional[str]
    # email: Optional[str]

    finish_register: Optional[bool]

    # auth token
    scope: Optional[None]
    user_id: Optional[int]
    auth_time: Optional[int]
    expires_in: Optional[int]
    token_type: Optional[str]
    access_token: Optional[str]
    refresh_token: Optional[str]

    # csrf
    csrf_token: Optional[str]
    csrf_time: Optional[int]


class ClassSession(S):
    # __annotations__ = S.__annotations__

    # _request = None
    # _session = None

    async def new_session(self) -> 'ClassSession':
        self._session = await aiohttp_session.new_session(self._request)
        self._request.session = self
        return self

    @classmethod
    async def from_request(cls, request: 'WebRequest'):
        session = await aiohttp_session.get_session(request)
        return cls(request, session)

    def __init__(self, request: 'WebRequest', session: aiohttp_session.Session):
        self._request = request
        self._session = session

    def __getattr__(self, item: str):
        if item not in S.__annotations__:
            raise AttributeError('{} is not a valid session key'.format(item))
        return self._session.get(item)

    def __setattr__(self, key, value):
        if key in ['_session', '_request']:
            object.__setattr__(self, key, value)
            return
        if key not in S.__annotations__:
            raise AttributeError(
                '{key} is not a valid session key, try to '
                'set session.{key} = `{value}`'.format(key=key, value=value)
            )
        self._session[key] = value

    def update(self, d: Mapping):
        for key, value in d.items():
            self.__setattr__(key, value)

    def __iter__(self):
        yield from self._session.items()

    def __repr__(self):
        return '<ClassSession {}'.format(self._session)

    def items(self):
        yield from self._session.items()

    __str__ = __repr__

    def to_dict(self):
        return self._session


class TypeDatabase:
    bangumi: motor.core.AgnosticCollection
    token: motor.core.AgnosticCollection
    missing_bangumi: motor.core.AgnosticCollection
    get_collection: Callable[[str], motor.core.AgnosticCollection]
    statistics_missing_bangumi: motor.core.AgnosticCollection
    episode_info: motor.core.AgnosticCollection
    bilibili_episode_map: motor.core.AgnosticCollection
    bilibili_missing_episode: motor.core.AgnosticCollection
    bgm_tv_episode: motor.core.AgnosticCollection
    submitted_missing_bangumi: motor.core.AgnosticCollection


class TypeMongoClient(object):
    bilibili_bangumi: TypeDatabase


class TypeApp(web.Application):
    tz: pytz.timezone
    db: TypeDatabase
    mongo: TypeMongoClient
    client_session: aiohttp.ClientSession


class WebRequest(web.Request):
    app: TypeApp
    db: TypeDatabase
    session: ClassSession
