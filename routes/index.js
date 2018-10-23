const express = require('express');
const Post = require('../models/crypost');
const router = express.Router();
const middlewares = require('../middleware/middlewares');

/* GET home page. */
router.get('/', middlewares.userExist, (req, res, next) => {
  // get all posts
  Post.find()
    .populate('author')
    .then(post => {
      res.render('index', { post });
    })
    .catch(next);
});

router.post('/:id', (req, res, next) => {
  const id = req.params.id;
  const body = req.body;

  Post.findById({ _id: id })
    .then(post => {
      if (body.button === 'a') {
        post.hateButtons.buttonA++;
        post.save();
      } else if (body.button === 'b') {
        post.hateButtons.buttonB++;
        post.save();
      } else if (body.button === 'c') {
        post.hateButtons.buttonC++;
        post.save();
      } else if (body.button === 'd') {
        post.hateButtons.buttonD++;
        post.save();
      }
      res.redirect('/');
    })
    .catch(next);
});

module.exports = router;
