// @version 1.0 @author [Neelay Goswami](nl339853@dal.ca)

const express = require("express");
const router = new express.Router();
const Product = require("../models/productModel");
// const AuthenticateUser = require('../middleware/authenticateUser')

// Api for adding new Products
router.post("/products", async (req, res) => {
  try {
    const addingProducts = new Product(req.body);
    console.log(req.body);
    const insertProducts = await addingProducts.save();
    res.send(insertProducts);
  } catch (e) {
    res.status(400).send(e);
  }
});

// api for getting all the products in the database
router.get("/productlist", async (req, res) => {
  try {
    const prodlist = await Product.find({});
    res.send(prodlist);
  } catch (e) {
    res.status(400).send(e);
  }
});

// retrieving a specific product from DB
router.get("/productlist/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const prodlistunique = await Product.findById(_id);
    // const prodlistunique = await Product.findById({ productname: name });
    // if (!prodlistunique) res.status(404).json("The product not found");
    res.send(prodlistunique);
  } catch (e) {
    res.status(400).send(e);
  }
});

//api for updating product in the database
router.patch("/productlist/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const pd = await Product.findByIdAndUpdate(_id, req.body, { new: true });
    // if (!pd) res.json("The product not found");
    res.send(pd);
  } catch (e) {
    res.status(500).send(e);
  }
});

// deleting a specific data
router.delete("/productlist/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const proddelete = await Product.findByIdAndDelete(_id);
    // if (!proddelete) res.status(404).json("The product not found");
    res.send(proddelete);
  } catch (e) {
    res.status(500).send(e);
  }
});

// router.get("/", async (req, res) => {
//   res.send("Hello there!!");
// });

module.exports = router;
