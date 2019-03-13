import datetime
import json
from urllib.parse import urlparse

import aiohttp.client_exceptions
import aiohttp_cors
import aiohttp_jinja2
import pymongo

from aiohttp import web
from aiohttp_cors import CorsViewMixin, ResourceOptions
from dateutil import parser

from .config import oauth_url, APP_ID, APP_SECRET, callback_url
from .utils import jsonify
from .constants import mongo_collection_name
from .app_types import WebRequest
from .validators import InitialStateValidator, ReportMissingBangumiValidator, \
    EpInputValidator


async def collect_episode_info(request: WebRequest):
    d = await request.json()
    v = InitialStateValidator(d)
    if v.is_valid():
        await request.app.db.episode_info.update_one(
            {'_id': v.validated_data['mediaInfo']['media_id']},
            {'$set': v.validated_data}, upsert=True)
        f = await request.app.db.bilibili_episode_map.find_one({
            'ep_id'   : v.validated_data['epInfo']['ep_id'],
            'media_id': v.validated_data['mediaInfo']['media_id'],
        })
        if not f:
            await request.app.db.bilibili_missing_episode.update_one({
                '_id'     : v.validated_data['epInfo']['ep_id'],
                'ep_id'   : v.validated_data['epInfo']['ep_id'],
                'media_id': v.validated_data['mediaInfo']['media_id'],
            }, {'$set': {'time': datetime.datetime.now(request.app.tz)}},
                upsert=True)

    return web.json_response({'message': 'hello world', 'correct': v.is_valid(),
                              'data'   : v.validated_data})


async def try_get_ep_info(request: WebRequest):
    j = await request.json()
    media_id = j.get('media_id')
    ep_id = j.get('ep_id')
    if not (media_id and ep_id):
        return web.HTTPBadRequest()
    return web.json_response({
        'message': '',
        'data'   : {
            'ep_id'  : 123,
            'episode': 1,
            'sort'   : 1
        }})


async def report_missing_bangumi(request: WebRequest):
    data = await request.json()
    v = ReportMissingBangumiValidator(data)

    if not v.is_valid():
        return web.json_response(
            {'message': v.str_errors,
             'code'   : 400,
             'status' : 'error'},
            status=400
        )
    data = v.validated_data
    try:
        await request.app.db.statistics_missing_bangumi.update_one(
            {'bangumi_id': data['bangumiID'], 'website': data['website']},
            {'$set': {'subject_id': data['subjectID'],
                      'title'     : data['title'],
                      'href'      : data['href']}},
        )
        return web.json_response({'status': 'success'})
    except Exception as e:
        return web.json_response({'status' : 'error',
                                  'message': str(e)},
                                 status=502)


website_template = {
    'bilibili': 'https://bangumi.bilibili.com/anime/{}',
    'iqiyi'   : 'https://www.iqiyi.com/{}.html'
}


async def statistics_missing_bangumi(request: WebRequest):
    subject = request.query.get('subject_id')
    condition = {}
    if subject == 'true':
        condition['subject_id'] = {'$exists': True}
    elif subject == 'false':
        condition['subject_id'] = {'$exists': False}
    f = await request.app.db.statistics_missing_bangumi \
        .find(condition, {'_id': 0}) \
        .sort([('times', -1), ('subject_id', 1)]).to_list(500)

    for item in f:
        item['bangumi_url'] = website_template.get(item['website'], '{}') \
            .format(item['bangumi_id'])
        if item.get('subject_id'):
            item['subject_url'] = f"https://bgm.tv/subject/{item['subject_id']}"
    return web.json_response(f)


async def check_user_right(request: WebRequest):
    token = request.cookies.get('app_access_token', None)
    if token:
        user = await request.app.db \
            .get_collection(mongo_collection_name.USER_TOKEN) \
            .find_one({'app_access_token': token})
        return user


async def collected_episode_info(request: WebRequest):
    episode = request.query.get('length', None)
    if episode is not None:
        try:
            episode = int(episode)
        except ValueError:
            raise web.HTTPBadRequest(reason='episode not right')
    return web.json_response({
        'message': 'hello world',
        'data'   : await request.app.db.episode_info.find().to_list(episode)
    })


async def version(request: WebRequest):
    resp = web.Response(text='1.1.1')
    resp.set_cookie('episode-player-url', '233', )
    return resp


def get_type(link: str):
    url_obj = urlparse(link)
    print(url_obj)
    return {
        'www.bilibili.com': 'bilibili',
        'www.iqiyi.com'   : 'iqiyi',
        'www.youku.com'   : 'youku',
        'v.qq.com'        : 'tencent',
    }.get(url_obj.netloc, 'other')


async def missing_episode(request: WebRequest):
    return web.json_response({
        'message': 'hello world',
        'data'   : [jsonify(x) for x in
                    await request.app.db.bilibili_missing_episode.find()
                        .to_list(None)],
    })


async def get_token(request: WebRequest, ):
    app_access_token = 'app_access_token'
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
    r['auth_time'] = int(parser.parse(resp.headers['Date']).timestamp())
    # if not request.cookies.get('app_access_token'):
    user = await request.app.db.token.find_one({'_id': r['user_id']})

    if user:
        if app_access_token not in r:
            r[app_access_token] = r['access_token'] + r["refresh_token"]
    else:
        r[app_access_token] = r['access_token'] + r["refresh_token"]

    # if not (user and app_access_token not in r):
    #     r[app_access_token] = r['access_token'] + r["refresh_token"]

    await request.app.db.token.update_one({'_id': r['user_id']},
                                          {'$set': r},
                                          upsert=True)
    resp = aiohttp_jinja2.render_template('post_to_extension.html', request,
                                          {'data': json.dumps(r), })
    resp.set_cookie(app_access_token, r[app_access_token])
    return resp


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
    r['_id'] = r['user_id']
    r['auth_time'] = int(parser.parse(resp.headers['Date']).timestamp())
    await request.app.db.token.update_one({'_id': r['_id']}, {'$set': r},
                                          upsert=True)
    return web.json_response(r)


import pymongo.results


async def query_subject_id(request: WebRequest):
    website = request.query.get('website', None)
    if website not in ['iqiyi', 'bilibili']:
        return web.HTTPBadRequest(
            reason='missing input `website` or `bangumiID`'
        )

    bangumi_id = request.query.get('bangumiID', None)
    episode_id = request.query.get('episodeID', None)

    if episode_id:
        collection = request.app.db.bgm_tv_episode
        e = await collection.find_one({
            'ep_id': episode_id,
            'type' : website,
        }, {'_id': 0})
        if e:
            await request.app.db.statistics_missing_bangumi.delete_one(
                {'type'      : website,
                 'ep_id'     : episode_id,
                 'bangumi_id': bangumi_id},
            )
            return web.json_response(e)
        else:
            r = await request.app.db.statistics_missing_bangumi.update_one(
                {'type'      : website,
                 'ep_id'     : episode_id,
                 'bangumi_id': bangumi_id},
                {'$inc': {'times': 1}},
                upsert=True
            )
            print(r.raw_result)
        return web.HTTPNotFound()
    elif bangumi_id:
        collection = request.app.db.get_collection(website)
        e = await collection.find_one({'_id': bangumi_id})
        if e:
            await request.app.db.statistics_missing_bangumi.delete_one(
                {'website': website, 'bangumi_id': bangumi_id},
            )
            return web.json_response(e)
        else:
            await request.app.db.statistics_missing_bangumi.update_one(
                {'website': website, 'bangumi_id': bangumi_id},
                {'$inc': {'times': 1}},
                upsert=True
            )
            return web.HTTPNotFound()

    return web.HTTPBadRequest(
        reason='need query `episodeID` or `bangumiID`'
    )


import server.website


class PlayerUrl(web.View, CorsViewMixin):
    request: WebRequest

    cors_config = {
        "*": ResourceOptions(
            allow_credentials=True,
            allow_headers="*",
        )
    }

    async def get(self):
        request = self.request
        try:
            ep_id = int(request.query.get('bgm_ep_id'))
        except (ValueError, TypeError):
            return web.HTTPBadRequest()
        data = await request.app.db \
            .get_collection(mongo_collection_name.FINAL_BGM_EP_MAP) \
            .find({'bgm_ep_id': ep_id}, {'_id': 0}).to_list(None)
        return web.json_response({
            'status': 'success',
            'data'  : data
        })

    async def post(self):
        request = self.request
        user = await check_user_right(request)
        if not user:
            return web.HTTPUnauthorized()
            # return web.json_response({'status': 'error', 'message': 'ma'})
        try:
            user_input = await request.json()
        except json.decoder.JSONDecodeError:
            return web.HTTPBadRequest()
        v = EpInputValidator(user_input)
        if not v.is_valid():
            print(v.errors)
            return web.HTTPBadRequest()
        user_input = v.validated_data
        user_input['user_id'] = user['user_id']
        user_input['type'] = get_type(user_input['link'])
        input_type = get_type(user_input['link'])
        if input_type == 'bilibili':
            if '/ss' in user_input['link']:
                return web.json_response({
                    'status' : 'error',
                    'message': 'B站的视频应该是'
                               'https://www.bilibili.com/bangumi/play/ep(\\d), '
                               '/ss(\\d)结尾的那个地址不能精确定位到每集'
                })
        parser = server.website.get_website_parser(input_type)
        data = {
            'type'     : input_type,
            'user'     : user['user_id'],
            'bgm_ep_id': user_input['ep_id'],
            'link'     : user_input['link'],
            'ep_id'    : parser.link_to_ep_id(user_input['link']),
        }

        await request.app.db.get_collection(mongo_collection_name.EP_INPUT_LOG) \
            .update_one(
            {'user': user['user_id'], 'bgm_ep_id': user_input['ep_id']},
            {'$set': data}, upsert=True
        )

        current_episode = await request.app.db \
            .get_collection(mongo_collection_name.FINAL_BGM_EP_MAP) \
            .find_one({'type': input_type, 'ep_id': user_input['ep_id']})
        if not current_episode:
            await request.app.db \
                .get_collection(mongo_collection_name.FINAL_BGM_EP_MAP) \
                .update_one(
                {'type': input_type, 'bgm_ep_id': user_input['ep_id']},
                {'$set': data},
                upsert=True)

        # async def get_user_info(user):
        #     r = await request.app.client_session.get(
        #         f"https://api.bgm.tv/user/{user_input['user']}"
        #     )
        #     request.app.db.get_collection('user_token')
        #
        # loop.call_later(1, get_user_info)
        return web.json_response({'status': 'success'})
