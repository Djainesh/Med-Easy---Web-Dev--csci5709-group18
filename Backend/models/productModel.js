// @version 1.0 @author [Neelay Goswami](nl339853@dal.ca)

// const express = require("express");
const mongoose = require("mongoose");

//product schema
const productSchema = new mongoose.Schema({
  
  Name: {
    type: String,
    required: true,
  },
  Brands: {
    type: String,
    required: true,
  },
  Dose: {
    type: Number,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  ProductType: {
    type: String,
    required: true,
  },
  ProductDescription: {
    type: String,
    required: true,
  },
  ProductQuantity: {
    type: Number,
    required: true,
  },
  ImageURL: {
    type: String,
  },
});

//creating collections(model is used to create collection)
const Product = new mongoose.model("products", productSchema);

//inserting data manually

module.exports = Product;
