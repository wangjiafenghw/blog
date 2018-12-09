'use strict'

var xss = require('xss')
var mongoose =  require('mongoose')
var User = mongoose.model('User')
var uuid = require('uuid')
const qs = require('qs')
const _ = require('lodash')
// var userHelper = require('../dbhelper/userHelper')
import userHelper from '../dbhelper/userHelper'


/**
 * 登陆
 */
exports.login = async (ctx, next) => {
  let username = xss(ctx.request.body.username.trim())
  let password = xss(ctx.request.body.password.trim())
  const user = await User.findOne({
    username
  }).exec()
  if (user && user.password === password) {
    const now = new Date()
    now.setDate(now.getDate() + 1)
    const token = JSON.stringify({ id: user.id, deadline: now.getTime() })
    ctx.cookies.set(
      'token',
      token,
      {
        maxAge: 90000000,
        httpOnly: true,
      }
    )
    user.token = token;
    await user.save();
    ctx.body = { success: true, message: 'Ok' }
  } else {
    ctx.throw(400)
  }
  return next;
}

/**
 * 退出登陆
 */
exports.logout = async (ctx, next) => {
  ctx.cookies.set('token', null)
  ctx.throw(200)
}

/**
 * 获取用户信息
 */
exports.user = async (ctx, next) => {
  const cookies = {}
  cookies.token = ctx.cookies.get('token')
  const response = {}
  let user = {}
  if (!cookies.token) {
    ctx.body = { message: 'Not Login' }
    return
  }
  const token = JSON.parse(cookies.token)
  if (token) {
    response.success = token.deadline > new Date().getTime()
  }
  if (response.success) {
    const userItem = await User.findOne({
      _id: token.id
    }).exec()
    if (userItem) {
      user = _.omit(userItem, 'password')  //? 为什么omit会无效， 但使用_.pick却有效 
    }
    response.user = user
    ctx.body = response
  }
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
 * 获取用户数据
 */
exports.getUserInfo = async (ctx, next) => {
  let username = ctx.query.username;
  let user = await User.findOne({
    username
  }).exec()
  user = user || ctx.session.user;
  ctx.body = {
    success: true,
    msg: "返回用户数据成功",
    code: 0,
    data: user
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


