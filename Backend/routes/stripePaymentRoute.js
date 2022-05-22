/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */

const express = require('express');

const stripePaymentController = require('../controllers/stripePaymentController');






const router = express.Router();


router.post('/api/v1/checkout/payment/create-checkout-session', stripePaymentController.createCheckoutSession);

module.exports = router;