import glob
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

data_path = pathlib.Path(r'C:\Users\Trim21\proj\bangumi-data\data\items')
all_item_json = glob.glob(str(data_path / '*' / '*.json'))

for file in all_item_json:
    with open(file, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except:
            print(file)
            exit()


def find_and_add_translation(bangumi_id, translation):
    for file in all_item_json:
        with open(file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        for item in data:
            if [x for x in item['sites'] if x['site'] == 'iqiyi' and x.get('id', None) == bangumi_id]:
                if 'zh-Hans' in item["titleTranslate"]:
                    if translation not in item["titleTranslate"]['zh-Hans']:
                        item["titleTranslate"]['zh-Hans'].append(translation)
                else:
                    item["titleTranslate"]['zh-Hans'] = [translation]

                with open(file, 'w', encoding='utf-8') as f2:
                    json.dump(data, f2, ensure_ascii=False, indent=2)
                    f2.write('\n')
                return


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
    bangumi_id = item['_id']
    soup = BeautifulSoup(html, 'html.parser')
    a = soup.find('a', class_='info-intro-title')
    if a:
        print(a['title'])
        find_and_add_translation(bangumi_id, a['title'])
    else:
        print(bangumi_id)
