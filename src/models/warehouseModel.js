const mongoose = require('mongoose')

const WarehouseSchema = mongoose.Schema({
    city: String, 
    address: String,
    coordinates: String,
    size: Number,

  });

  module.exports = mongoose.model('Warehouse', WarehouseSchema)