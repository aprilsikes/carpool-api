var express = require('express');
var router = express.Router();
// var authChecker = require('./authChecker');
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

function Users() {
  return knex('users');
}


// signIn
router.post('/signIn', function(req, res, next){
  Users().where('email', req.body.email}).first().then(function(found){
    if (found){
      if (bcrypt.compareSync(req.body.password, found.password)){
        res.cookie('users', req.body.email)
        res.json({success: true});
      } else {
        res.send('Email/Password not valid');
      }
    } else {
      res.send('Email/Password not valid');
    }
  })
});

// signUp
router.post('/signUp', function(req, res, next){
  var crypted = bcrypt.hashSync(req.body.password, 8)
  Users().where('email', req.body.email).first().then(function(found){
    if (!found){
      Users().insert({email: req.body.email, password: crypted, username: req.body.username, phone_number:req.body.phone_number}).then(function(result){
        res.cookie('users', req.body.email)
        res.cookie('password', crypted)
        res.json({success: true});
      });
    } else {
      res.send('Email/Password taken');
    }
  })

});

module.exports = router;
