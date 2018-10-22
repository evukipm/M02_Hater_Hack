const express = require('express');
const Post = require('../models/crypost');
const router = express.Router();
const middlefriends = require('../middlefriends/friends');

/* GET home page. */
router.get('/', middlefriends.userExist, (req, res, next) => {
  // get all posts
  Post.find()
    .then(post => {
      res.render('/', { post }); // send all post to the view
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
