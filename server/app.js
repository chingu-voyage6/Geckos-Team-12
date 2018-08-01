var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const passportSetup = require('./config/passport-setup');

/*****************DB Connection********************** */
const mongoose = require('mongoose');
const keys = require('./config/keys');
const mongoURI  = keys.mongodb.dbURI;
if(process.env.NODE_ENV === 'production'){
  mongoURI = process.env.MONGODB_URI;
}
mongoose.connect(mongoURI, () =>{
  console.log("Connected to mongoDB");
});


/******************Routes******************************/
var routes = require('./routes/auth/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


  app.use(express.static(path.resolve(__dirname,'../build')));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,'../build','index.html'));
  });

//app.use(express.static(path.join(__dirname, '../build')));

//Using all routes defined
app.use(routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
