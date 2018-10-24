const express = require('express');
const Post = require('../models/crypost');
const router = express.Router();
const middlewares = require('../middleware/middlewares');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// create a new post
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

// get posts
router.get('/:id', middlewares.userExist, (req, res, next) => {
  const id = req.params.id;
  // current usser
  const userId = req.session.currentUser._id;
  Post.findById(id)
    .populate('author')
    .then(post => {
      const post1 = {
        post,
        userId
      };
      res.render('../views/posts/postdetails', { post1 });
    })
    .catch(error => {
      next(error);
    });
});

// delete
router.get('/:id/delete', middlewares.userExist, (req, res, next) => {
  const id = req.params.id;
  Post.findByIdAndRemove(id)
    .then(result => {
      res.redirect('/');
    })
    .catch((error) => {
      next(error);
    });
});

// edit
router.get('/:id/edit', middlewares.userExist, (req, res, next) => {
  const id = req.params.id;
  Post.findById(id)
    .then(post => {
      console.log(post);
      res.render('posts/editpost', { post });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/:id/edit', middlewares.userExist, (req, res, next) => {
  const post = req.body;
  const id = req.params.id;
  Post.findByIdAndUpdate(id, post)
    .then((result) => {
      res.redirect('/');
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
