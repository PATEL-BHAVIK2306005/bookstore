const mongoose = require('mongoose')

const AuthorSchema = mongoose.Schema({
    name: String,
    books: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Books",
    },
    // Add Genre
    // Add Author
  });

  module.exports = mongoose.model('Author', AuthorSchema)
