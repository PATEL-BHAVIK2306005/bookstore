const mongoose = require('mongoose')

const AccountPaymentSchema = mongoose.Schema({
    _id: Number,
    creditNumber: Number,
    date: Date,
    amount: Number,
    username:
    {
        type: String,
        ref: "Users"
    },
    cart:
    [
        {
            type: String,
            ref: "Books"
        }
    ],
    completedTransactions:[
        {
            type: String,
            ref: "Books"
        }
    ],
  });
  module.exports = mongoose.model('Payment', AccountPaymentSchema)