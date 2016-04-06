var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Orgs() {
  return knex('orgs');
}

router.get('/', function(req, res, next) {
  Orgs().select().then(function (orgs) {
    console.log(orgs);
    res.json(orgs);
  })
})

router.get('/:id', function (req, res, next) {
  Orgs().where('id', req.params.id).first().then(function (org) {
    console.log(org);
    res.json(org);
  })
})

module.exports = router;
