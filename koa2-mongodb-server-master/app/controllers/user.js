'use strict'

var xss = require('xss')
var mongoose =  require('mongoose')
var User = mongoose.model('User')
var uuid = require('uuid')
// var userHelper = require('../dbhelper/userHelper')
import userHelper from '../dbhelper/userHelper'


/**
 * 登陆
 */
exports.signin = async (ctx, next) => {
  let username = xss(ctx.request.body.username.trim())
  let password = xss(ctx.request.body.password.trim())
  let user = await User.findOne({
    username
  }).exec()
  if(!user){
    ctx.body = {
      success: false,
      msg: '用户不存在',
      code: 1
    }
  }else if(user.password === password){
    let accessToken = uuid.v4()
    await User.update({ username: username }, {
      $set: { accessToken: accessToken }
    }, (err) => {
      if(err) throw err
    })
    ctx.body = {
      success: true,
      msg: "登陆成功",
      code: 0
    }
  }else{
    ctx.body = {
      success: false,
      msg: "密码错误",
      code: 2
    }
  }
  return next;
}

/**
 * 注册新用户
 * @param {Function} next          [description]
 * @yield {[type]}   [description]
 */
exports.signup = async (ctx, next) => {
  var username = xss(ctx.request.body.username.trim())
  let password = xss(ctx.request.body.password.trim())
	var user = await User.findOne({
	  username
	}).exec()
	
	var verifyCode = Math.floor(Math.random()*10000+1)
	if (!user) {
	  var accessToken = uuid.v4()

	  user = new User({
      username,
      password,
	    nickname: '测试用户',
	    avatar: 'http://upload-images.jianshu.io/upload_images/5307186-eda1b28e54a4d48e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
	    verifyCode: verifyCode,
	    accessToken: accessToken
	  })
	}
	else {
	  user.verifyCode = verifyCode
	}

	try {
    user = await user.save()
    ctx.session = ctx.session || {}
    ctx.session.accessToken = accessToken
    ctx.body = {
      success: true,
      msg: "注册成功"
    }
  }
  catch (e) {
    ctx.body = {
      success: false,
      msg: "鬼知道杀啥错误，可能服务器崩了吧…………"
    }

    return next
  }

}




/**
 * 更新用户信息操作
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.update = async (ctx, next) => {
  var body = ctx.request.body
  var user = ctx.session.user
  var fields = 'avatar,gender,age,nickname,breed'.split(',')

  fields.forEach(function(field) {
    if (body[field]) {
      user[field] = xss(body[field].trim())
    }
  })

  user = await user.save()

  ctx.body = {
    success: true,
    data: {
      nickname: user.nickname,
      accessToken: user.accessToken,
      avatar: user.avatar,
      age: user.age,
      breed: user.breed,
      gender: user.gender,
      _id: user._id
    }
  }
}


