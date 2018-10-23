const express = require('express');
const router = express.Router();
const User = require('../models/hater');
const Post = require('../models/crypost');
const middlewares = require('../middleware/middlewares');

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

module.exports = router;
