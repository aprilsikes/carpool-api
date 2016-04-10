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

module.exports = router;
