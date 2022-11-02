const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    _id: String,
    url: String,
    /*books: [{
        type: String,
        ref: "Books",
      }],*/
  });
  module.exports = mongoose.model('Categories', CategorySchema)
