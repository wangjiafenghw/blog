const fs = require("fs-extra")
const { uploadFile } = require('../utils/upload')
const path = require("path")

//通过路径信息删除文件
exports.removeUploadFile = async (url) => {
    if(url[0]!==".")url = "."+url
    try {
        await fs.remove(url)
    } catch(error) {
        throw error
    }
}

//上传文件
exports.uploadFile = async (ctx, options) => {
    let result = await uploadFile( ctx, options )
    return result;
}

// 修改文件保存位置  By  权限编号{permission_code}
exports.mvFileByPD = async (oldPath, permission_code) => {
    let basename = path.basename(oldPath)
    let oldDirname = path.join(process.cwd(), path.dirname(oldPath))
    let newPath = ''
    if(permission_code!==0){
        newPath = path.join(oldDirname, "../protect", basename)
    }else{
        newPath = path.join(oldDirname, "../common", basename)
    }
    try {
        fs.renameSync(path.join(oldDirname, basename), newPath)
    } catch (error) {
        throw error
    }
}