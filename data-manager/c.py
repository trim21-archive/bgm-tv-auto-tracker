import json

import pymongo
import pymysql.cursors

client = pymongo.MongoClient()
db = client.get_database('bilibili_bangumi')
collection = db.get_collection('bgm_tv_episode_info')

# Connect to the database
connection = pymysql.connect(host='localhost',
                             user='root',
                             # password='passwd',
                             db='bgm_ip_viewer',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)

try:
    with connection.cursor() as cursor:
        # Read a single record
        sql = "SELECT * FROM `subjectjson`;"
        cursor.execute(sql)
        result = cursor.fetchall()
        for r in result:
            r = (json.loads(r['info']))
            collection.update_one({'_id': r['id']}, {'$set': r}, upsert=True)
finally:
    connection.close()
