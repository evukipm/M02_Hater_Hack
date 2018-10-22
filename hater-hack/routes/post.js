const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/crypost');
const router = express.Router();
const middlefriends = require('../middlefriends/friends');

router.get('/new', (req, res, next) => {
  res.render('posts/newpost', { messages: req.flash('error') });
});

router.post('/new', middlefriends.infoPostIsEmpty, (req, res, next) => {
  const post = req.body;
  Post.create(post)
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
