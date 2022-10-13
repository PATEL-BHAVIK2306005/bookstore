const mongoose = require('mongoose')

const AuthorSchema = mongoose.Schema({
    name: String,
    books: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Books",
    }],
  });

  module.exports = mongoose.model('Author', AuthorSchema)
