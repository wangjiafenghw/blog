const mongoose = require('mongoose')
const { uploadFile } = require('../utils/upload')
const path = require('path')
const fs = require("fs-extra")
const cloudHelper = require("../dbhelper/cloudHelper")


/**
 * 上传
 */

exports.upload = async (ctx, next) => {
    // 上传文件请求处理
    let result = { success: false }
    let serverFilePath = path.join( process.cwd(), 'cloud' )

    // 上传文件事件
    result = await uploadFile( ctx, {
      fileType: 'common', // common or album
      path: serverFilePath
    })
    //存入数据库
    let data = { 
      url: result.saveTo.url, 
      owner: "admin",
      owner_id: JSON.parse(ctx.cookies.get("token")).id,
      permission: "common",
      suffix: "png"
    }
    let res = await cloudHelper.upload(data)
    result.db = res;

    ctx.body = result
}

exports.removeUploadFile = async (ctx, next) => {
    let result = { success: false, code: 1 }
    let filePath = ctx.query.filePath;
    console.log(filePath)
    try {
      await fs.remove("."+filePath)
      let res = await cloudHelper.removeUploadFile(filePath)
      result.db = res;
      result.success = true;
      result.code = 0;
      result.msg = "文件删除成功"
    } catch (err) {
      console.error(err)
      result.msg = err
    }
    ctx.body = result;

}

exports.getFilesList = async (ctx, next) => {
  let result = {success: false, data: null}
  let _id = ctx.query.id;
  if(!_id){
    _id = ctx.cookies.get("token").id;
  }
  if(!_id){
    ctx.body = {
      success: false,
      msg: "参数缺失"
    }
    return
  }
  
  try {
    let res = await cloudHelper.getFilesList(_id)
    result.success = true;
    result.data = res;
  } catch (error) {
    result.msg = "错误"
    throw error 
  }
  ctx.body = result

}