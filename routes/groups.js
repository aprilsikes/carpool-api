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

router.post('/:id/groups', function(req, res, next) {
  var group = {};
  group.group_name = req.body.group_name,
  group.orgs_id = req.params.id,
  Groups().insert(group).then(function() {
    res.json({success: true});
  })
})

router.get('/:orgs_id/groups/:id', function(req, res, next) {
  Orgs().where('id', req.params.orgs_id).first().then(function(org) {
    Groups().where('id', req.params.id).then(function(group) {
      Events().where('groups_id', req.params.id).then(function(events) {
        res.json({org: org, group: group, events: events});
      })
    })
  })
})

router.post('/:orgs_id/groups/:id/delete', function(req, res, next) {
  Groups().where('id', req.params.id).delete().then(function() {
    res.json({success: true});
  })
})

router.post('/:orgs_id/groups/:id/update', function(req, res, next) {
  Groups().where('id', req.params.id).update(req.body).then(function() {
    res.json({success: true});
  })
})

module.exports = router;
