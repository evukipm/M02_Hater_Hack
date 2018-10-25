const express = require('express');
const router = express.Router();
const Post = require('../models/crypost');

router.post('/likes', (req, res, next) => {
  const postId = req.body.postId;
  const value = req.body.button;

  Post.findById(postId)
    .then(post => {
      if (value === 'a') {
        post.hateButtons.buttonA++;
        post.save();
        res.json(post.hateButtons.buttonA);
      } else if (value === 'b') {
        post.hateButtons.buttonB++;
        post.save();
        res.json(post.hateButtons.buttonB);
      } else if (value === 'c') {
        post.hateButtons.buttonC++;
        post.save();
        res.json(post.hateButtons.buttonC);
      } else if (value === 'd') {
        post.hateButtons.buttonD++;
        post.save();
        res.json(post.hateButtons.buttonD);
      }
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
