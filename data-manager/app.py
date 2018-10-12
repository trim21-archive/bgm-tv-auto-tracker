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
    b = [x for x in d['sites'] if x['site'] == website]
    if b:
        return
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


class MatchedSubjectFile():

    def __init__(self, subject_id, mode):
        self.filename = None
        self.mode = mode
        for file in file_list:
            with open(file, 'r', encoding='utf8') as f:
                j = json.load(f)
                if match_item_by_subject(j, subject_id):
                    # for item in j:
                    #     if match_subject(item, subject_id):
                    self.filename = file
        if not self.filename:
            raise FileNotFoundError(subject_id)

    def __enter__(self):
        self.open_file = open(self.filename, self.mode, encoding='utf8')
        return self.open_file

    def __exit__(self, *args):
        self.open_file.close()


l = []
for item in data:
    website = item['website']
    try:
        with MatchedSubjectFile(item['subject_id'], 'r') as f:
            j = json.load(f)
        b = match_item_by_subject(j, item['subject_id'])
        c = add_website(b, website, item['bangumi_id'])
        if c:
            with MatchedSubjectFile(item['subject_id'], 'w') as f:
                json.dump(j, f, ensure_ascii=False, indent=2)
                f.write('\n')
        else:
            l.append(item)
    except FileNotFoundError as e:
        l.append(item)
        print(e)

with open(server_dir / 'patch.json', 'w', encoding='utf8') as f:
    json.dump(l, f, ensure_ascii=False, indent=2)
