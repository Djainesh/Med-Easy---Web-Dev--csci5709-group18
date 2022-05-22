const express = require('express');
const router  = express.Router();
const testBookingController = require('../controllers/testbookingController');

router.get("/api/v1/labs/fetchDetails",testBookingController.fetchTestLab);



module.exports = router;

