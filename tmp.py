import pymongo

client = pymongo.MongoClient()
collection = client.get_database('bilibili_bangumi').get_collection('hrefEpsMap')
collection.update({"_id": 1}, {'$set': {'1': 1}}, upsert=True)
