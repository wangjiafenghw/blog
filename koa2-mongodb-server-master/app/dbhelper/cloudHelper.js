'use strict'

var mongoose =  require('mongoose')
var Cloud = mongoose.model('Cloud')

// 上传
exports.upload = async (data) => {
    let fileData = null;
    try {
        await Cloud.create(data)
        fileData = {sucess: true}
    } catch (error) {
        
    }
    return fileData;
}


//删除已上传文件
exports.removeUploadFile = async (url) => {
    let fileData = null;
    try {
        await Cloud.remove({url})
        fileData = {sucess: true}
    } catch (error) {
        
    }
    return fileData;
}

//通过用户查询云文件列表

exports.getFilesList = async (_id) => {
    let ret = [];
    let query = Cloud.find({_id})
    await query.exec((err, res) => {
        if(err){
            throw err;
        }else{
            ret = res;
        }
    })
    return ret;
}