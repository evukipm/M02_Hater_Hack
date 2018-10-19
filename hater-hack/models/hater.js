const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const haterSchema = new Schema(
  {
    username: String,
    password: String,
    description: String,
    campus: String,
    cohort: String,
    hateRecived: Array
  });

const Hater = mongoose.model('Hater', haterSchema);

module.exports = Hater;
