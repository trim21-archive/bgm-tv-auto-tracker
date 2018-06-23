import pathlib
import time
from copy import deepcopy
from os import path
from pprint import pprint
from typing import List
import pymongo

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup, Tag
import re
import requests


def parsePlayItem(t: Tag):
    r = re.compile(r'第(\d+)集')
    a_list = t.find_all('a')
    for a in a_list:
        content = a.get_text()
        s = content.strip()
        g = r.search(s)
        if g:
            print(s)
            return {'href': a['href'], 'content': s, 'episode': g.group(1)}


options = Options()
# options.add_argument("--headless")
driver = webdriver.Chrome(options=options)
# video_id = driver.execute_script("return _player._videoid;")
# driver.get('http://www.iqiyi.com/a_19rrhcadk5.html')

base_dir = pathlib.Path(path.abspath(path.dirname(__file__)))
import json

with open(str(base_dir.parent / 'server' / 'data.json'), 'r', encoding='utf-8') as f:
    bgmList = json.load(f)

HEADERS = """accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
accept-encoding: gzip, deflate, br
accept-language: zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6
dnt: 1
upgrade-insecure-requests: 1
user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36"""
headers = {line[0].strip(): line[1].strip() for line in
           [x.split(":", 1) for x in [line for line in HEADERS.splitlines() if line]]
           if len(line) == 2}
print(headers)
iqiyi_bangumi = list(filter(lambda x: any([s['site'] == 'iqiyi' for s in x['sites']]), bgmList['items']))

for bangumi in iqiyi_bangumi:
    for site in bangumi['sites']:
        if site['site'] == 'iqiyi':
            bangumi.update(site)
    bangumi['sites'] = None
injectJquery = """

var scriptElt = document.createElement('script');
scriptElt.type = 'text/javascript';
scriptElt.src = 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js' ;
document.getElementsByTagName('head')[0].appendChild(scriptElt);

"""
import tqdm

for index, i in enumerate(iqiyi_bangumi):
    if not i.get('id', None):
        print(i)
        iqiyi_bangumi = iqiyi_bangumi[index + 1:]
        break

iqiyi_bangumi = list(filter(lambda x: 'id' in x, iqiyi_bangumi))
for i in tqdm.tqdm(iqiyi_bangumi):
    id = i.get('id', None)
    if not id:
        print(i)
        continue
    d = deepcopy(i)
    d['episodes'] = []
    # r = requests.get('https://www.iqiyi.com/{}.html'.format(i['id']), headers=headers)
    driver.get('https://www.iqiyi.com/{}.html'.format(i['id']), )
    driver.execute_script(injectJquery)
    time.sleep(0.5)
    h = driver.page_source
    source = BeautifulSoup(h, "html.parser")
    for i, li in enumerate(source.find_all('li', attrs={'data-delegate': 'albumlist-page'})):
        cmd = f"return $('li[data-avlist-page=\"{i+1}\"]').click()"
        driver.execute_script(cmd)
        html = driver.execute_script("return document.getElementsByTagName('html')[0].innerHTML")
        soup = BeautifulSoup(html, "html.parser")
        div = soup.select_one('#widget-tab-3 > div.piclist-wrapper')  # type:Tag

        ul = div.find('ul')
        for a in ul.find_all(attrs={'data-albumlist-elem': "playItem"}):
            d['episodes'].append(parsePlayItem(a))
    pymongo.MongoClient().get_database('auto_tracker').get_collection('iqiyi').insert(d)
