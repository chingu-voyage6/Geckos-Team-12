var express = require('express');
var router = express.Router();
const passport = require("passport");


/* Authentication with any provider*/
router.get('/auth/google', passport.authenticate('google',{
    scope:['profile']
}));

//User login
router.get('/auth/login',(req, res, next)=>{
  res.send("login route");
});

//Callback route
router.get('/auth/google/redirect',passport.authenticate('google'),(req,res)=>{
   res.redirect('/');
});
module.exports = router;