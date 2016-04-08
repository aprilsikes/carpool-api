var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Orgs() {
  return knex('orgs');
}

function Groups() {
  return knex('groups');
}

router.post('/:id', function (req, res) {
  Groups().insert(req.body).then(function () {
    res.json({success: true});
  });
});

module.exports = router;
