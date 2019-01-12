import asyncio
import json
import pathlib
from os import path
from typing import Callable

import aiohttp
import aiohttp.http
import aiohttp_cors
import aiohttp_jinja2
import jinja2
import motor.core
import pytz
from aiohttp import web
from dateutil import parser
from validator import Validator, StringField, EnumField, ListField, IntegerField, DictField

from config import APP_ID, APP_SECRET, HOST, PROTOCOL
from db import setup_mongo

github_url = 'https://github.com/Trim21/bilibili-bangumi-tv-auto-tracker'
callback_url = f'{PROTOCOL}://{HOST}/oauth_callback'
oauth_url = f'https://bgm.tv/oauth/authorize?client_id={APP_ID}' \
    f'&response_type=code&redirect_uri={callback_url}'

base_dir = pathlib.Path(path.dirname(__file__))


class TypeDatabase(object):
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
    pass


class TypeApp(web.Application):
    tz: pytz.timezone
    db: TypeDatabase
    mongo: TypeMongoClient
    client_session: aiohttp.ClientSession


class WebRequest(web.Request):
    app: TypeApp


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
    r['auth_time'] = int(parser.parse(resp.headers['Date']).timestamp())
    await request.app.db.token.find_one({'_id': r['user_id']})
    await request.app.db.token.update_one({'_id': r['user_id']},
                                          {'$set': r},
                                          upsert=True)
    return aiohttp_jinja2.render_template('post_to_extension.html', request,
                                          {'data': json.dumps(r), })


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
    async with request.app.client_session \
        .post('https://bgm.tv/oauth/access_token', json=data) as resp:
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


async def query_subject_id(request: WebRequest):
    website = request.query.get('website', None)
    bangumi_id = request.query.get('bangumiID', None)
    if not (website and bangumi_id and website in ['iqiyi', 'bilibili']):
        raise web.HTTPBadRequest(
            reason='missing input `website` or `bangumiID`'
        )
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
        raise web.HTTPNotFound()


class ReportMissingBangumiValidator(Validator):
    bangumiID = StringField(strict=False, required=True)
    subjectID = StringField(required=True)
    title = StringField(required=True)
    href = StringField(required=True)
    website = EnumField(choices=['bilibili', 'iqiyi'], required=True)


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
        item['bangumi_url'] = website_template \
            .get(item['website'], '{}').format(item['bangumi_id'])
        if item.get('subject_id'):
            item['subject_url'] = 'https://bgm.tv/subject/{}' \
                .format(item['subject_id'])
    return web.json_response(f)


async def dump_website(request: WebRequest):
    website = request.query.get('website')
    if not website or website not in ['bilibili', 'iqiyi']:
        raise web.HTTPBadRequest(reason='need a query `website`')
    l = await request.app.db.get_collection(website).find().to_list(5000)
    return web.json_response(l)


def redirect(location):
    async def r(*args):
        raise web.HTTPFound(location)

    return r


async def clean_up(app):
    await app.client_session.close()


class EpisodeItemValidator(Validator):
    aid = IntegerField()
    badge = StringField()
    badge_type = IntegerField()
    cid = IntegerField()
    cover = StringField()  #: "http://i1.hdslb.com/bfs/archive/ee4a86efc84a667783de4ee77b4229c751569237.jpg"
    duration = IntegerField()  #: 1434005
    ep_id = IntegerField()  #: 114966
    episode_status = IntegerField()  #: 13
    index = StringField()  #: "1"
    index_title = StringField()  #: "亚斯塔与尤诺"
    mid = IntegerField()  #: 21453565
    page = IntegerField()  #: 1
    pub_real_time = StringField()  #: "2017-10-03 18:25:00"
    section_id = IntegerField()  #: 23405
    section_type = IntegerField()  #: 0
    vid = StringField()  #: ""
    # from = StringField()  #: "bangumi"


setattr(EpisodeItemValidator, 'from', StringField())


class EpisodeInfoValidator(EpisodeItemValidator):
    pass


class MediaInfoValidator(Validator):
    actors = StringField()  #:
    # "亚斯塔：梶原岳人↵尤诺：岛崎信长↵夜见介大：诹访部顺一↵诺艾儿·西尔法：优木加奈↵芬拉尔·尔拉凯斯：福山润↵玛格那·斯威格：室元气↵拉克·鲍尔提亚：村濑步↵葛修·亚德雷：日野聪↵"
    alias = StringField()  #: "黑色五叶草,BLACK CLOVER,黑五,黑色三叶草,黑色四叶草"
    areas = ListField()  #: Array(1)
    cover = StringField()  #: "http://i0.hdslb.com/bfs/bangumi/c345335f3cc395f7cfbe7e7e0a4913f9b1671fe2.jpg"
    evaluate = StringField()  #: \
    # "曾经险些遭到魔神毁灭的世界，拯救它的是一位被后世称为“魔法帝”的魔导士……两位被遗弃在教堂的少年，一位是有卓越魔力跟魔法才能的四叶草魔导书的尤诺，另一位魔法值为零但却意外获得黑色五叶草的魔法书的亚斯塔……这是关于一位没魔法能力的少年却想要成为魔法帝的故事。"
    is_paster_ads = IntegerField()  #: 0
    jp_title = StringField()  #: "ブラッククローバー"
    link = StringField()  #: "http://www.bilibili.com/bangumi/media/md6422/"
    media_id = IntegerField()  #: 6422
    mode = IntegerField()  #: 2
    paster_text = StringField()  #: ""
    season_id = IntegerField()  #: 6422
    season_status = IntegerField()  #: 13
    season_title = StringField()  #: "TV"
    season_type = IntegerField()  #: 1
    series_title = StringField()  #: "黑色四叶草"
    square_cover = StringField()  #: "http://i0.hdslb.com/bfs/bangumi/1d703634cd3ee35b625bf882f27289db301cae63.jpg"
    staff = StringField()  #: "原作：田畠裕基（集英社《周刊少年JUMP" \
    #
    #  "》连载）↵监督：吉原达矢↵系列构成：笔安一幸↵角色设计：竹田逸子↵次要角色设计：德永久美子↵道具设计：高桥恒星↵美术监督：前田有纪↵摄影监督：国井智行↵色彩设计：篠原爱子↵编辑：奥田浩史↵音乐：关美奈子↵音响监督：高桑一↵动画制作：studio pierrot↵制作：黑色五叶草制作委员会"
    stat = DictField()  #: Object
    style = ListField()  #: Array(4)
    title = StringField()  #: "黑色四叶草"
    total_ep = IntegerField()  #: 0


class InitialStateValidator(Validator):
    epList = ListField(DictField(EpisodeItemValidator))
    epInfo = DictField(EpisodeInfoValidator)
    mediaInfo = DictField(MediaInfoValidator)


import datetime
import pytz


async def collect_episode_info(request: WebRequest):
    d = await request.json()
    v = InitialStateValidator(d)
    if v.is_valid():
        await request.app.db.episode_info.update_one({'_id': v.validated_data['mediaInfo']['media_id']},
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
            }, {'$set': {'time': datetime.datetime.now(request.app.tz)}}, upsert=True)
    return web.json_response({'message': 'hello world', 'correct': v.is_valid(), 'data': v.validated_data})


async def try_get_ep_info(request: WebRequest):
    j = await request.json()
    media_id = j.get('media_id')
    ep_id = j.get('ep_id')
    if not (media_id and ep_id):
        return web.HTTPBadRequest()
    return web.json_response({'message': '',
                              'data'   : {
                                  'ep_id'  : 123,
                                  'episode': 1,
                                  'sort'   : 1
                              }})


async def ep_map(request: WebRequest):
    media_id = request.query.get('media_id', None)
    m = await request.app.db.get_collection('bilibili_episode_map').find({'media_id': int(media_id)}).to_list(None)
    d = {'eps': {}}
    for i in m:
        d['eps'][i['ep_id']] = {'id': i['bgm_tv_ep_id'], 'rank': i.get('index', 1)}
    return web.json_response(d)


async def collected_episode_info(request: WebRequest):
    return web.json_response({'message': 'hello world', 'data': await request.app.db.episode_info.find().to_list(None)})


async def missing_episode(request: WebRequest):
    return web.json_response({
        'message': 'hello world',
        'data'   : await request.app.db.bilibili_missing_episode.find().to_list(None),
    })


def create_app(io_loop=asyncio.get_event_loop()):
    app = web.Application(
        # middlewares=[error_middleware, ]
    )
    app.tz = pytz.timezone('Asia/Shanghai')
    app.on_cleanup.append(clean_up)
    app.client_session = aiohttp.ClientSession(loop=io_loop)
    setup_mongo(app, io_loop)
    aiohttp_jinja2.setup(app, loader=jinja2.FileSystemLoader(str(base_dir / 'templates')))
    app.add_routes([
        web.get('/', redirect(github_url)),
        web.get('/dump', dump_website),
        web.get('/auth', redirect(oauth_url)),
        web.get('/oauth_callback', get_token),
        web.get('/api/v0.2/querySubjectID', query_subject_id),
        web.get('/statistics_missing_bangumi', statistics_missing_bangumi),
        web.get('/bilibili_missing_episode', missing_episode),
        web.post('/api/v0.1/refresh_token', refresh_auth_token),
        web.post('/api/v0.1/reportMissingBangumi', report_missing_bangumi),
        web.get('/api/v0.1/collected_episode_info', collected_episode_info),
        web.post('/api/v0.1/collect_episode_info', collect_episode_info),

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
