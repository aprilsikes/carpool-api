//dependencies**
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
// var jwt = require('jsonwebtoken');

// var routes = require('./routes/index');
// var auth = require('./routes/auth');
var users = require('./routes/users');
var kids = require('./routes/kids');
var orgs = require('./routes/orgs');
var groups = require('./routes/groups');
var events = require('./routes/events');
var rides = require('./routes/rides');
var seats = require('./routes/seats');
// var authChecker = require('./routes/authChecker');

//express**
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// var setUserNameLocal = function (req, res, next) {
//   res.locals.currentUser = req.cookies.user
//   next()
// }

// app.use(setUserNameLocal)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//routes**

// app.use('/api', routes);
// app.use('/api/users', checkUser);
// app.use('/auth', auth);
// app.use('/api/users', authChecker.userBouncer);
app.use('/api/users', users);
app.use('/api/users', kids);
app.use('/api/orgs', orgs);
// app.use('/api/orgs', authChecker.userBouncer);
app.use('/api/orgs', groups);
// app.use('/api/orgs', authChecker.userBouncer);
app.use('/api/orgs', events);
app.use('/api/orgs', rides);
app.use('/api/orgs', seats);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
