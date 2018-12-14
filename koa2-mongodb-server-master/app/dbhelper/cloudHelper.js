'use strict'

var mongoose =  require('mongoose')
var Cloud = mongoose.model('Cloud')
const fs = require("fs-extra")
const cloudFsHelper = require("../fshelper/cloudHelper")

// 上传
exports.upload = async (data) => {
    let fileData = null;
    try {
        await Cloud.create(data)
        fileData = {sucess: true}
    } catch (error) {
        throw error
    }
    return fileData;
}

// 通过文件id查询文件信息【内部查询使用】
exports.findFileById = async (_id) => {
    let query = Cloud.findOne({_id});
    let data = {}
    await query.exec((err, res) => {
        if(err){
            data = {}
        }else{
            data = res;
        }
    })
    return data
}


//删除已上传文件   ！
// * (url为数据库路径，也就是没有.eg: "/cloud/common/。。。。")
exports.removeUploadFile = async (url) => {
    let fileData = null;
    try {
        await cloudFsHelper.removeUploadFile(url)
        await Cloud.remove({url})
        fileData = {sucess: true}
    } catch (error) {
        throw error
    }
    return fileData;
}

//通过用户查询云文件列表

exports.getFilesList = async (param) => {
    let ret = [];
    let query = Cloud.find({})
    if(param.permission && param.permission.length!==0){
        query.where("permission").in(param.permission)
    }
    query.where("owner_id").in(param.owner_id)
    await query   //////////////////////
    query.skip((param.current-1)*param.pageSize)
    query.limit(parseInt(param.pageSize));
    console.log(param)
    await query.exec((err, res) => {
        if(err){
            throw err;
        }else{
            ret = res;
        }
    })
    
    return ret;
}