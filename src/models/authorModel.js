const mongoose = require('mongoose')

const AuthorSchema = mongoose.Schema({
  _id: String,
    age: Number,
    bio: String,
    picture: String,

})

  module.exports = mongoose.model('Authors', AuthorSchema)
  