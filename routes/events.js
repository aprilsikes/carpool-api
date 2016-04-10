var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Orgs() {
  return knex('orgs');
}

function Groups() {
  return knex('groups');
}

function Events() {
  return knex('events');
}


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
        res.json({org: org, group: group, event: event});
      })
    })
  })
})

router.post('/:orgs_id/groups/:groups_id/events/:id/delete', function (req, res, next) {
  Events().where('id', req.params.id).delete().then(function () {
    res.json({success: true});
  })
})

module.exports = router;
