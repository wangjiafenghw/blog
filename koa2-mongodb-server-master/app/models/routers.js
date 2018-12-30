'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

/**
 * 定义一个模式(相当于传统意义的表结构)
 * 每个模式映射mongoDB的一个集合，
 * 它定义（只是定义，不是实现）这个集合里面文档的结构，就是定义这个文档有什么字段，字段类型是什么，字段默认值是什么等。
 * 除了定义结构外，还定义文档的实例方法，静态模型方法，复合索引，中间件等
 * @type {mongoose}
 */

var RouitersSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: [true, "id不能重复"]
    },
    breadcrumbParentId: {
        type: String,
        unique: true,
    },
    icon: {
        type: String,
    },
    name: {
        type: String,
        unique: true,
        required: [true, "路径名不能重复"]
    },
    zhName: {
        type: String,
        unique: true,
        required: [true, "中文路径名不能重复"]
    },
    route: {
        type: String
    }
})



/**
 * 定义模型User
 * 模型用来实现我们定义的模式，调用mongoose.model来编译Schema得到Model
 * @type {[type]}
 */
// 参数User 数据库中的集合名称, 不存在会创建.
var Routers = mongoose.model('Routers', RouitersSchema)

module.exports = Routers