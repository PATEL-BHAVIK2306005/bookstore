const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    _id: String,
    length: Number,
    cover: String,
    summary: String,
    relaseDate: Date,
    price: Number,
    quantity: Number,
    author: {
        type: String,
        ref: "Authors",
    },
    category: {
      type: String,
      ref: "Categories",
    },
  });

  module.exports = mongoose.model('Books', BookSchema)
