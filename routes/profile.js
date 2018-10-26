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
          res.render('profile/profile', { user, post });
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
  console.log(req.file);
  let avatar = false;
  if (req.file) {
    avatar = req.file.url;
  }

  User.findById(id)
    .then(user => {
      if (avatar) {
        user.avatar = avatar;
      } else if (body.name) {
        user.username = body.name;
      } else if (body.description) {
        user.description = body.description;
      } else if (body.cohort) {
        user.cohort = body.cohort;
      } else if (body.campus) {
        user.campus = body.campus;
      }
      user.save();
      res.redirect(`/profile/${id}`);
    })
    .catch(next);
});

module.exports = router;
