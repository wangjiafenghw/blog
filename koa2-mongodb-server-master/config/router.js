'use strict'

const Router = require('koa-router')
const User   = require('../app/controllers/user')
const Dashboard = require('../app/controllers/dashboard')
const App    = require('../app/controllers/app')
const Routes = require('../app/controllers/routes')

module.exports = function(){
	var router = new Router({
    prefix: '/api'
  })

  // user
  router.get('/u/getUserInfo', App.hasToken, User.getUserInfo)


  router.post('/user/login', App.hasBody, User.login)
  router.get('/user/logout', User.logout)
  router.get('/user', User.user)

  
  router.post('/u/signup', App.hasBody, User.signup)
  router.post('/u/update', App.hasBody, App.hasToken, User.update)

  // dashboard
  router.get('/dashboard', Dashboard.dashboard)

  // routers
  router.get('/routes', Routes.routes)

  return router
}