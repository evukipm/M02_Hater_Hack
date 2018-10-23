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
        post.hateButtons.buttonC++;
        post.save();
      }
      res.redirect('/');
    })
    .catch(next);
});

module.exports = router;
