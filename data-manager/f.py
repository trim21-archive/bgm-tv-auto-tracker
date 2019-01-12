import pymongo
import requests

client = pymongo.MongoClient()
db = client.get_database('bilibili_bangumi')

r = requests.get('https://bangumi-auto-tracker.trim21.cn/bilibili_missing_episode')
j = r.json()
data = j['data']
for d in data:
    media_id = d.get('media_id')
    ep_id = d.get('ep_id')
    f = db.get_collection('episode_info').find_one({'_id': int(media_id), })
    if f:
        if not f['pubInfo'].get('is_finish'):
            continue

    e = db.get_collection('bilibili_episode_map').find_one({'media_id': int(media_id), 'ep_id': ep_id})
    if not e:
        print('https://www.bilibili.com/bangumi/play/ep{}'.format(ep_id))
