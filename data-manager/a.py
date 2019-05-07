import pymongo

client = pymongo.MongoClient()
db = client.get_database('bilibili_bangumi')
bgm_collection = db.get_collection('bgm_tv_episode_info')
bilibili_collection = db.get_collection('episode_info')
map_collection = db.get_collection('bilibili')


def find_subject():
    pass


for bili in bilibili_collection.find({
    'mediaInfo.season_id': {'$exists': True}
}):
    m = map_collection.find_one({'_id': str(bili['mediaInfo']['season_id'])})
    if not m:
        continue
    bgm = bgm_collection.find_one({'_id': int(m['subject_id'])})
    if not bgm:
        continue
    if not bgm['eps']:
        print(bgm)
        continue
    for item in bgm['eps']:
        for b in bili['epList']:
            if str(item['sort']) == b['index']:
                db.get_collection('bgm_tv_episode') \
                    .update_one(
                    {'ep_id'    : str(b['ep_id']),
                     'type'     : 'bilibili',
                     'bgm_ep_id': str(item['id'])},
                    {'$set': {
                        'link': 'https://www.bilibili.com/bangumi/play/ep'
                            .format(b['ep_id'])}},
                    upsert=True
                )

    # print(bgm)
