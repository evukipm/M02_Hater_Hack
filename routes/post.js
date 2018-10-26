const express = require('express');
const Post = require('../models/post');
const Coment = require('../models/coment');
const router = express.Router();
const middlewares = require('../middleware/middlewares');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// create a new post
router.get('/new', middlewares.userExist, (req, res, next) => {
  return res.render('posts/newpost', { messages: req.flash('error') });
});

router.post('/new', middlewares.infoPostIsEmpty, (req, res, next) => {
  const userId = req.session.currentUser._id;
  const post = req.body;
  post.author = ObjectId(userId);
  const f = new Date();
  post.date = `el ${f.getDate()}/${f.getMonth()}/${f.getFullYear()} a las ${f.getHours()}:${f.getMinutes()}`;

  const crypost = new Post(post);
  crypost.save()
    .then(() => {
      req.flash('info', 'Tu lloriqueo se ha subido correctamente');
      return res.redirect('/', { messages: req.flash('info') });
    })
    .catch(next);
});

// get posts
router.get('/:id', middlewares.userExist, (req, res, next) => {
  const id = req.params.id;
  // current usser
  Post.findById(id)
    .populate('author')
    .then(post => {
      Coment.find({ post: id })
        .populate('author')
        .then(coments => {
          return res.render('posts/postdetails', { post, coments });
        });
    })
    .catch(next);
});

// delete
router.get('/:id/delete', middlewares.userExist, (req, res, next) => {
  const id = req.params.id;
  Post.findByIdAndRemove(id)
    .then(result => {
      return res.redirect('/');
    })
    .catch(next);
});

// edit
router.get('/:id/edit', middlewares.userExist, (req, res, next) => {
  const id = req.params.id;
  Post.findById(id)
    .then(post => {
      return res.render('posts/editpost', { post });
    })
    .catch(next);
});

router.post('/:id/edit', middlewares.userExist, (req, res, next) => {
  const post = req.body;
  const id = req.params.id;
  Post.findByIdAndUpdate(id, post)
    .then((result) => {
      return res.redirect('/');
    })
    .catch(next);
});

router.post('/:id/coment', (req, res, next) => {
  const postId = req.params.id;
  const userId = req.session.currentUser._id;
  const coment = req.body;
  coment.author = ObjectId(userId);
  coment.post = ObjectId(postId);
  const f = new Date();
  coment.date = `el ${f.getDate()}/${f.getMonth()}/${f.getFullYear()} a las ${f.getHours()}:${f.getMinutes()}`;

  const comentary = new Coment(coment);
  comentary.save()
    .then(() => {
      Post.findById(postId)
        .then(post => {
          post.comentNumber++;
          post.save()
            .then(result => {
              return res.redirect(`/post/${postId}`);
            })
            .catch(next);
        })
        .catch(next);
    })
    .catch(next);
});

module.exports = router;
