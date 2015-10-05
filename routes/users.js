var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  
  //create a list
  var names = ['you', 'me', 'them'];
  
  
  
  //render the user page
  res.render('users', {userlist: names, title: 'David' });
  
  
  
});

module.exports = router;
