const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    name: String,
    length: Number,
    cover: String,
    relaseDate: Date,
    price: Number,
    quantity: Number,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
    },
  });

  module.exports = mongoose.model('Books', BookSchema)
