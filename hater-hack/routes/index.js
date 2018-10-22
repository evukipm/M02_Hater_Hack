const express = require('express');
const Post = require('../models/crypost');
const Hater = require('../models/hater');
const router = express.Router();
const middlewares = require('../middleware/middlewares');

/* GET home page. */
router.get('/', middlewares.userExist, (req, res, next) => {
  // get all posts
  Post.find()
    .populate('author')
    .then(post => {
      // const authorOfPost = Hater.findById(post.author)
      // console.log(authorOfPost);

      res.render('index', { post });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
