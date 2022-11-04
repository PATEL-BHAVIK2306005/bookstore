const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    _id: String,
    address: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    role: [
      {
        type: String,
        ref: 'Roles', 
      }
    ]
  });

  module.exports = mongoose.model('Users', UserSchema)