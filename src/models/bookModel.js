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
    // Add Genre
    // Add Author
  });

  module.exports = mongoose.model('Books', BookSchema)
