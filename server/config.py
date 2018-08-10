import os

APP_ID = os.environ.get('APP_ID')
APP_SECRET = os.environ.get('APP_SECRET')
if not (APP_SECRET and APP_ID):
    raise EnvironmentError('you must set env APP_ID and APP_SECRET')

HOST = os.environ.get('HOST', 'localhost:6001')
PROTOCOL = os.environ.get('PROTOCOL', 'http')


class MongoConfig(object):
    host = '127.0.0.1'
    port = '27017'
    username = os.environ.get('MONGO_USERNAME', '')
    password = os.environ.get('MONGO_PASSWORD', '')

    db_name = os.environ.get('MONGO_DATABASE', 'bilibili_bangumi')
