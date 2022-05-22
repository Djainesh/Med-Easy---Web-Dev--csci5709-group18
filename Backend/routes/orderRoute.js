/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */


const express = require('express');
const orderController = require('../controllers/orderController');




const router = express.Router();

router.post("/api/v1/order/createNewOrder", orderController.createNewOrder);

router.get("/api/v1/orders/:userEmail", orderController.userOrderDetails);

module.exports = router;
