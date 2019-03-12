import os
import pathlib
from os import path
from urllib.parse import quote_plus

APP_ID = os.environ.get('APP_ID')
APP_SECRET = os.environ.get('APP_SECRET')
# if not (APP_SECRET and APP_ID):
#     raise EnvironmentError('you must set env APP_ID and APP_SECRET')

HOST = os.environ.get('HOST', 'localhost:6001')
PROTOCOL = os.environ.get('PROTOCOL', 'http')


class MongoConfig(object):
    host = os.environ.get('MONGO_HOST', '127.0.0.1')
    port = os.environ.get('MONGO_PORT', '27017')
    username = os.environ.get('MONGO_USERNAME', '')
    password = os.environ.get('MONGO_PASSWORD', '')

    db_name = os.environ.get('MONGO_DATABASE', 'bilibili_bangumi')
    if username and password:
        mongo_url = f"mongodb://{quote_plus(username)}:{quote_plus(password)}" \
            f"@{host}:{port}/{db_name}"
    else:
        mongo_url = f"mongodb://{host}:{port}/{db_name}"


callback_url = f'{PROTOCOL}://{HOST}/oauth_callback'
oauth_url = f'https://bgm.tv/oauth/authorize?client_id={APP_ID}' \
    f'&response_type=code&redirect_uri={callback_url}'
github_url = 'https://github.com/Trim21/bilibili-bangumi-tv-auto-tracker'
base_dir = pathlib.Path(path.dirname(__file__))
