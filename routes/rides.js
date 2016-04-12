// var express = require('express');
// var router = express.Router();
// var knex = require('../db/knex');
// // var authChecker = require('./authChecker');
// // var jwt = require('jsonwebtoken');
//
// function Orgs() {
//   return knex('orgs');
// }
//
// function Groups() {
//   return knex('groups');
// }
//
// function Events() {
//   return knex('events');
// }
//
// function Rides() {
//   return knex('rides');
// }
//
// function Seats() {
//   return knex('seats');
// }
//
// router.get('/:orgs_id/groups/:groups_id/events/:id/rides', function (req, res, next) {
//   Orgs().where('id', req.params.orgs_id).first().then(function (org) {
//     Groups().where('id', req.params.groups_id).then(function (group) {
//       Events().where('id', req.params.id).then(function (event) {
//         res.json({org: org, group: group, event: event});
//       })
//     })
//   })
// })
