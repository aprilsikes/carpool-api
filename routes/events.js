var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
// var authChecker = require('./authChecker');
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

function Rides() {
  return knex('rides');
}

function Seats() {
  return knex('seats');
}

// router.get('/:anyroute/*', authChecker.userBouncer);

router.post('/:orgs_id/groups/:id/events', function (req, res, next) {
  var event = {};
  event.event_name = req.body.event_name,
  event.groups_id = req.params.id,
  event.date = req.body.date,
  event.time = req.body.time,
  event.location = req.body.location
  Events().insert(event).then(function () {
    res.json({success: true});
  })
})

router.get('/:orgs_id/groups/:groups_id/events/:id', function (req, res, next) {
  Orgs().where('id', req.params.orgs_id).first().then(function (org) {
    Groups().where('id', req.params.groups_id).then(function (group) {
      Events().where('id', req.params.id).then(function (event) {
        Rides().where('events_id', req.params.id).then(function (rides) {
          Seats().where('events_id', req.params.id).then(function (seats) {
            res.json({org: org, group: group, event: event, rides: rides, seats: seats});
          })
        })
      })
    })
  })
})

// router.get('/:anyroute/*', authChecker.specific_user_checker);

router.post('/:orgs_id/groups/:groups_id/events/:id/delete', function (req, res, next) {
  Events().where('id', req.params.id).delete().then(function () {
    res.json({success: true});
  })
})

router.post('/:orgs_id/groups/:groups_id/events/:id/rides', function (req, res, next) {
  var ride = {};
  ride.kid_name = req.body.kid_name,
  event.events_id = req.params.id,
  event.school = req.body.school,
  Rides().insert(ride).then(function () {
    res.json({success: true});
  })
})

router.post('/:orgs_id/groups/:groups_id/events/:id/seats', function (req, res, next) {
  var seat = {};
  seat.username = req.body.username,
  seat.events_id = req.params.id,
  seat.number_of_seats = req.body.number_of_seats,
  Seats().insert(seat).then(function () {
    res.json({success: true});
  })
})

// router.post('/:orgs_id/groups/:groups_id/events/:id/edit', jwt({secret: secret.secretToken}), function (req, res, next) {
//   Events().where('id', req.params.id).update().then(function () {
//     res.json({success: true});
//   })
// })

module.exports = router;
