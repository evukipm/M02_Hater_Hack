const express = require('express');
const router = express.Router();
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
    .then((user) => {
      req.session.currentUser = user;
      res.redirect('/');
    })
    .catch(next);
});

router.get('/login', (req, res, next) => {
  res.render('login');
});

router.post('/login', (req, res, next) => {
  const hater = req.body;
  const name = hater.name;

  Hater.findOne({ username: name })
    .then(user => {
      if (bcrypt.compareSync(hater.password, user.password)) {
        req.session.currentUser = user;
        res.redirect('/');
      } else {
        res.redirect('/auth/login');
      }
    })
    .catch(next);
});

module.exports = router;
