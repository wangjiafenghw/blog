const mongoose = require('mongoose')
const { uploadFile } = require('../utils/upload')
const path = require('path')


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

    ctx.body = result
}