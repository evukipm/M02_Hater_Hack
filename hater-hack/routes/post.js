const express = require('express');
const Post = require('../models/crypost');
const router = express.Router();
const middlewares = require('../middleware/middlewares');

router.get('/new', middlewares.userExist, (req, res, next) => {
  res.render('posts/newpost', { messages: req.flash('error') });
});

router.post('/new', middlewares.infoPostIsEmpty, (req, res, next) => {
  const userId = req.session.currentUser._id;
  const post = req.body;
  post.author = userId;
  const f = new Date();
  post.date = `el ${f.getDate()}/${f.getMonth()}/${f.getFullYear()} a las ${f.getHours()}:${f.getMinutes()}`;

  const crypost = new Post(post);
  crypost.save()
    .then(() => {
      res.redirect('/');
    })

    .catch((error) => {
      next(error);
    });
});

module.exports = router;
