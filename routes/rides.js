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

function Rides() {
  return knex('rides');
}

router.get('/:orgs_id/groups/:groups_id/events/:events_id/rides/:id', function(req, res, next) {
  Orgs().where('id', req.params.orgs_id).first().then(function(org) {
    Groups().where('id', req.params.groups_id).then(function(group) {
      Events().where('id', req.params.id).then(function(event) {
        Rides().where('events_id', req.params.id).then(function(rides) {
          res.json({org: org, group: group, event: event, rides: rides});
        })
      })
    })
  })
})

router.post('/:orgs_id/groups/:groups_id/events/:id/rides', function(req, res, next) {
  var ride = {};
  ride.kid_name = req.body.kid_name,
  ride.events_id = req.params.id,
  ride.school = req.body.school,
  Rides().insert(ride).then(function() {
    res.json({success: true});
  })
})

router.post('/:orgs_id/groups/:groups_id/events/:events_id/rides/:id/update', function(req, res, next) {
  Rides().where('id', req.params.id).update(req.body).then(function() {
    res.json({success: true});
  })
})

module.exports = router;
