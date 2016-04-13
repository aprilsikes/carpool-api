var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
// var authChecker = require('./authChecker');
// var jwt = require('jsonwebtoken');

function Seats() {
  return knex('seats');
}

router.post('/:orgs_id/groups/:groups_id/events/:id/seats', function (req, res, next) {
  var seat = {};
  seat.username = req.body.username,
  seat.events_id = req.params.id,
  seat.number_of_seats = req.body.number_of_seats,
  Seats().insert(seat).then(function () {
    res.json({success: true});
  })
})

module.exports = router;
