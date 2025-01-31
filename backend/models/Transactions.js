const mongoose = require('mongoose')

const transactionsSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  amount: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  // category: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Category',
  //   required: true,
  // }

})

module.exports = mongoose.model("Transactions", transactionsSchema)