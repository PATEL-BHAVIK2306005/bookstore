const mongoose = require('mongoose')

const AccountPaymentSchema = mongoose.Schema({
    _id: Number,
    creditNumber: Number,
    date: Date,
    amount: Number,
    user:
    {
        type:String,
        ref:"Users"
    },
    cart:
    [
        {
            type:String,
            ref:"Books"
        }
    ],
    completedTrasactions:[
        {
            type:String,
            ref:"Books"
        }
    ],
  });
  module.exports = mongoose.model('AccountPayment', AccountPaymentSchema)