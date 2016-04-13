var express = require('express');
var router = express.Router();
// var authChecker = require('./authChecker');
var knex = require('../db/knex');
// var jwt = require('jsonwebtoken');

function Users() {
  return knex('users');
}

function Kids() {
  return knex('kids');
}

router.post('/:id/kids', function (req, res, next) {
  var kid = {};
  kid.kid_name = req.body.kid_name,
  kid.users_id = req.params.id,
  kid.school = req.body.school,
  Kids().insert(kid).then(function () {
    res.json({success: true});
  })
})

router.post('/:users_id/kids/:id/update', function (req, res, next) {
  Kids().where('id', req.params.id).update(req.body).then(function () {
    res.json({success: true});
  })
})

module.exports = router;
