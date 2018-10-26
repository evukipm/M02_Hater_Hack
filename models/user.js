const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, unique: true },
    password: String,
    avatar: { type: String, default: '/images/avatar.png' },
    description: String,
    campus: String,
    cohort: String,
    hateRecived: Array
  });

const User = mongoose.model('User', userSchema);

module.exports = User;
