const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    _id: String,
    Address: {
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
    },
    role: [
      {
        type: String,
        ref: 'Roles', 
      }
    ]
  });

  module.exports = mongoose.model('Users', UserSchema)