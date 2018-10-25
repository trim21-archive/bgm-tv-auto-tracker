import * as Router from 'koa-router'
import { MyRouter } from '../../../typeDeclear'
import { validate } from '../../../validater'
import { callback_url, config } from '../../../config'
import * as dayjs from 'dayjs'
import axios from 'axios'

var constraints = {
    bangumiID: {
        presence: { allowEmpty: false },
        type: 'string',

    },
    subjectID: {
        presence: { allowEmpty: false, },
        type: 'string',

    },
    website: {
        presence: { allowEmpty: false },
        inclusion: {
            within: ['bilibili', 'iqiyi']
        },
        type: 'string',

    },
    title: {
        presence: { allowEmpty: false, },
        type: 'string',

    },
    href: {
        presence: { allowEmpty: false, },
        url: {
            allowLocal: false
        },
        type: 'string',
    }
}
export const router = new Router() as MyRouter

// /api/v0.1/callback
router.post('/reportMissingBangumi', async ctx => {
    let data = ctx.request.body
    let v = validate(data, constraints)
    if (v) {
        ctx.status = 400
        ctx.body = v
        return
    }
    await ctx.statistics_missing_bangumi.updateOne(
        { 'bangumi_id': data.bangumiID, 'website': data['website'] },
        {
            '$set': {
                'subject_id': data['subjectID'],
                'title': data['title'],
                'href': data['href']
            }
        },
        { upsert: true }
    )
    ctx.body = { 'status': 'success' }
})

router.post('/refresh_token', async ctx => {
    console.log('refresh token')
    let data = ctx.request.body
    let refresh_token = data.refresh_token
    let user_id = data.user_id
    if (!(refresh_token && user_id)) {
        ctx.status = 400
        return
    }
    try {
        let resp = await axios.post('https://bgm.tv/oauth/access_token', {
            'grant_type': 'refresh_token',
            'client_id': config.appID,
            'client_secret': config.appSecret,
            'refresh_token': refresh_token,
            'redirect_uri': callback_url
        })
        if (resp.data.error) {
            ctx.body = resp.data
        }
        resp.data['_id'] = resp.data['user_id']
        resp.data['auth_time'] = dayjs(resp.headers['Date']).unix()
        await ctx.token.updateOne({ '_id': resp.data['_id'] },
            { '$set': resp.data },
            { upsert: true })
        ctx.body = resp.data
    } catch (e) {
        ctx.status = 504
        return
    }
})
