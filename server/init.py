import json
import pathlib
from os import path

import pymongo

from db import mongo_uri

base_dir = pathlib.Path(path.dirname(__file__))

client = pymongo.MongoClient(mongo_uri)
db = client.get_database('bilibili_bangumi')
collection = db.get_collection('bilibili')

with open(base_dir / 'data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
for item in data["items"]:
    d = {}
    d['title'] = item['titleTranslate'].get("zh-Hans", None)
    if not d['title']:
        d['title'] = item['title']
    else:
        d['title'] = d['title'][0]
    for site in item['sites']:
        if site['site'] == 'bilibili':
            d['_id'] = site.get('id', None)
            break
    site_bangumi = [site for site in item['sites'] if site['site'] == 'bangumi']
    if site_bangumi:
        site_bangumi = site_bangumi[0]
    else:
        continue
    if site_bangumi.get('id', None):
        d['subject_id'] = site_bangumi.get('id', None)
        if '_id' in d:
            print(d)
            collection.update({'_id': d['_id']}, {'$set': d}, upsert=True)
