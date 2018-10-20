const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Hater = require('../models/hater');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/register', (req, res, next) => {
  res.render('register');
});

router.post('/register', (req, res, next) => {
  const name = req.body.name;
  const pass = req.body.password;

  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(pass, salt);

  Hater.create({ username: name, password: hashedPassword })
    .then(() => {
      res.redirect('/');
    })
    .catch(next);
});

module.exports = router;
