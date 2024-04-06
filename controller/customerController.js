const Customer = require('../models/Customer');

exports.registerCustomer = async (req, res, next) => {
  try {
    const { first_name, last_name, age, monthly_income, phone_number } = req.body;
    // Validate input
    // Create a new customer
    const newCustomer = await Customer.create({
      first_name,
      last_name,
      age,
      monthly_income,
      phone_number
    });
    res.status(201).json(newCustomer);
  } catch (err) {
    next(err);
  }
};
