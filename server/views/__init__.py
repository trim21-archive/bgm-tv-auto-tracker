import datetime
import json
import time
from urllib.parse import urlparse

from aiohttp import web
from aiohttp_cors import CorsViewMixin, ResourceOptions
import server.website

from server.utils import jsonify, is_authorized_user
from server.constants import mongo_collection_name
from server.app_types import WebRequest
from server.validators import InitialStateValidator, \
    ReportMissingBangumiValidator, \
    EpInputValidator, ReportMissingEpisodeValidator


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


import pymongo.results


async def report_missing_bangumi(request: WebRequest):
    if not request.session.user_id:
        return web.HTTPUnauthorized()
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
    await request.app.db.submitted_missing_bangumi.update_one(
        {
            'bangumi_id': data['bangumiID'],
            'user_id'   : request.session.user_id,
            'website'   : data['website']
        },
        {
            '$push': {
                'history': {
                    'subject_id': data['subjectID'],
                    'title'     : data['title'],
                    'href'      : data['href'],
                    'time'      : datetime.datetime.now(request.app.tz),
                }
            }

        }, upsert=True
    )
    if await is_authorized_user(request):
        await request.db.get_collection(data['website']).update_one(
            {'_id': data['bangumiID'], },
            {'$set': {'title': data['title'], 'subject_id': data['subjectID']}},
            upsert=True)

    return web.json_response({'status': 'success'})


async def report_missing_episode(request: WebRequest):
    """
    {
            bangumiID: this.bangumiID,
            episodeID: this.$website.episodeID.toString(),
            bgmEpisodeID: this.episodeID,
            website: this.website
    }
    :param request:
    :return:
    """
    if not request.session.user_id:
        return web.HTTPUnauthorized()
    data = await request.json()
    v = ReportMissingEpisodeValidator(data)

    if not v.is_valid():
        return web.json_response(
            {'message': v.str_errors,
             'code'   : 400,
             'status' : 'error'},
            status=400
        )
    data = v.validated_data
    await request.app.db.get_collection(mongo_collection_name.EP_INPUT_LOG) \
        .update_one(
        {'website': data['website'], 'ep_id': data['episodeID']},
        {'$push': {str(request.session.user_id): {
            'time'      : int(time.time()),
            'bangumi_id': data['bangumiID'],
            'bgm_ep_id' : data['bgmEpisodeID'],
        }}}, upsert=True
    )
    if await is_authorized_user(request):
        link = server.website.get_website_parser(data['website']) \
            .ep_id_to_link(data['episodeID'])
        await request.db.get_collection(mongo_collection_name.FINAL_BGM_EP_MAP) \
            .update_one(
            {'bangumi_id': data['bangumiID'],
             'user_id'   : request.session.user_id,
             'type'      : data['website']},
            {'$set': {'link': link}},
            upsert=True)

    return web.json_response({'status': 'success'})


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
    if request.session.user_id:
        return True


async def collected_episode_info(request: WebRequest):
    episode = request.query.get('length', None)
    if episode is not None:
        try:
            episode = int(episode)
        except ValueError:
            raise web.HTTPBadRequest(reason='episode not right')
    return web.json_response({
        'message': 'hello world',
        'data'   : await request.app.db.episode_info
            .find({}, {'mediaInfo': 0,
                       'epInfo'   : 0,
                       'pubInfo'  : 0, }).to_list(episode)
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
        'data'   : [
            jsonify(x) for x in
            await request.app.db.bilibili_missing_episode.find().to_list(None)
        ],
    })


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
        try:
            user_input = await request.json()
        except json.decoder.JSONDecodeError:
            return web.HTTPBadRequest()
        v = EpInputValidator(user_input)
        if not v.is_valid():
            print(v.errors)
            return web.HTTPBadRequest()
        user_input = v.validated_data
        user_input['user_id'] = request.session.user_id
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
            'user'     : request.session.user_id,
            'bgm_ep_id': user_input['ep_id'],
            'link'     : user_input['link'],
            'ep_id'    : parser.link_to_ep_id(user_input['link']),
        }

        await request.app.db \
            .get_collection(mongo_collection_name.EP_INPUT_LOG) \
            .update_one(
            {'_id': user_input['ep_id']},
            {'$push': {str(request.session.user_id): {
                'link' : user_input['link'],
                'ep_id': parser.link_to_ep_id(user_input['link']),
            }}}, upsert=True
        )
        print('after put object')
        # current_episode = await request.app.db \
        #     .get_collection(mongo_collection_name.FINAL_BGM_EP_MAP) \
        #     .find_one({'type': input_type, 'ep_id': user_input['ep_id']})
        if await is_authorized_user(request):
            await request.app.db \
                .get_collection(mongo_collection_name.FINAL_BGM_EP_MAP) \
                .update_one(
                {'type': input_type, 'bgm_ep_id': user_input['ep_id']},
                {'$set': data},
                upsert=True
            )
        return web.json_response({'status': 'success'})
