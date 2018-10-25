const express = require('express');
const router = express.Router();
const Post = require('../models/crypost');

router.get('/likes', (req, res, next) => {
  Post.find()
    .then(post => {
      res.status(200);
      res.json(post);
    })
    .catch(error => {
      res.status(500);
      res.json(error);
    });
});

module.exports = router;
