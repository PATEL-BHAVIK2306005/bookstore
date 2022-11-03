const mongoose = require('mongoose')

const WarehouseSchema = mongoose.Schema({
    _id: String,
    city: String, 
    address: String,
    size: Number,
    stock: [{
      type: String,
      ref: "Books",
      quantiy: Number
    }],
  });

  module.exports = mongoose.model('Warehouses', WarehouseSchema)