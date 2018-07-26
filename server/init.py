import json
import pathlib
from os import path

import pymongo

from db import mongo_uri

base_dir = pathlib.Path(path.dirname(__file__))

client = pymongo.MongoClient(mongo_uri)
db = client.get_database('bilibili_bangumi')
# collection = db.get_collection('bilibili')
collection = db.get_collection('bangumi_data')

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
            d['bangumi_id'] = site.get('id', None)
            d['website'] = 'bilibili'
        if site['site'] == 'iqiyi':
            d['bangumi_id'] = site.get('id', None)
            d['website'] = 'iqiyi'
            # break
    site_bangumi = [site for site in item['sites'] if site['site'] == 'bangumi']
    if site_bangumi:
        site_bangumi = site_bangumi[0]
    else:
        continue
    if site_bangumi.get('id', None):
        d['subject_id'] = site_bangumi.get('id', None)
        if 'bangumi_id' in d:
            # print(d)
            db.get_collection(d['website']).update({'_id': d['bangumi_id']}, {'$set': {
                'subject_id': d['subject_id'],
                'title': d['title']
            }}, upsert=True)
