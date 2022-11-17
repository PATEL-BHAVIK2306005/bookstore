const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    _id: String,
    url: String,
  });
  module.exports = mongoose.model('Categories', CategorySchema)
