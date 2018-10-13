import * as Router from 'koa-router'
import { MyRouter } from '../typeDeclear'
import axios from 'axios'
import { callback_url, config, oauth_url } from '../config'
import * as dayjs from 'dayjs'

export const router = new Router() as MyRouter

// oauth/callback
router.get('/callback', async ctx => {
    let code = ctx.query.code

    if (!code) {
        ctx.redirect(oauth_url)
        return
    }
    try {
        let r = await axios.post('https://bgm.tv/oauth/access_token',
            {
                'grant_type': 'authorization_code',
                'client_id': config.appID,
                'client_secret': config.appSecret,
                'code': code,
                'redirect_uri': callback_url
            })
        if (r.data.error) {
            ctx.status = 400
            ctx.body = r.data
            return
        } else {
            r.data.auth_time = dayjs(r.headers['Date']).unix()

            await ctx.db.collection('token').findOne({ '_id': r.data['user_id'] })
            await ctx.db.collection('token').updateOne({ '_id': r.data['user_id'] },
                { '$set': r.data },
                { upsert: true })
            return ctx.render('post_to_extension.html', { 'data': JSON.stringify(r.data), })
        }
    } catch (e) {
        console.log(e)
        ctx.redirect(oauth_url)
    }
})

router.get('/result', async ctx => {
    ctx.body = dayjs('Sat, 13 Oct 2018 10:06:18 GMT').unix()
    // await ctx.render('post_to_extension.html', { data: { hello: 'world' } })
})
router.get('/redirect', async ctx => {
    ctx.redirect(oauth_url)
})

