const express = require('express');
const Post = require('../models/post');
const router = express.Router();
const middlewares = require('../middleware/middlewares');

/* GET home page. */
router.get('/', middlewares.userExist, (req, res, next) => {
  Post.find()
    .populate('author')
    .then(post => {
      return res.render('index', { post });
    })
    .catch(next);
});

module.exports = router;
