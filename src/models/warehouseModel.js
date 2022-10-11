const mongoose = require('mongoose')

const WarehouseSchema = mongoose.Schema({
    coordinates: String,
    city: String, 
    address: String,
    size: Number,

  });

  module.exports = mongoose.model('Warehouse', WarehouseSchema)