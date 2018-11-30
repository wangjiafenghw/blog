'use strict'

const Router = require('koa-router')
const User   = require('../app/controllers/user')
const App    = require('../app/controllers/app')

module.exports = function(){
	var router = new Router({
    prefix: '/api'
  })

  // user
  router.get('/u/getUserInfo', App.hasToken, User.getUserInfo)
  router.post('/u/signin', App.hasBody, User.signin)
  router.post('/u/signup', App.hasBody, User.signup)
  router.post('/u/update', App.hasBody, App.hasToken, User.update)


  return router
}