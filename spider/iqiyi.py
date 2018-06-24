import pathlib
import re
from os import path
from fuzzywuzzy import fuzz
import requests
from copy import deepcopy
import pymongo

client = pymongo.MongoClient()
db = client.get_database('auto_tracker')
collection = db.get_collection('iqiyi_page_source')
base_dir = pathlib.Path(path.abspath(path.dirname(__file__)))
import json

with open(str(base_dir.parent / 'server' / 'data.json'), 'r', encoding='utf-8') as f:
    bgmList = json.load(f)
    items = bgmList['items']
import tqdm

# for item in tqdm.tqdm(items):
#     i = [x for x in item['sites'] if x['site'] == 'iqiyi']
#     if i and i[0].get('id', None):
#         w = i[0]
#         if collection.find_one({'_id': w['id']}):
#             continue
#         r = requests.get('http://www.iqiyi.com/{}.html'.format(w['id']))
#         collection.insert({'_id': w['id'], 'source': r.text})
#         print(w['id'])
from bs4 import BeautifulSoup

for item in collection.find():
    html = item['source']
    soup = BeautifulSoup(html, 'html.parser')
    a = soup.find('a', class_='info-intro-title')
    print(a)
    # print(a.contens.trim())
