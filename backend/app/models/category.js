const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  allocatedFunds: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  totalSpent: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  //maybe add the user's foreign key here
});

module.exports = mongoose.model()