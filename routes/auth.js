const express = require('express');
const router = express.Router();
const Hater = require('../models/hater');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const middlewares = require('../middleware/middlewares');

router.get('/register', (req, res, next) => {
  res.render('register', { messages: req.flash('error') });
});

router.post('/register', middlewares.isEmpty, (req, res, next) => {
  const name = req.body.name;
  const pass = req.body.password;

  Hater.find({ username: name })
    .then(user => {
      if (user) {
        req.flash('error', 'Lo sentimos, ese usuario ya existe');
        return res.redirect('/auth/register');
      } else {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(pass, salt);

        Hater.create({ username: name, password: hashedPassword })
          .then(user => {
            req.session.currentUser = user;
            return res.redirect('/');
          })
          .catch(next);
      }
    })
    .catch(next);
});

router.get('/login', (req, res, next) => {
  res.render('login', { messages: req.flash('error') });
});

router.post('/login', middlewares.isEmpty, (req, res, next) => {
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

router.post('/logout', middlewares.userExist, (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      console.log(err);
    } else {
      return res.redirect('/auth/login');
    }
  });
});

module.exports = router;
