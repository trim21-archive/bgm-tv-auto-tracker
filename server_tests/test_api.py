import json
import sys, os
from os import path
import logging

l = logging.getLogger()
l.setLevel(logging.DEBUG)
l.addHandler(logging.StreamHandler(sys.stdout))

sys.path.insert(0, os.path.abspath(
    os.path.join(
        os.path.dirname(__file__), '../server')
))

if not os.environ.get('APP_ID'):
    os.environ['APP_ID'] = 'APP_ID'

if not os.environ.get('APP_SECRET'):
    os.environ['APP_SECRET'] = 'APP_SECRET'

APP_ID = os.environ['APP_ID']
APP_SECRET = os.environ['APP_SECRET']

import pymongo
from app import create_app
import app as my_app
# from db import mongo_url
import db
import asyncio

from unittest import mock
from asyncio import coroutine

mongo_client = pymongo.MongoClient(db.mongo_url)
database = mongo_client.get_database(db.MongoConfig.db_name)

data = {
    "iqiyi"   : [
        {"_id": "a_19rrhb12tt", "subject_id": "40379", "title": "鬼太郎"},
        {"_id": "a_19rrha4rcx", "subject_id": "11191", "title": "小蜜蜂寻亲记"}
    ],
    "bilibili": [
        {"_id": "790", "title": "交响诗篇", "subject_id": "1266"},
        {"_id": "3287", "title": "火影忍者 疾风传", "subject_id": "2782"}
    ]
}

for website, items in data.items():
    database.get_collection(website).drop()
    database.get_collection(website).insert_many(items)


# no fixtures_root

async def test_no_root_absolute_path(aiohttp_client):
    app = create_app()
    # app.router.add_get('/', )
    client = await aiohttp_client(app)
    resp = await client.get('/', allow_redirects=False)
    assert resp.status == 302


from aiohttp import web
import aiohttp
import typing

aiohttpClient = typing.Callable[
    [web.Application],
    typing.Awaitable[aiohttp.ClientSession]
]


class mock_request:
    def __aenter__(self):
        pass

    def __aexit__(self, exc_type, exc_val, exc_tb):
        pass


async def test_get_query_id_200(aiohttp_client: aiohttpClient, loop):
    app = create_app(loop)
    # app.router.add_get('/', )
    client = await aiohttp_client(app)
    resp = await client.get('/api/v0.2/querySubjectID',
                            params={'website'  : 'bilibili',
                                    'bangumiID': '790'})
    assert resp.status == 200
    j = await resp.json()
    assert j["subject_id"] == "1266"


async def test_get_query_id_404(aiohttp_client, loop):
    app = create_app(loop)
    client = await aiohttp_client(app)
    resp = await client.get('/api/v0.2/querySubjectID',
                            params={'website'  : 'bilibili',
                                    'bangumiID': '233'})
    assert resp.status == 404


async def test_get_wrong_website_400(aiohttp_client: aiohttpClient, loop):
    app = create_app(loop)
    client = await aiohttp_client(app)
    resp = await client.get('/api/v0.2/querySubjectID',
                            params={'website'  : 'wrong',
                                    'bangumiID': '233'})
    assert resp.status == 400


async def test_get_token_no_code_302(aiohttp_client: aiohttpClient, loop):
    app = create_app(loop)
    client = await aiohttp_client(app)
    resp = await client.get('/oauth_callback',
                            allow_redirects=False,
                            )
    assert resp.status == 302


# from asynctest import MagicMock, CoroutineMock
# import asynctest

from mock import MagicMock


class AsyncMagicMock(MagicMock):
    async def __aenter__(self):
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        pass


def getMockPost(return_value, headers=None):
    def post(*args, **kwargs):
        mm = AsyncMagicMock(
            headers=headers,
            json=coroutine(lambda: return_value)
        )
        return mm

    m = AsyncMagicMock(
        side_effect=post
    )
    return m


import mock


async def test_get_token_with_code_400(aiohttp_client: aiohttpClient, loop):
    p = mock.patch('aiohttp.ClientSession.post', getMockPost({'error': '1234'}))
    p.start()
    app = create_app(loop)
    client = await aiohttp_client(app)
    resp = await client.get('/oauth_callback',
                            allow_redirects=False,
                            params={'code': '233'})
    assert resp.status == 400
    p.stop()


async def test_get_token_with_code_200(aiohttp_client: aiohttpClient, loop):
    p = mock.patch('aiohttp.ClientSession.post',
                   getMockPost(
                       {'user_id': '1234'},
                       headers={'Date': 'Mon, 03 Sep 2018 15:40:42 GMT'}
                   ))
    p.start()
    app = create_app(loop)
    client = await aiohttp_client(app)
    resp = await client.get('/oauth_callback',
                            allow_redirects=False,
                            params={'code': '233'})
    assert resp.status == 200
    assert 'user_id' in await resp.text()
    assert '1234' in await resp.text()
    assert 'var data' in await resp.text()
    p.stop()


async def test_collect_missing_bangumi(aiohttp_client: aiohttpClient, loop):
    app = create_app(loop)
    client = await aiohttp_client(app)
    resp = await client.get('/api/v0.2/querySubjectID',
                            params={'website'  : 'bilibili',
                                    'bangumiID': '233'})
    assert resp.status == 404

    resp = await client.get('/statistics_missing_bangumi',
                            params={'website'  : 'bilibili',
                                    'bangumiID': '233'})
    assert resp.status == 200
    r = await resp.json()
    i = [x for x in r
         if x['website'] == 'bilibili' and x['bangumi_id'] == '233']
    assert bool(i)
    i = i[0]

    await client.get('/api/v0.2/querySubjectID',
                     params={'website'  : 'bilibili',
                             'bangumiID': '233'})
    resp = await client.get('/statistics_missing_bangumi',
                            params={'website'  : 'bilibili',
                                    'bangumiID': '233'})
    assert int(i['times'] - [x for x in await resp.json()
                             if x['website'] == 'bilibili' and
                             x['bangumi_id'] == '233'][0]['times']) == -1


async def test_submit_missing_bangumi_400(aiohttp_client: aiohttpClient, loop):
    app = create_app(loop)
    client = await aiohttp_client(app)

    await client.get('/api/v0.2/querySubjectID',
                     params={'website'  : 'bilibili',
                             'bangumiID': '233'})
    e = {
        'bangumiID': '233',
        'subjectID': 's_id',
        'title'    : 't',
        'href'     : 'h',
        'website'  : 'bilibili',
    }
    resp = await client.post('/api/v0.1/reportMissingBangumi', json=e)
    print(await resp.json())

    resp = await client.get('/statistics_missing_bangumi',
                            params={'website'  : 'bilibili',
                                    'bangumiID': '233'})
    i = [x for x in await resp.json()
         if x['website'] == 'bilibili' and
         x['bangumi_id'] == '233'][0]
    assert i['subject_id'] == 's_id'
    assert i['href'] == 'h'
    assert i['title'] == 't'
