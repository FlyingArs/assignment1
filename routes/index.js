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

//create a mail transporter
var transporter = nodemail.createTransport("SMTP", {
    service: "Gmail"
    auth: {
        user: "xxx@gmail.com",
        pass: "userpassword"   
    }    
});   
    
//create the POST method
router.POST('/contact', function(req, res, next){
//specify the mail option   
var mailOptions = {
    from: 'David Yu <davidyu89tech@gmail.com',
    to: 'davidyu89tech@gmail.com',
    subject: 'New Business Idea',
    html: '<h2>Contact Request</h2>' +
          '<p>'+req.body.name+'</p>' +
          '<p>'+req.body.email+'</p>' +
          '<p>'+req.body.message+'</p>'
        
    
};

//transporter sends the email
transporter.sendMail(mailOptions, function(error, response){
    if(err){
        res.end(err.toString);   
    }
    else{
        res.render("Thank you for your information");
    }
    
});
    
}

module.exports = router;
