const express = require('express');
const Post = require('../models/crypost');
const router = express.Router();
const middlewares = require('../middleware/middlewares');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

router.get('/new', middlewares.userExist, (req, res, next) => {
  res.render('posts/newpost', { messages: req.flash('error') });
});

router.post('/new', middlewares.infoPostIsEmpty, (req, res, next) => {
  const userId = req.session.currentUser._id;
  const post = req.body;
  post.author = ObjectId(userId);
  const f = new Date();
  post.date = `el ${f.getDate()}/${f.getMonth()}/${f.getFullYear()} a las ${f.getHours()}:${f.getMinutes()}`;
  post.hateButtons = {
    buttonA: 0,
    buttonB: 0,
    buttonC: 0,
    buttonD: 0
  };

  const crypost = new Post(post);
  crypost.save()
    .then(() => {
      res.redirect('/');
    })

    .catch((error) => {
      next(error);
    });
});

// edit posts

module.exports = router;
