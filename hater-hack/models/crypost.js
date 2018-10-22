const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const cryPostSchema = new Schema({
  author: {
    type: ObjectId,
    ref: 'Hater'
  },
  title: String,
  text: String,
  date: Date,
  hateButtons:
  {
    buttonA: Number,
    buttonB: Number,
    buttonC: Number,
    buttonD: Number
  }
});

const Post = mongoose.model('Post', cryPostSchema);

module.exports = Post;
