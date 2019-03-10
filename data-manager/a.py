import pymongo
import requests

r = requests.get('https://bangumi-auto-tracker.trim21.cn/api/v0.1/collected_episode_info')
j = r.json()
data = j['data']
print(len(data))
# client = pymongo.MongoClient()
# db = client.get_database('bilibili_bangumi')
# collection = db.get_collection('episode_info')
# for datum in data:
#     collection.update_one({'_id': datum['_id']}, {'$set': datum}, upsert=True)
