from aiohttp import web

from server.app_types import WebRequest, ClassSession


@web.middleware
async def session_middleware(request: WebRequest, handler):
    request.db = request.app.db
    request.session = await ClassSession.from_request(request)
    request.login = bool(request.session.login)
    resp = await handler(request)
    return resp
