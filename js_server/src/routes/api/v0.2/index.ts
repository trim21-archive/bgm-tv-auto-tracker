import * as Router from 'koa-router'
import { MyRouter } from '../../../typeDeclear'

export const router = new Router() as MyRouter

// /api/v0.2/callback
router.post('/querySubjectID', async ctx => {
    let { website, bangumiID } = ctx.query
    if (!(website && bangumiID)) {
        ctx.status = 400
        ctx.body = 'need query `website` and `bangumiID`'
        return
    }
    if (['iqiyi', 'bilibili'].indexOf(website) == -1) {
        ctx.status = 400
        ctx.body = '`website` must be `iqiyi` or `bilibili`'
        return
    }
    let collection = ctx.db.collection(website)
    let e = await collection.findOne({ '_id': bangumiID })
    if (e) {
        await ctx.db.collection('statistics_missing_bangumi').deleteOne(
            { website, 'bangumi_id': bangumiID },
        )
        ctx.body = e
    } else {
        await ctx.db.collection('statistics_missing_bangumi').updateOne(
            { website, 'bangumi_id': bangumiID },
            { '$inc': { 'times': 1 } },
            { upsert: true }
        )
    }
})

