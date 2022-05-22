// @version 1.0 @author [Neelay Goswami](nl339853@dal.ca)

//const user=require("./user");
const mongoose = require("mongoose");

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

  ImageURL: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
