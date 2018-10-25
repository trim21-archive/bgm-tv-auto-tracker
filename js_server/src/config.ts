export const config = {
    appID: process.env.APP_ID,
    appSecret: process.env.APP_SECRET,
    port: parseInt(process.env.PORT || '6001'),
    host: process.env.VIRTUAL_HOST || `localhost:${process.env.PORT || 6001}`,
    protocol: process.env.PROTOCOL,
    secretKey: process.env.SECRET_KEY || 'at optional dependencies are and how they are decla',
    version: process.env.VERSION || 'default version',
    mongo: {
        host: process.env.MONGO_HOST || '127.0.0.1',
        port: parseInt(process.env.MONGO_PORT || '27017'),
        username: process.env.MONGO_USERNAME || '',
        password: process.env.MONGO_PASSWORD || '',
        db: process.env.MONGO_DATABASE || 'bilibili_bangumi'
    }
}

export const callback_url = `${config.protocol}://${config.host}/oauth/callback`
export const oauth_url = `https://bgm.tv/oauth/authorize?client_id=${config.appID}&response_type=code&redirect_uri=${callback_url}`
console.log(callback_url)
console.log(oauth_url)
