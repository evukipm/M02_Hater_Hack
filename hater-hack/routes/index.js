const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/crypost');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  if (res.locals.currentUser) {
    res.render('index');
  } else {
    res.redirect('/auth/login');
  }

  // get all posts
  Post.find()
    .then(post => {
      res.render('/', { post }); // send all post to the view
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
