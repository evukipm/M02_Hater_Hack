const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Post = require('../models/post');
const uploadCloud = require('../services/cloudinary.js');

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  User.findById(id)
    .then(user => {
      Post.find({ author: id })
        .then(post => {
          if (post) {
            return res.render('profile/profile', { user, post });
          } else {
            return res.render('profile/profile', { user });
          }
        })
        .catch(next);
    })
    .catch(next);
});

router.get('/:id/edit', (req, res, next) => {
  res.render('profile/edit');
});

router.post('/:id/edit', uploadCloud.single('avatar'), (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  let avatar = false;
  if (req.file) {
    avatar = req.file.url;
  }

  User.findById(id)
    .then(user => {
      if (avatar) {
        user.avatar = avatar;
      }
      user.username = body.name;
      user.description = body.description;
      user.cohort = body.cohort;
      user.campus = body.campus;

      user.save();
      res.redirect(`/profile/${id}`);
    })
    .catch(next);
});

module.exports = router;
