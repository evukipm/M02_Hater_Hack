const express = require('express');
const Post = require('../models/crypost');
const router = express.Router();
const middlewares = require('../middleware/middlewares');

router.get('/new', middlewares.userExist, (req, res, next) => {
  res.render('posts/newpost', { messages: req.flash('error') });
});

router.post('/new', middlewares.infoPostIsEmpty, (req, res, next) => {
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
