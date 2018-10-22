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
    res.redirect('/');
  }
  next();
}

function userExist (req, res, next) {
  if (!res.locals.currentUser) {
    res.redirect('/');
  }
  next();
}

module.exports = {
  storeCurrentUser,
  isEmpty,
  userExist
};
