const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const comentSchema = new Schema({
  author: {
    type: ObjectId,
    ref: 'User'
  },
  post: {
    type: ObjectId,
    ref: 'Post'
  },
  coment: String,
  date: String,
  hateButtons:
  {
    buttonA: { type: Number, default: 0 },
    buttonB: { type: Number, default: 0 },
    buttonC: { type: Number, default: 0 },
    buttonD: { type: Number, default: 0 }
  }
});

const Coment = mongoose.model('Coment', comentSchema);

module.exports = Coment;
