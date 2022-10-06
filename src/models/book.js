const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    name: String,
    author: String,
    length: Number,
    price: Number,
    quantity: Number
  });

  module.exports = mongoose.model('Books', BookSchema)
