/**
 *
 * @version 1.0
 * @author [Dhruv Soni](dh554152@dal.ca)(BannerID:-B00867642)
 */

//API Flow control for productDisplay  functionality
const AuthenticateUser = require("../middleware/authenticateUser");
const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();
router.get("/api/v1/Products", productController.getMedicineRecord);
router.get("/api/v1/Products/number", productController.productFetchSpecific);
router.get("/api/v1/Products/:id", productController.productDisplay);


module.exports = router;
