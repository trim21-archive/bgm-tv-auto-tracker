from aiohttp_session import AbstractStorage, Session
from datetime import datetime, timedelta
import uuid

__version__ = '0.0.1'


class MongoStorage(AbstractStorage):
    def __init__(self, collection, *, cookie_name="AIOHTTP_SESSION",
                 domain=None, max_age=None, path='/',
                 secure=None, httponly=True,
                 key_factory=lambda: uuid.uuid4().hex,
                 encoder=lambda x: x, decoder=lambda x: x):
        super().__init__(cookie_name=cookie_name, domain=domain,
                         max_age=max_age, path=path, secure=secure,
                         httponly=httponly,
                         encoder=encoder, decoder=decoder)

        self._collection = collection
        self._key_factory = key_factory
        self._expire_index_created = False

    async def load_session(self, request):
        await self._create_expire_index()

        cookie = self.load_cookie(request)
        if cookie is None:
            return Session(None, data=None, new=True, max_age=self.max_age)
        else:
            key = str(cookie)
            stored_key = (self.cookie_name + '_' + key).encode('utf-8')
            data_row = await self._collection.find_one(
                filter={
                    '_id': stored_key,
                    '$or': [
                        {'expire': None},
                        {'expire': {'$gt': datetime.utcnow()}}
                    ]
                })

            if data_row is None:
                return Session(None, data=None,
                               new=True, max_age=self.max_age)

            try:
                data = self._decoder(data_row['data'])
            except ValueError:
                data = None
            return Session(key, data=data, new=False, max_age=self.max_age)

    async def _create_expire_index(self):
        if not self._expire_index_created:
            await self._collection.create_index([("expire", 1)],
                                                expireAfterSeconds=0)
            self._expire_index_created = True

    async def save_session(self, request, response, session):
        await self._create_expire_index()

        key = session.identity
        if key is None:
            key = self._key_factory()
            self.save_cookie(response, key,
                             max_age=session.max_age)
        else:
            if session.empty:
                self.save_cookie(response, '',
                                 max_age=session.max_age)
            else:
                key = str(key)
                self.save_cookie(response, key,
                                 max_age=session.max_age)

        data = self._encoder(self._get_session_data(session))
        expire = datetime.utcnow() + timedelta(seconds=session.max_age) \
            if session.max_age is not None else None
        stored_key = (self.cookie_name + '_' + key).encode('utf-8')
        await self._collection.update_one(
            {'_id': stored_key},
            {
                "$set": {
                    'data': data,
                    'expire': expire
                }
            },
            upsert=True)
