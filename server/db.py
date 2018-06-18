import asyncio

import motor.motor_asyncio

loop = asyncio.get_event_loop()
mongo_uri = "mongodb://127.0.0.1:27017"
mongo = motor.motor_asyncio.AsyncIOMotorClient(mongo_uri, maxPoolSize=10, io_loop=loop, )
