var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', message:'David\'s World' });
});

/* GET about page */
router.get('/about', function(req, res, next){
	res.render('about', { title: 'About', message:'David\'s About Page' });
});

/* GET projects page */
router.get('/projects', function(req, res, next){
	res.render('projects', { title: 'Proejct', message:'David\'s Proejct Page' });
});

/* GET services page */
router.get('/services', function(req, res, next){
	res.render('services', { title: 'Services', message:'David\'s Services Page' });
});

/* GET contact page */
router.get('/contact', function(req, res, next){
	res.render('contact', { title: 'Contact', message:'David\'s Contact Page' });
});

module.exports = router;
