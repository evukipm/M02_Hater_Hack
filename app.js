const express = require('express');
const path = require('path');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require('dotenv').config();

const indexRouter = require('./routes/index');
const postRouter = require('./routes/post');
const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');
const apiRouter = require('./routes/likes');
const middlewares = require('./middleware/middlewares');

const app = express();

// mongoose
mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
})
  .then(() => {
    console.log('Conection Ok');
  })
  .catch((error) => {
    console.log('error', error);
  });

app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  }),
  secret: 'some-string',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}));

// view engine setup
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layout/layout');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

app.use(middlewares.storeCurrentUser);

app.use((req, res, next) => {
  res.locals.errorMessages = req.flash('error');
  res.locals.infoMessages = req.flash('info');
  res.locals.dangerMessages = req.flash('danger');
  res.locals.successMessages = req.flash('success');
  res.locals.warningMessages = req.flash('warning');
  next();
});

app.use('/', indexRouter);
app.use('/post', postRouter);
app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404);
  res.render('errors/404');
});

// error handler
app.use(function (err, req, res, next) {
  console.log('error', err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  const status = err.status || 500;
  res.status(status);
  res.locals.status = status;

  // render the error page
  res.render('errors/error');
});

module.exports = app;
