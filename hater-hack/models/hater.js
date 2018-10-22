const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const haterSchema = new Schema(
  {
    username: { type: String, unique: true },
    password: String,
    avatar: { type: String, default: 'images/avatar.png' },
    description: String,
    campus: String,
    cohort: String,
    hateRecived: Array
  });

const Hater = mongoose.model('Hater', haterSchema);

module.exports = Hater;
