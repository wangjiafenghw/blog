'use strict'

const fs       = require("fs-extra");
const path     = require("path");
const mongoose = require("mongoose");

const db = "mongodb://localhost/blog";

/**
 * * 连接mongodb数据库
 */
const Promise = require("bluebird");
mongoose.connect(db);

/**
 * 获取数据库表对应的js对象所在的路径
 * @type {[type]}
 */
const models_path = path.join(__dirname, '/app/models')

/**
 * 递归引入model文件
 */
let walk = (modelsPath) => {
    fs
        .readdirSync(modelsPath)
        .forEach((file) => {
            let filepath = path.join(`${models_path}/${file}`);
            let stat     = fs.statSync(filepath);
            if (stat.isFile()) {
                if (/(.*)\.(js|coffee)/.test(file)) {
                    require(filepath)
                }
            }else if(stat.isDirectory()){
                walk(filepath)
            }
        })
}
walk(models_path);

require("babel-register");
const Koa        = require('koa')
const logger     = require('koa-logger')
const session    = require('koa-session')
const bodyParser = require('koa-bodyparser')
const app        = new Koa()

app.keys = ['wjfblog'];
app.use(logger());
app.use(session(app));
app.use(bodyParser());

/**
 * 使用路由转发请求
 * @type {[type]}
 */
const router = require('./config/router')

app
  .use(router.routes())
  .use(router.allowedMethods());



app.listen(3000)
console.log('app started at port 3000...');