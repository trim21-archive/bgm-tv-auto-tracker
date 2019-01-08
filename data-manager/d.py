import requests
from typing import List
import sys, os, pathlib, json, glob
from os import path

project_dir = pathlib.Path(path.dirname(__file__)).parent
server_dir = project_dir / 'server'
data_dir = project_dir / 'bangumi-data'
sys.path.append(server_dir)

with open(server_dir / 'patch.json', 'r', encoding='utf8') as f:
    data = json.load(f)

file_list = glob.glob(str(data_dir / 'data' / 'items' / '*' / '*.json'))


def item_match_subject(d: dict, subject_id: str):
    return [x for x in d['sites'] if x['site'] == 'bangumi' and x['id'] == subject_id]


def match_item_by_subject(j: List[dict], subject_id):
    for item in j:
        if item_match_subject(item, subject_id):
            return item


def add_website(d: dict, website, bangumi_id):
    """
    True if has add website section to sites
    if not contains return false
    """
    b = [x for x in d['sites'] if x['site'] == website]
    if b:
        return False
    else:
        d['sites'].append({
            "site"        : website,
            "id"          : bangumi_id,
            "begin"       : d['begin'],
            "official"    : None,
            "premuiumOnly": None,
            "censored"    : None,
            "exist"       : True,
            "comment"     : ""
        }, )
        return True


def get_subject_id(d: dict):
    b = [x for x in d['sites'] if x['site'] == 'bangumi']
    if b:
        return b[0]['id']


class MatchedSubjectFile():
    subject_to_file_map = {}
    for file in file_list:
        with open(file, 'r', encoding='utf8') as f:
            j = json.load(f)
            for item in j:
                s = get_subject_id(item)
                if s:
                    subject_to_file_map[s] = file

    def __init__(self, subject_id, mode):
        self.filename = None
        self.mode = mode
        if subject_id not in self.subject_to_file_map:
            raise FileNotFoundError('can\'t find file contains subject_id {}'.format(subject_id))
        self.filename = self.subject_to_file_map[subject_id]

    def __enter__(self):
        self.open_file = open(self.filename, self.mode, encoding='utf8')
        return self.open_file

    def __exit__(self, *args):
        self.open_file.close()


def get_translate_or_raw_title(b: dict):
    return b.get("titleTranslate", {}).get("zh-Hans", [b['title']])[0]


if __name__ == '__main__':
    # l = []
    data = sorted(data, key=lambda x: int(x['subject_id']))

    for item in data:
        website = item['website']
        if not item.get('title'):
            print(item)
            r = requests.get('https://api.bgm.tv/subject/{}'.format(item['subject_id']))
            j = r.json()
            item['title'] = j.get('name_cn', j['name']) or j['name']
        # try:
        #     item['title'] = get_translate_or_raw_title(b)
        # except FileNotFoundError as e:
        # l.append(item)
    #
    with open(server_dir / 'patch.1.json', 'w', encoding='utf8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
