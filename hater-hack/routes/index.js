const express = require('express');
const Post = require('../models/crypost');
const router = express.Router();
const middlewares = require('../middleware/middlewares');

/* GET home page. */
router.get('/', middlewares.userExist, (req, res, next) => {
  // get all posts
  Post.find()
    .then(post => {
      console.log(post);
      res.render('index', { post });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
