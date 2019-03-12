import asyncio
import json
import sys, os
from os import path
import logging

import pytest
from mock import MagicMock
import mock

from unittest import mock
from asyncio import coroutine
from aiohttp import web
import aiohttp
import typing

import pymongo
from server.app import create_app
import server

if not os.environ.get('APP_ID'):
    os.environ['APP_ID'] = 'APP_ID'

if not os.environ.get('APP_SECRET'):
    os.environ['APP_SECRET'] = 'APP_SECRET'

APP_ID = os.environ['APP_ID']
APP_SECRET = os.environ['APP_SECRET']

mongo_client = pymongo.MongoClient(server.db.MongoConfig.mongo_url)
database = mongo_client.get_database(server.db.MongoConfig.db_name)

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

@pytest.fixture
async def cli(loop, aiohttp_client):
    loop = asyncio.get_event_loop()
    app = create_app(loop)
    return await aiohttp_client(app)


async def test_no_root_absolute_path(cli):
    # app = create_app()
    # app.router.add_get('/', )
    resp = await cli.get('/', allow_redirects=False)
    assert resp.status == 302


class MockRequest:
    def __aenter__(self):
        pass

    def __aexit__(self, exc_type, exc_val, exc_tb):
        pass


async def test_get_query_id_200(cli):
    resp = await cli.get('/api/v0.2/querySubjectID',
                         params={'website'  : 'bilibili',
                                 'bangumiID': '790'})
    assert resp.status == 200
    j = await resp.json()
    assert j["subject_id"] == "1266"


async def test_get_query_id_404(cli):
    resp = await cli.get('/api/v0.2/querySubjectID',
                         params={'website'  : 'bilibili',
                                 'bangumiID': '233'})
    assert resp.status == 404


async def test_get_wrong_website_400(cli):
    resp = await cli.get('/api/v0.2/querySubjectID',
                         params={'website'  : 'wrong',
                                 'bangumiID': '233'})
    assert resp.status == 400


async def test_get_token_no_code_302(cli):
    resp = await cli.get('/oauth_callback', allow_redirects=False, )
    assert resp.status == 302


class AsyncMagicMock(MagicMock):
    async def __aenter__(self):
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        pass


def get_mock_post(return_value, headers=None):
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


async def test_get_token_with_code_400(cli):
    p = mock.patch('aiohttp.ClientSession.post',
                   get_mock_post({'error': '1234'}))
    p.start()
    resp = await cli.get('/oauth_callback',
                         allow_redirects=False,
                         params={'code': '233'})
    assert resp.status == 400
    p.stop()


async def test_get_token_with_code_200(cli):
    p = mock.patch(
        'aiohttp.ClientSession.post',
        get_mock_post(
            {'user_id'      : '1234',
             'access_token' : 'access_token',
             'refresh_token': 'refresh_token', },
            headers={'Date': 'Mon, 03 Sep 2018 15:40:42 GMT'}
        )
    )
    p.start()
    resp = await cli.get('/oauth_callback',
                         allow_redirects=False,
                         params={'code': '233'})
    assert resp.status == 200
    assert 'user_id' in await resp.text()
    assert '1234' in await resp.text()
    assert 'var data' in await resp.text()
    p.stop()


async def test_collect_missing_bangumi(cli):
    resp = await cli.get('/api/v0.2/querySubjectID',
                         params={'website'  : 'bilibili',
                                 'bangumiID': '233'})
    assert resp.status == 404

    resp = await cli.get('/statistics_missing_bangumi',
                         params={'website'  : 'bilibili',
                                 'bangumiID': '233'})
    assert resp.status == 200
    r = await resp.json()
    i = [x for x in r
         if x['website'] == 'bilibili' and x['bangumi_id'] == '233']
    assert bool(i)
    i = i[0]

    await cli.get('/api/v0.2/querySubjectID',
                  params={'website'  : 'bilibili',
                          'bangumiID': '233'})
    resp = await cli.get('/statistics_missing_bangumi',
                         params={'website'  : 'bilibili',
                                 'bangumiID': '233'})
    assert int(i['times'] - [x for x in await resp.json()
                             if x['website'] == 'bilibili' and
                             x['bangumi_id'] == '233'][0]['times']) == -1


async def test_submit_missing_bangumi_400(cli):
    await cli.get('/api/v0.2/querySubjectID',
                  params={'website'  : 'bilibili',
                          'bangumiID': '233'})
    e = {
        'bangumiID': '233',
        'subjectID': 's_id',
        'title'    : 't',
        'href'     : 'h',
        'website'  : 'bilibili',
    }
    resp = await cli.post('/api/v0.1/reportMissingBangumi', json=e)
    print(await resp.json())

    resp = await cli.get('/statistics_missing_bangumi',
                         params={'website'  : 'bilibili',
                                 'bangumiID': '233'})
    i = [x for x in await resp.json()
         if x['website'] == 'bilibili' and
         x['bangumi_id'] == '233'][0]
    assert i['subject_id'] == 's_id'
    assert i['href'] == 'h'
    assert i['title'] == 't'
