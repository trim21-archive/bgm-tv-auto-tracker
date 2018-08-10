import motor.motor_asyncio

from config import MongoConfig
from urllib.parse import quote_plus

if MongoConfig.username and MongoConfig.password:
    mongo_url = f"mongodb://{quote_plus(MongoConfig.username)}:{quote_plus(MongoConfig.password)}@{MongoConfig.host}:{MongoConfig.port}/{MongoConfig.db_name}"
else:
    mongo_url = f"mongodb://{MongoConfig.host}:{MongoConfig.port}/{MongoConfig.db_name}"

print(mongo_url)

def setup_mongo(app, loop):
    mongo = motor.motor_asyncio.AsyncIOMotorClient(mongo_url, maxPoolSize=10, io_loop=loop)
    app.mongo = mongo
    app.db = mongo[MongoConfig.db_name]
    return mongo
