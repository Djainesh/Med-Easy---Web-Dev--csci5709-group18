/**
 *
 * @version 1.0
 * @author [Dhruv Soni](dh554152@dal.ca)(BannerID:-B00867642)
 */

//API Flow control for add to cart functionality
const express = require("express");
const updateController = require("../controllers/updateCartController");

const router = express.Router();
router.get("/api/v1/getCartItems/:email", updateController.cartItems);
router.put("/api/v1/AddtoCart", updateController.addCart);
router.put(
  "/api/v1/updateCartItems/:productID",
  updateController.updateCartItems
);
router.put(
  "/api/v1/decreaseCartItems/:productID",
  updateController.decreaseCartItems
);
router.put(
  "/api/v1/removeCartItem/:productID",
  updateController.removeCartItems
);

module.exports = router;
