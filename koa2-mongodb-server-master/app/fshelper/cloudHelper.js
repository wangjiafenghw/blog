const fs = require("fs-extra")
const { uploadFile } = require('../utils/upload')

//通过路径信息删除文件
exports.removeUploadFile = async (url) => {
    if(url[0]!==".")url = "."+url
    try {
        await fs.remove(url)
    } catch(error) {
        throw error
    }
}
exports.uploadFile = async (ctx, options) => {
    let result = await uploadFile( ctx, options )
    return result;
}