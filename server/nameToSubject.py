import pathlib
import re
from os import path
from fuzzywuzzy import fuzz

from copy import deepcopy

base_dir = pathlib.Path(path.abspath(path.dirname(__file__)))
import json

with open(str(base_dir / 'data.json'), 'r', encoding='utf-8') as f:
    bgmList = json.load(f)
    items = bgmList['items']


def parse_episode(episode_title):
    """
    parse episode from title
    :param episode_title: episode title
    :type episode_title: str
    :return: episode of this title
    :rtype: int
    """
    FETCH_EPISODE_ZH = re.compile("第?\s?(\d{1,3})\s?[話话集]")
    FETCH_EPISODE_WITH_BRACKETS = re.compile('[【\[](\d+)\s?(?:END)?[】\]]')
    FETCH_EPISODE_ONLY_NUM = re.compile('^([\d]{2,})$')
    FETCH_EPISODE_RANGE = re.compile('[\d]{2,}\s?-\s?([\d]{2,})')
    FETCH_EPISODE_OVA_OAD = re.compile('([\d]{2,})\s?\((?:OVA|OAD)\)]')
    FETCH_EPISODE_WITH_VERSION = re.compile('[【\[](\d+)\s? *v\d(?:END)?[】\]]')
    FETCH_EPISODE = (
        FETCH_EPISODE_ZH, FETCH_EPISODE_WITH_BRACKETS, FETCH_EPISODE_ONLY_NUM,
        FETCH_EPISODE_RANGE,
        FETCH_EPISODE_OVA_OAD, FETCH_EPISODE_WITH_VERSION)

    _ = FETCH_EPISODE_ZH.findall(episode_title)
    if _ and _[0].isdigit():
        return int(_[0])

    _ = FETCH_EPISODE_WITH_BRACKETS.findall(episode_title)
    if _ and _[0].isdigit():
        return int(_[0])

    _ = FETCH_EPISODE_WITH_VERSION.findall(episode_title)
    if _ and _[0].isdigit():
        return int(_[0])

    for split_token in ['【', '[', ' ']:
        for i in episode_title.split(split_token):
            for regexp in FETCH_EPISODE:
                match = regexp.findall(i)
                if match and match[0].isdigit():
                    return int(match[0])
    return 0


def fromTitleToSubject(title):
    items_copy = deepcopy(items)

    d = []

    for item in items_copy:
        s = [fuzz.ratio(zh, title) for zh in item['titleTranslate'].get('zh-Hans', [])]
        if not s:
            continue
        score = max(s)
        item['_match_score'] = score
        item['sites'] = list(filter(lambda x: x['site'] == 'bangumi', item['sites']))[0]
        d.append(item)
    so = sorted(d, key=lambda x: -x['_match_score'])
    return so[0]['sites']['id']
