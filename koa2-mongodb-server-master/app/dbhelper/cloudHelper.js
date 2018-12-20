'use strict'

var mongoose =  require('mongoose')
var Cloud = mongoose.model('Cloud')
const fs = require("fs-extra")
const cloudFsHelper = require("../fshelper/cloudHelper")
const dbHelper = require("./dbHelper")

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

//编辑文件信息
exports.editorFile = async (record) => {
    let _id = record._id;
    let permission_code = record.type || 0,
        fileName = record.filename,
        desc = record.desc || '';
    if(!fileName){
        throw 'No fileName'
    }
    let query = Cloud.where({ _id }).update({ permission_code, fileName, desc })
    try {
        await query.exec()
        return true;
    } catch (error) {
        throw error
    }
    
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
    console.log(param)
    let queryParams = {};
    if(param.permission_code){
        queryParams.permission_code = param.permission_code;
    }
    let ret = await dbHelper.pageQuery(param.current, parseInt(param.pageSize), Cloud, '', queryParams)
    return ret;
}