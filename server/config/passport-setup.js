const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require("./keys");
const User = require('../models/UserModel');

passport.use(
    new GoogleStrategy({
        //Options Google strategy
        callbackURL: '/auth/google/redirect',
        clientID:keys.google.clientID,
        clientSecret : keys.google.clientSecret
    },(accessToken, refresToken, profile, done) => {
        //Passport callback function
        console.log(profile);
        new User({
            username:profile.displayName,
            googleId: profile.id
        }).save().then((nUser)=>{
            console.log('New user created: ' +  nUser );
        });
    })
)