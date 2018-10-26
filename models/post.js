const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const cryPostSchema = new Schema({
  author: {
    type: ObjectId,
    ref: 'Hater'
  },
  comentNumber: { type: Number, default: 0 },
  title: String,
  text: String,
  date: String,
  hateButtons:
  {
    buttonA: { type: Number, default: 0 },
    buttonB: { type: Number, default: 0 },
    buttonC: { type: Number, default: 0 },
    buttonD: { type: Number, default: 0 }
  }
});

const Post = mongoose.model('Post', cryPostSchema);

module.exports = Post;
