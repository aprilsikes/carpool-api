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

router.get('/', function(req, res, next) {
  Orgs().select().then(function (orgs) {
    res.json(orgs);
  })
})

// router.get('/:anyroute/*', authChecker.userBouncer);

router.get('/:id', function (req, res, next) {
  Orgs().where('id',  req.params.id).first().then(function (org) {
    Groups().where('orgs_id', req.params.id).then(function (groups) {
      res.json({singleOrg: org, groups: groups});
    })
  })
})

router.post('/', function (req, res, next) {
  var org = {};
  org.org_name = req.body.org_name,
  org.org_url = req.body.org_url,
  org.image_url = req.body.image_url,
  org.email = req.body.email,
  org.password = req.body.password,
  org.category = req.body.category,
  org.street1 = req.body.street1,
  org.street2 = req.body.street2,
  org.city = req.body.city,
  org.state = req.body.state,
  org.zip = req.body.zip,
  Orgs().insert(org).then(function () {
    res.json({success: true});
  })
})

module.exports = router;
