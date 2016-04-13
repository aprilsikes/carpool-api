var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
// var authChecker = require('./authChecker');
// var jwt = require('jsonwebtoken');

function Rides() {
  return knex('rides');
}

router.post('/:orgs_id/groups/:groups_id/events/:id/rides', function (req, res, next) {
  var ride = {};
  ride.kid_name = req.body.kid_name,
  ride.events_id = req.params.id,
  ride.school = req.body.school,
  Rides().insert(ride).then(function () {
    res.json({success: true});
  })
})

module.exports = router;
