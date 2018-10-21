var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  if (req.locals.currentUser) {
    res.render('index');
  } else {
    res.redirect('/auth/login');
  }
});

module.exports = router;
