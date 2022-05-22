
// /**
//  *
// * @author Saloni Raythatha (sl768578@dal.ca) (Banner ID - B00883060)  (backend controller for Search, Filter and Display)
// *
// */

// GET API for getting data
const { MongoClient } = require('mongodb');
const express = require("express");
const productModel = require('../models/productModel');


// to get all the order details for the user
const fetchProductDetails = async (req,res) => {
    try{
        const productNameregex = new RegExp(req.params.name, 'i');
        const searchDetails = await productModel.find({Name:productNameregex});
        console.log(334)
        console.log(searchDetails)
        res.status(200).json({success: "true", response: searchDetails}); 
    }catch(err){
        console.log(err);
    }
}
module.exports = {fetchProductDetails};