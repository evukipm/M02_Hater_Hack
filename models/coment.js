const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const comentSchema = new Schema({
  author: {
    type: ObjectId,
    ref: 'Hater'
  },
  post: {
    type: ObjectId,
    ref: 'Post'
  },
  coment: String,
  date: String,
  hateButtons:
  {
    buttonA: Number,
    buttonB: Number,
    buttonC: Number,
    buttonD: Number
  }
});

const Coment = mongoose.model('Coment', comentSchema);

module.exports = Coment;
