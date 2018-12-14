
const path = require('path')
const cloudHelper = require("../dbhelper/cloudHelper")
const send = require('koa-send');
const cloudFsHelper = require("../fshelper/cloudHelper")
const queryToObject = require("query-to-object")


/**
 * 上传
 */

exports.upload = async (ctx, next) => {
  // 上传文件请求处理
  let result = { success: false }
  let serverFilePath = path.join( process.cwd(), 'cloud' )

  // 上传文件事件
  result = await cloudFsHelper.uploadFile( ctx, {
    fileType: 'common', // common or album
    path: serverFilePath
  })
  console.log(result)
  //存入数据库
  let data = { 
    url: result.saveTo.url, 
    fileName: result.fileName,
    owner: "admin",
    owner_id: JSON.parse(ctx.cookies.get("token")).id,
    permission: "common",
    suffix: result.suffixName
  }
  let res = await cloudHelper.upload(data)
  result.db = res;

  ctx.body = result
}

/**
 * 下载
 */
exports.download = async (ctx, next) => {
  const id = ctx.params.id;
  const data = await cloudHelper.findFileById(id);
  ctx.attachment(data.url);
  await send(ctx, data.url);
}

//删除已上传文件
exports.removeUploadFile = async (ctx, next) => {
    let result = { success: false, code: 1 }
    let filePath = ctx.query.filePath;
    try {
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

//删除已上传文件 ByID
/**
 * @param {_id} String
 */
exports.removeUploadFileById1 = async (ctx, next) => {
  let res = { success: false }
  //查询文件的路径 ByID
  const id = ctx.params.id;
  const data = await cloudHelper.findFileById(id);
  try {
    await cloudHelper.removeUploadFile(data.url)
    res.success = true;
  } catch(error) {
    throw error
  }
  ctx.body = res;

}
//删除已上传文件 ByID
/**
 * @param {_id} String
 */
exports.removeUploadFileById2 = async (ctx, next) => {
  let res = { success: false }
  //查询文件的路径 ByID
  const id = ctx.query.id;
  const data = await cloudHelper.findFileById(id);
  try {
    await cloudHelper.removeUploadFile(data.url)
    res.success = true;
  } catch(error) {
    throw error
  }
  ctx.body = res;

}



exports.getFilesList = async (ctx, next) => {
  let result = { success: false, data: null }
  let param = queryToObject(ctx.query)
  if(!param.owner_id || param.owner_id.length === 0){
    param.owner_id = [JSON.parse(ctx.cookies.get("token")).id];
  } 
  if(!param.owner_id || param.owner_id.length === 0){
    ctx.body = {
      success: false,
      msg: "参数缺失"
    }
    return
  }
  try {
    let res = await cloudHelper.getFilesList(param)
    result.success = true;
    result.data = res;
  } catch (error) {
    result.msg = "错误"
    throw error 
  }
  ctx.body = result

}