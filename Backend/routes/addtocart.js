/**
 *
 * @version 1.0
 * @author [Dhruv Soni](dh554152@dal.ca)(Banner ID:-B00867642)
 */

//API Flow control for add to cart functionality
const express = require("express");
const addToCartController = require("../controllers/addtocartController");

const router = express.Router();
router.put("/api/v1/AddtoCart", addToCartController.addCart);

module.exports = router;
