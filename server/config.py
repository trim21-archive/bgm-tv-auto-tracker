import os

APP_ID = os.environ.get('APP_ID')
APP_SECRET = os.environ.get('APP_SECRET')
if not (APP_SECRET and APP_ID):
    raise EnvironmentError('you must set env APP_ID and APP_SECRET')

HOST = os.environ.get('HOST')
if not HOST:
    HOST = 'localhost:6001'

PROTOCOL = os.environ.get('PROTOCOL')
if not PROTOCOL:
    PROTOCOL = 'http'
