import pymongo


def epinfo_to_url(epinfo):
    return 'https://www.bilibili.com/bangumi/play/ep{}'.format(epinfo['ep_id'])


def ep_to_url(ep):
    return 'https://bgm.tv/ep/{}'.format(ep['id'])


client = pymongo.MongoClient()
db = client.get_database('bilibili_bangumi')
bilibili_collection = db.get_collection('episode_info')
subject_collection = db.get_collection('bgm_tv_episode_info')
map_collection = db.get_collection('bilibili')
episode_map_collection = db.get_collection('bilibili_episode_map')
bilibili_missing_episode = db.get_collection('bilibili_missing_episode')
count = 0
for item in bilibili_collection.find({}):
    if 'season_id' in item['mediaInfo']:
        i = map_collection.find_one({'_id': str(item['mediaInfo']['season_id'])})
    else:
        i = None
        season_id = None
        if 'seasons' in item['mediaInfo']:
            for season in item['mediaInfo']['seasons']:
                if season['media_id'] == item['mediaInfo']['media_id']:
                    season_id = season['season_id']
                    i = map_collection.find_one({'_id': str(season_id)})
    # print({'_id': str(item['_id'])})
    if not i:
        continue
    subject_id = int(i['subject_id'])
    subject_json = subject_collection.find_one({'_id': subject_id})
    if not subject_json or not subject_json['eps']:
        continue

    f = episode_map_collection.find({
        'media_id': item['mediaInfo']['media_id'],
        # 'ep_id'   : item['epList'][i]['ep_id'],
    })
    c = len(set([x['ep_id'] for x in item['epList']]) - set([x['ep_id'] for x in f]))
    count += c
    if not c:
        bilibili_missing_episode.insert_many([
            {
                'media_id': item['mediaInfo']['media_id'],
                'ep_id'   : x
            } for x in (set([x['ep_id'] for x in item['epList']]) - set([x['ep_id'] for x in f]))
        ])
    # for i in range(len(item['epList'])):
    #     f = episode_map_collection.find_one({
    #         'media_id': item['mediaInfo']['media_id'],
    #         'ep_id'   : item['epList'][i]['ep_id'],
    #     })
    #     if not f:
    #         count += 1
    print(count)
    # print({
    #     'media_id': item['mediaInfo']['media_id'],
    #     'ep_id'   : item['epList'][i]['ep_id'],
    #     'link'    : 'https://www.bilibili.com/bangumi/play/ep{}'.format(item['epList'][i]['ep_id'])
    #
    # })
