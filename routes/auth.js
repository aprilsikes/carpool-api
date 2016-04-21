require('dotenv').load();
var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var request = require('request');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var path = require('path');
var qs = require('querystring');
var moment = require('moment');

function Users() {
  return knex('users');
}

function Orgs() {
  return knex('orgs');
}

function createToken(user){
  return jwt.sign(user, process.env.TOKEN_SECRET)
}
function verifyToken(user){
  return jwt.verify(user, process.env.TOKEN_SECRET)
}

router.post('/facebook', function(req, res,next) {
  var fields = ['id', 'email', 'first_name', 'last_name'];
  var accessTokenUrl = 'https://graph.facebook.com/v2.5/oauth/access_token';
  var graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' +fields.join(',');
  var params = {
    code: req.body.code,
    client_id: '1722897481320264',
    client_secret: process.env.FACEBOOK_SECRET_DEV,
    redirect_uri: req.body.redirectUri
    };
   request.get({ url: accessTokenUrl, qs: params, json: true }, function(err, response, accessToken) {
      if (response.statusCode !== 200) {
        return res.status(500).send({ message: accessToken.error.message });
      }
      request.get({ url: graphApiUrl, qs: accessToken, json: true }, function(err, response, profile) {
        if (response.statusCode !== 200) {
          return res.status(500).send({ message: profile.error.message });
        }
          var user = {
            facebook_id: profile.id,
            profile_image_url: 'https://graph.facebook.com/'+profile.id+'/picture?type=large',
            email: profile.email,
            first_name: profile.first_name,
            last_name: profile.last_name,
            name: profile.name
          };
          var token = createToken(user);
          Users().insert(user).catch(function(error) {
            console.log(error);
          }).then(function() {
            res.send({token: token})
            res.redirect('/')
          })
      })
    })
})

router.post('/login', function(req, res, next) {
  Orgs().where('email', req.body.email).first().then(function(found) {
    if (found) {
      if (bcrypt.compareSync(req.body.password, found.password)) {
        res.cookie('org', req.body.email);
        var token = createToken(org);
        res.json({token: token});
      } else {
          res.send('Email/Password not valid');
        }
    } else {
        res.send('Email/Password not valid');
      }
  });
});


router.post('/signup', function(req, res, next) {
  var crypted = bcrypt.hashSync(req.body.password, 8)
  Orgs().where('email', req.body.email).first().then(function(found) {
    if (!found){
      var org = {
        email: req.body.email,
        password: crypted,
        org_name: req.body.org_name,
        org_url: req.body.org_url,
        category: req.body.category,
        street1: req.body.street1,
        street2: req.body.street2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
      };
      Users().insert(org).then(function(org) {
        res.cookie('org', req.body.email);
        res.cookie('password', crypted);
        res.json({success: true});
      })
    } else {
      res.send('Email/Password taken');
    }
  })
})

module.exports = router;
