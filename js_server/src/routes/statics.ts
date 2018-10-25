import * as Router from 'koa-router'
import { MyRouter } from '../typeDeclear'

export const router = new Router() as MyRouter
const website_template = {
    'bilibili': s => `https://bangumi.bilibili.com/anime/${s}`,
    'iqiyi': s => `https://www.iqiyi.com/${s}.html`
}
router.get('statistics_missing_bangumi', async ctx => {
    let subject = ctx.query.subject_id
    let condition = {}
    if (subject === 'true') {
        condition['subject_id'] = { $exists: false }
    } else if (subject === 'false') {
        condition['subject_id'] = { $exists: true }
    }
    let f = await ctx.db.collection('statistics_missing_bangumi')
        .find(condition)
        .sort({ 'times': -1, 'subject_id': 1 }).toArray()
    f.forEach(item => {
        item['bangumi_url'] = website_template[item['website']](item['bangumi_id'])
        if (item.subject_id) {
            item['subject_url'] = `https://bgm.tv/subject/${item.subject_id}`
        }
    })
    ctx.body = f
})

