var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Orgs() {
  return knex('orgs');
}

function Groups() {
  return knex('groups');
}

router.get('/', function(req, res, next) {
  Orgs().select().then(function (orgs) {
    console.log(orgs);
    res.json(orgs);
  })
})

router.get('/:id', function (req, res, next) {
  console.log(req.params.id);
  Orgs().where('id',  req.params.id).first().then(function (org) {
    Groups().where('orgs_id', req.params.id).then(function (groups) {
      console.log(org);
      console.log(groups);
      res.json({singleOrg: org, groups: groups});
    })
  })
})

module.exports = router;
