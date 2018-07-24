var express = require('express');
var router = express.Router();

//import all routes
const auth = require('./auth/login');


/* Authentication with any provider*/
router.get('/api/v1/auth/google', function(req, res, next) {
  console.log("Logging in...");
  res.render('Logging in with google');
});

//User login
router.get('/login',(res, req, next)=>{
  res.send("login route");
});
module.exports = router;
