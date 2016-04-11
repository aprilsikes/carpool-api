// module.exports =  {
//
//   userBouncer: function (req, res, next) {
//     if (req.cookies.user) {
//       next();
//     }
//    else {
//      res.redirect('/');
//     }
//   },
//
//   specific_user_checker: function (req, res, next) {
//     if (req.params.username === req.cookies.user) {
//       next();
//     }
//    else {
//       res.redirect('/');
//     }
//   }
// };
