var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
// var jwt = require('jsonwebtoken');

function Users() {
  return knex('users');
}

function Kids() {
  return knex('kids');
}

router.get('/', function(req, res, next) {
  Users().select().then(function(users) {
    res.json(users);
  })
})

router.get('/:id', function(req, res, next) {
  Users().where('id',  req.params.id).first().then(function(user) {
    Kids().where('users_id', req.params.id).then(function(kids) {
      res.json({user: user, kids: kids});
    })
  })
})

router.post('/', function(req, res, next) {
  var user = {};
  user.first_name = req.body.first_name,
  user.last_name = req.body.last_name,
  user.email = req.body.email,
  user.password = req.body.password,
  user.phone_number = req.body.phone_number,
  user.avatar_image_url = req.body.avatar_image_url,
  Users().insert(user).then(function() {
    res.json({success: true});
  })
})

module.exports = router;
