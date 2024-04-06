const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  age: Number,
  monthly_income: Number,
  phone_number: Number
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
