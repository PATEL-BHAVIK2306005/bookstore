const mongoose = require('mongoose')

const WarehouseSchema = mongoose.Schema({
    _id: String,
    city: String, 
    address: String,
    size: Number,
    //stock: 
  });

  module.exports = mongoose.model('Warehouses', WarehouseSchema)