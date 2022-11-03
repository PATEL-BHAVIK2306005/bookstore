const mongoose = require('mongoose')

const PaymentSchema = mongoose.Schema({
    _id: String,
    creditNumber: Number,
    customer: {
        type: String,
        ref: "Authors",
    },
    books: [{
        type: String,
        ref: "Books",
      }],
    warehouse: {
        type: String,
        ref: "Warehouses"
    }
  });
  module.exports = mongoose.model('Payments', PaymentSchema)