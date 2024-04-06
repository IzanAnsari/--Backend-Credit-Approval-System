const express = require('express');
const router = express.Router();
const customerRoutes = require('./customerRoutes');
const loanRoutes = require('./loanRoutes');

router.use('/customers', customerRoutes);
router.use('/loans', loanRoutes);

module.exports = router;
