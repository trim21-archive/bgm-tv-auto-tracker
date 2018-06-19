import json
import pathlib
from os import path

base_dir = pathlib.Path(path.dirname(__file__))

with open(base_dir / 'data.json', 'r', encoding='utf8') as f:
    bangumi_data = json.load(f)
import urllib.parse


def find(url: str):
    u = urllib.parse.urlparse(url)  # type: urllib.parse.ParseResult
    if u.netloc == 'www.bilibili.com':
        return fromIDToSubject('bilibili', 'id')


def fromIDToSubject(type: str, bangumi_id: str):
    for item in bangumi_data['items']:
        for site in item['sites']:
            if site['site'] == type and site.get('id', '') == bangumi_id:
                return [s for s in item['sites'] if s["site"] == "bangumi"][0]['id']
