const express = require('express');
const router = express.Router();
const User = require('../models/hater');
const Post = require('../models/crypost');
const middlewares = require('../middleware/middlewares');
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
  const name = req.body.username;
  const description = req.body.description;
  const cohort = req.body.cohort;
  const campus = req.body.campus;
  const avatar = req.file.url;

  User.findById(id)
    .then(user => {
      user.avatar = avatar;
      user.username = name;
      user.description = description;
      user.cohort = cohort;
      user.campus = campus;
      user.save();
      res.redirect(`/profile/${id}`);
    })
    .catch(next);
});

module.exports = router;
