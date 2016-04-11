var express = require('express');
var router = express.Router();
var authChecker = require('./authChecker');

function Users() {
  return knex('users');
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:anyroute/*', authChecker.userBouncer);

module.exports = router;
