# 工作流程

1. 用户通过bgm的oauth来认证, server把一个session id通过cookies存到的用户浏览器. 同时存下`access_token`和`refresh_token`
2. 用户提交新数据的时候, 根据session里面的user_id存一下token.

问题: session要被用户脚本和cookies共用.