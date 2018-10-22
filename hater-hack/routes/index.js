const express = require('express');
const Post = require('../models/crypost');
const Hater = require('../models/hater');
const router = express.Router();
const middlewares = require('../middleware/middlewares');

/* GET home page. */
router.get('/', middlewares.userExist, (req, res, next) => {
  // get all posts
  Post.find()
    .then(post => {
      res.render('index', { post });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
