const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    name: String,
    length: Number,
    cover: String,
    relaseDate: Date,
    price: Number,
    quantity: Number
    // Add Genre
    // Add Author
  });

  module.exports = mongoose.model('Books', BookSchema)
