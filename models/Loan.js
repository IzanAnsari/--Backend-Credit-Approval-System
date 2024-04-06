const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  loan_amount: Number,
  tenure: Number,
  interest_rate: Number
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
