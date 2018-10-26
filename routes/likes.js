const express = require('express');
const router = express.Router();
const Post = require('../models/crypost');
const Coment = require('../models/coment');

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

router.post('/coment/likes', (req, res, next) => {
  const postId = req.body.postId;
  const value = req.body.button;

  Coment.findById(postId)
    .then(coment => {
      if (value === 'a') {
        coment.hateButtons.buttonA++;
        coment.save();
        res.json(coment.hateButtons.buttonA);
      } else if (value === 'b') {
        coment.hateButtons.buttonB++;
        coment.save();
        res.json(coment.hateButtons.buttonB);
      } else if (value === 'c') {
        coment.hateButtons.buttonC++;
        coment.save();
        res.json(coment.hateButtons.buttonC);
      } else if (value === 'd') {
        coment.hateButtons.buttonD++;
        coment.save();
        res.json(coment.hateButtons.buttonD);
      }
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
