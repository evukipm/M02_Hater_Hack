const express = require('express');
const Post = require('../models/crypost');
const router = express.Router();
const middlefriends = require('../middlefriends/friends');

router.get('/new', middlefriends.userExist, (req, res, next) => {
  res.render('posts/newpost', { messages: req.flash('error') });
});

router.post('/new', middlefriends.infoPostIsEmpty, (req, res, next) => {
  const post = req.body;
  const crypost = new Post(post);
  console.log('hola');
  crypost.save()
    .then(() => {
      res.redirect('/');
    })
  // Post.create({ post })
  //   .then(() => {
  //     console.log('hola?');
  //     res.redirect('/');
  //   })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
