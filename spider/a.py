import datetime
import sys
import time

import grequests
import pytz
import pymongo

db = pymongo.MongoClient().get_database('bgm')


def chunks(arr, n):
    return [arr[i:i + n] for i in range(0, len(arr), n)]


def main():
    # s = grequests.Session()

    urls = ['https://api.bgm.tv/subject/{}'.format(index) for index in range(1, 263000)]
    for url_chunk in chunks(urls, 26):
        rs = (grequests.get(u, stream=False) for u in url_chunk)
        results = grequests.map(rs, size=20)
        for r in results:
            try:
                res = r.json()
                c = db.get_collection('subject')
                print(res['id'])
                res['_id'] = res['id']
                c.insert(res)
            except:
                print(r.text)


if __name__ == '__main__':
    main()
