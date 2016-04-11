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

/* GET users listing. */
router.get('/', function(req, res, next) {
  Users().select().then(function (users) {
    res.json(users);
  })
})

router.get('/:id', function (req, res, next) {
  Users().where('id',  req.params.id).first().then(function (user) {
    Kids().where('users_id', req.params.id).then(function (kids) {
      res.json({user: user, kids: kids});
    })
  })
})

// router.get('/:anyroute/*', authChecker.userBouncer);

module.exports = router;
