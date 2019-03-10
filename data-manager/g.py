import datetime

import dateutil.parser
import pytz
import requests

timezone = pytz.UTC


def get_season_id(d: dict):
    b = [x for x in d['sites'] if x['site'] == 'bilibili']
    if b:
        return b[0]['id']


r = requests.get('https://cdn.jsdelivr.net/gh/bangumi-data/bangumi-data/dist/data.json')
j = r.json()
items = j['items']

for item in items:
    begin = dateutil.parser.parse(item['begin'])
    if begin > datetime.datetime(2018, 12, 12, 0, 0, 0, 0, tzinfo=timezone):
        season_id = get_season_id(item)
        if season_id:

