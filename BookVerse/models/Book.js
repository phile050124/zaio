const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  ISBN: String,
  genre: String,
  price: Number,
  stockQuantity: Number,
});

module.exports = mongoose.model('Book', bookSchema);
