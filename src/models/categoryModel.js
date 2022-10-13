const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    name: String,
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Books",
      }],
  });

  module.exports = mongoose.model('Categories', CategorySchema)
