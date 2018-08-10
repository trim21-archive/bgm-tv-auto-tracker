import sys, os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../server')))
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__))))

from server.app import create_app
import server

from aiohttp.test_utils import AioHTTPTestCase, unittest_run_loop
from aiohttp.client import ClientResponse

import test_data
import typing

test_data.init()

get = 'GET'
post = "POST"


class MyAppTestCase(AioHTTPTestCase):
    class client:
        request: typing.Callable[[str, str, ], typing.Awaitable[ClientResponse]]

    async def get_application(self):
        """
        Override the get_app method to return your application.
        """
        return create_app(io_loop=self.loop)

    # the unittest_run_loop decorator can be used in tandem with
    # the AioHTTPTestCase to simplify running
    # tests that are asynchronous
    @unittest_run_loop
    async def test_example(self):
        resp = await self.client.request("GET", "/", allow_redirects=False)
        assert resp.status == 302
        assert resp.headers['location'] == 'https://github.com/Trim21/bilibili-bangumi-tv-auto-tracker'

    @unittest_run_loop
    async def test_missing_bangumi(self):
        resp = await self.client.request("GET", "/api/v0.1/missing_bangumi")
        self.assertEqual(resp.status, 200)
        self.assertEqual(resp.content_type, 'application/json')

    @unittest_run_loop
    async def test_submit_missing_bangumi(self):
        test_data = {
            'bangumiID': 'bangumiID',
            'subjectID': 'subjectID',
            'website'  : 'bilibili',
            'title'    : 'title',
            'href'     : 'href',
        }

        resp = await self.client.request(post, '/api/v0.1/reportMissingBangumi', json=test_data)
        self.assertEqual(resp.status, 201)
        resp_list = await self.client.request(get, '/api/v0.1/missing_bangumi')
        self.assertIn(test_data, await resp_list.json())

    @unittest_run_loop
    async def test_query_subject_ID(self):
        resp = await self.client.request(get, '/api/v0.2/querySubjectID',
                                         params={
                                             'website'  : 'iqiyi',
                                             'bangumiID': test_data.iqiyi1['_id']
                                         })
        self.assertEqual(resp.status, 200)
        self.assertEqual((await resp.json())['subject_id'], test_data.iqiyi1['subject_id'])

        resp = await self.client.request(get, '/api/v0.2/querySubjectID',
                                         params={
                                             'website'  : 'iqiyi',
                                             'bangumiID': test_data.iqiyi1['_id'] + 'hello world'
                                         })
        self.assertEqual(resp.status, 404)
        resp = await self.client.request(get, '/api/v0.2/querySubjectID',
                                         params={
                                             'website'  : 'hello world',
                                             'bangumiID': test_data.iqiyi1['_id'] + 'hello world'
                                         })
        self.assertEqual(resp.status, 400)
