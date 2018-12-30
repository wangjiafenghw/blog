'use strict'

var mongoose =  require('mongoose')
var Routers = mongoose.model('Routers')

exports.getRouters = async () => {
    let query = Routers.find()
    let data = null
    try {
        data = await query.exec()
    } catch (error) {
        throw data
    }
    return data
}

exports.initRouters = async (data) => {
    let res = {
        success: false
    }
    try {
        await Routers.insertMany(data)
        res.success = true
    } catch (error) {
        throw error
    }
    return res

}