const mongoose = require('mongoose')

const RoleSchema = mongoose.Schema(
    {
      _id: String,
      description: String,
    }
  );
  module.exports = mongoose.model('Roles', RoleSchema)