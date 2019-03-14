from server.app_types import WebRequest


def jsonify(d):
    d['_id'] = str(d['_id'])
    d['time'] = str(d['time'])
    return d


async def is_authorized_user(request: WebRequest):
    """
    usergroup	UserGroupinteger
example: 11
用户组
1 = 管理员
2 = Bangumi 管理猿
3 = 天窗管理猿
4 = 禁言用户
5 = 禁止访问用户
8 = 人物管理猿
9 = 维基条目管理猿
10 = 用户
11 = 维基人
    :param request:
    :return:
    """
    return request.session.login and (request.session.usergroup in [
        1, 2, 3, 8, 9, 11
    ] or request.session.user_id == 287622)
