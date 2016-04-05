var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Orgs() {
  return knex('orgs');
}

router.get('/orgs', function(req, res, next) {
  Orgs().select().then(function (orgs) {
    console.log(orgs);
    res.json(orgs);
  })
})

module.exports = router;
