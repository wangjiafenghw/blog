'use strict'

const Router = require('koa-router')
const User   = require('../app/controllers/user')
const Dashboard = require('../app/controllers/dashboard')
const App    = require('../app/controllers/app')
const Routes = require('../app/controllers/routes')
const Cloud = require('../app/controllers/cloud')

module.exports = function(){
	var router = new Router({
    prefix: '/api'
  })

  // user
  router.get('/u/getUserInfo', App.hasToken, User.getUserInfo)


  router.post('/user/login', App.hasBody, User.login)
  router.get('/user/logout', User.logout)
  router.get('/user', User.user)

  //Cloud
  router.post('/cloud/upload', App.hasToken, Cloud.upload)
  router.get('/cloud/removeUploadFile', App.hasToken, Cloud.removeUploadFile)
  router.get('/cloud/getFilesList', App.hasToken, Cloud.getFilesList)
  router.get('/cloud/download/:id', App.hasToken, Cloud.download)
  router.get('/cloud/removeUploadFileById/:id', App.hasToken, Cloud.removeUploadFileById)

  
  router.post('/u/signup', App.hasBody, User.signup)
  router.post('/u/update', App.hasBody, App.hasToken, User.update)

  // dashboard
  router.get('/dashboard', Dashboard.dashboard)

  // routers
  router.get('/routes', Routes.routes)

  return router
}