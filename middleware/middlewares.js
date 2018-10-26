function storeCurrentUser (req, res, next) {
  if (req.session.currentUser) {
    res.locals.currentUser = req.session.currentUser;
  }
  next();
};

// name and password validation
function isEmpty (req, res, next) {
  const name = req.body.name;
  const pass = req.body.password;
  if (!name || !pass) {
    req.flash('error', 'No podemos verificar a la nada, por favor, rellena los campos.');
    return res.redirect('/auth/login');
  }
  next();
}

function userExist (req, res, next) {
  if (!res.locals.currentUser) {
    return res.redirect('/auth/login');
  }
  next();
}

function infoPostIsEmpty (req, res, next) {
  const title = req.body.title;
  const text = req.body.text;
  if (!title || !text) {
    req.flash('error', 'Gañán/a, los campos están vacios');
    return res.redirect('/post/new');
  }
  next();
}

module.exports = {
  storeCurrentUser,
  isEmpty,
  userExist,
  infoPostIsEmpty
};
