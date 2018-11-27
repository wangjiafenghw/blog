'use strict'

const Router = require("koa-router");
const User = require("../routers/user")
const router = new Router({
    prefix: '/test'
})

module.exports = router;



router.get('/', async(ctx, next) => {
    ctx.body = "koko"
})
