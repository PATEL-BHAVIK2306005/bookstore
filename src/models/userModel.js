const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    _id: String, //////////// need to change id to email
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    email: {
      type: String,
      required: true
    },
    role: [
      {
        type: String,
        ref: 'Roles', 
      }
    ]
  });

  module.exports = mongoose.model('Users', UserSchema)