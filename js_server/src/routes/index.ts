import * as Router from 'koa-router'
import { MyContext } from '../typeDeclear'

export const router = new Router()
    .get('about', ctx => {
        // '/about'
        ctx.body = 'about server12345'
    })
    .get('', async (ctx: MyContext) => {
        // '/'
        console.log('hello world')
        ctx.redirect('https://github.com/trim21/bgm-tv-auto-tracker')
        // ctx.body = await ctx.mongo.db('bgm_tv_info').collection('subject').findOne({})
    })

