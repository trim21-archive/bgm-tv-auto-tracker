import motor.motor_asyncio
from .config import MongoConfig


def setup_mongo(app, loop):
    mongo = motor.motor_asyncio.AsyncIOMotorClient(MongoConfig.mongo_url,
                                                   maxPoolSize=10,
                                                   io_loop=loop)
    app.mongo = mongo
    app.db = mongo[MongoConfig.db_name]
    return mongo
