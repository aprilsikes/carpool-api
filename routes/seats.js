var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
// var jwt = require('jsonwebtoken');

function Orgs() {
  return knex('orgs');
}

function Groups() {
  return knex('groups');
}

function Events() {
  return knex('events');
}

function Seats() {
  return knex('seats');
}

router.get('/:orgs_id/groups/:groups_id/events/:events_id/seats/:id', function(req, res, next) {
  Orgs().where('id', req.params.orgs_id).first().then(function(org) {
    Groups().where('id', req.params.groups_id).then(function(group) {
      Events().where('id', req.params.id).then(function(event) {
        Seats().where('events_id', req.params.id).then(function(seats) {
          res.json({org: org, group: group, event: event, seats: seats});
        })
      })
    })
  })
})

router.post('/:orgs_id/groups/:groups_id/events/:id/seats', function(req, res, next) {
  var seat = {};
  seat.username = req.body.username,
  seat.events_id = req.params.id,
  seat.number_of_seats = req.body.number_of_seats,
  Seats().insert(seat).then(function() {
    res.json({success: true});
  })
})

router.post('/:orgs_id/groups/:groups_id/events/:events_id/seats/:id/update', function(req, res, next) {
  Seats().where('id', req.params.id).update(req.body).then(function() {
    res.json({success: true});
  })
})

module.exports = router;
