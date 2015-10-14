var express = require('express');
var router = express.Router();

//create a nodemailer object
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', message:'Donald\'s World' });
});

/* GET about page */
router.get('/about', function(req, res, next){
	res.render('about', { title: 'About' });
});

/* GET projects page */
router.get('/projects', function(req, res, next){
	res.render('projects', { title: 'Projects'});
});

/* GET services page */
router.get('/services', function(req, res, next){
	res.render('services', { title: 'Services' });
});

/* GET contact page */
router.get('/contact', function(req, res, next){
	res.render('contact', { title: 'Contact'});
});

/* POST contact page */
//using nodemailer to send email when user hit the "submit" button 
router.get('/contact', function(req, res, next){

//create a mail transporter
var mailOptions = {
    from: 'David Yu <davidyu89tech@gmail.com',
    to: 'davidyu89tech@gmail.com',
    subject: 'New Business Idea',
    html: '<h2>'+req.email+</h2>
    
};

//specify the mail option
});

module.exports = router;
