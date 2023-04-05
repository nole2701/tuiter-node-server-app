import mongoose from 'mongoose';
const schema = mongoose.Schema({
  userName: String,
  handle: String,
  image: String,
  topic: String,
  time: String,
  tuit: String,
  likes: Number,
  liked: Boolean,
  dislikes: Number,
  disliked: Boolean,
  replies: Number,
  retuits: Number,
}, {collection: 'tuits'});
export default schema;