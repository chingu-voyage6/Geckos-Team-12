var express = require('express');
var router = express.Router();
const passport = require("passport");


/* Authentication with any provider*/
router.get('/api/v1/auth/google', passport.authenticate('google',{
    scope:['profile']
}));

//User login
router.get('/api/v1/auth/login',(req, res, next)=>{
  res.send("login route");
});

//Callback route
router.get('/auth/google/redirect',passport.authenticate('google',(req,res)=>{
    res.send("Reached the callback URL");
}));
module.exports = router;