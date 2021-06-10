var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  res.render('pages/home')
})

router.get('/about', function(req, res, next) {
  res.render('pages/about')
})

router.get('/contact', function(req, res, next) {
  res.render('pages/contact')
})

router.get('/projects', function(req, res, next) {
  res.render('pages/projects')
})

router.get('/services', function(req, res, next) {
  res.render('pages/services')
})

module.exports = router
