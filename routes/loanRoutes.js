const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

router.post('/check-eligibility', loanController.checkEligibility);
router.post('/create-loan', loanController.createLoan);
router.get('/:loan_id', loanController.viewLoan);
router.post('/:customer_id/:loan_id/payment', loanController.makePayment);
router.get('/:customer_id/:loan_id/statement', loanController.viewStatement);

module.exports = router;
