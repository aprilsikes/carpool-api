var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Orgs() {
  return knex('orgs');
}

router.get('/', function(req, res, next) {
  Orgs().select().then(function (orgs) {
    res.json(orgs);
  })
})

module.exports = router;
