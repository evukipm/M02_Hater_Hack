const express = require('express');
const router = express.Router();
const Hater = require('../models/hater');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const middlefriends = require('../middlefriends/friends');

router.get('/register', (req, res, next) => {
  res.render('register');
});

router.post('/register', middlefriends.isEmpty, (req, res, next) => {
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
  res.render('login', { messages: req.flash('error') });
});

router.post('/login', middlefriends.isEmpty, (req, res, next) => {
  const hater = req.body;
  const name = hater.name;

  Hater.findOne({ username: name })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(hater.password, user.password)) {
          req.session.currentUser = user;
          return res.redirect('/');
        } else {
          req.flash('error', 'WTF? El nombre o la contraseña no existen');
          return res.redirect('/auth/login');
        }
      } else {
        req.flash('error', 'WTF? El nombre o la contraseña no existen');
        return res.redirect('/auth/login');
      }
    })
    .catch(next);
});

router.get('/logout', middlefriends.userExist, (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
    } else {
      res.redirect('/auth/login');
    }
  });
});

module.exports = router;
