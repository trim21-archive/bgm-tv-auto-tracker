import sys, os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../server')))
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from server.app import create_app
import server
import server.db
import pymongo

client = pymongo.MongoClient(server.db.mongo_url)
database = client.get_database(server.db.MongoConfig.db_name)

iqiyi1 = {"_id": "a_19rrhb12tt", "subject_id": "40379", "title": "鬼太郎"}
iqiyi2 = {"_id": "a_19rrha4rcx", "subject_id": "11191", "title": "小蜜蜂寻亲记"}

bilibili1 = {"_id": "790", "title": "交响诗篇", "subject_id": "1266"}
bilibili2 = {"_id": "3287", "title": "火影忍者 疾风传", "subject_id": "2782"}


def init():
    for i in [iqiyi1, iqiyi2]:
        database.get_collection('iqiyi').update_one({'_id': i['_id']}, {'$set': i}, upsert=True)
    for i in [bilibili1, bilibili2]:
        database.get_collection('bilibili').update_one({'_id': i['_id']}, {'$set': i}, upsert=True)
