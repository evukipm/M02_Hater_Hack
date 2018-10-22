const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/crypost');
const router = express.Router();

router.get('/new', (req, res, next) => {
  res.render('posts/newpost');
});

router.post('/new', (req, res, next) => {
  res.render('post/add');
});
