/**
 * Author: Jainesh Ketan Desai[B00885171]
 * Mail: jainesh@dal.ca
 * This file is responsible for the handle API call for the feautre named Rating and Review
 */

const express = require("express");
const http = require("http");
require("../db/connect");
require("../models/Ratingandrev");
const bodyParser = require("body-parser");
const ratingandreview = require("../models/Ratingandrev");
const Content = require("../models/Form");
const AuthenticateUser = require("../middleware/authenticateUser");

const rating = new express.Router();

rating.use(bodyParser.json());

/**
 * The below post API is responsible for inserting the rating and review data posted by the user to the mongodDB
 *  
 */
rating.post("/postratingandreview", AuthenticateUser.verifyJWT, (req, res) => {
  console.log("SERVER!!!!!");
  const user = new ratingandreview(req.body);
  console.log("Inside request");
  user
    .save()
    .then(() => {

      res
        .status(200)
        .json({ success: "true", message: "data inserted succesfull" });
    })
    .catch((err) => {
      
      res.status(500).json({ message: "internal server error" });
    });

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
  res.setHeader("Access-Control-Max-Age", "3600");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Accept, X-Requested-With, Authorization"
  );

  res.send("this is from student");
});

/**
 * The Get API is responsible for getting the data of review and rating posted by other user to the front-end
 */
rating.get("/reviewandrating/:id", async (req, res) => {
  
  try {
    const datafrommongo = await ratingandreview.find();
   
    let productid = req.params.id;
   
    let reviewandprodct = [];
    for (let i = 0; i < datafrommongo.length; i++) {
      if (productid === datafrommongo[i].productID) {
        reviewandprodct.push(datafrommongo[i]);
      }
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    res.setHeader("Access-Control-Max-Age", "3600");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Accept, X-Requested-With, Authorization"
    );
    //console.log(reviewandprodct);
    res.status(200).json({
      success: "true",
      message: "data succesfull retrived",
      data: reviewandprodct,
    });
  
  } catch (e) {
   
     res.status(500).json({ message: "internal server error" });
  }
});

module.exports = rating;
