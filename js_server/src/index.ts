import * as Koa from 'koa'
import * as mongo from 'koa-mongo'
import { config } from './config'
import * as KoaRouter from 'koa-router'
import * as bodyparser from 'koa-bodyparser'
import { MyApplication, MyRouter } from './typeDeclear'
import { router as oauthRouter } from './routes/oauth'
import { router as indexRouter } from './routes/index'
import { router as apiV0_2Router } from './routes/api/v0.2'
import { router as apiV0_1Router } from './routes/api/v0.1'
import { router as staticsRouter } from './routes/statics'
import * as path from 'path'

const koaNunjucks = require('koa-nunjucks-2')

const app = new Koa() as MyApplication
app.use(bodyparser({
    enableTypes: ['json', 'form']
}))
app.use(koaNunjucks({
    ext: '',
    path: path.join(__dirname, '..', 'templates'),
    nunjucksConfig: {
        trimBlocks: true
    }
}))

const router = new KoaRouter() as MyRouter

app.use(mongo({
    host: config.mongo.host,
    port: config.mongo.port,
    db: config.mongo.db,
    max: 100,
    min: 1,
}))
app.use(async (ctx, next) => {
    ctx.db = ctx.mongo.db(config.mongo.db)
    ctx.statistics_missing_bangumi = ctx.db.collection('statistics_missing_bangumi')
    ctx.token = ctx.db.collection('token')
    await next()
})
// router.get('/', ctx => {
//     ctx.body = 'hello world'
// })

router.use('/', indexRouter.routes())
router.use('/', staticsRouter.routes())
router.use('/oauth', oauthRouter.routes())
router.use('/api/v0.2', apiV0_2Router.routes())
router.use('/api/v0.1', apiV0_1Router.routes())
// app.use(indexRouter.routes)
// app.use(oauthRouter.routes)
app.use(router.routes())

app.listen(config.port, () => console.log('Server running on port ' + config.port))


