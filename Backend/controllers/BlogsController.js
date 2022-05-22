/**
 * Author: Jainesh Ketan Desai [B00885171]
 * Mail: Jainesh@dal.ca
 * The current file is BlogController and this file is responsible for making connection of the database and
 * handling API request.This is file is mainly used for the Blog feature where it used for getting data from the user for the blog and showing the content to admin side for the verification and after verification blog are been display to the end user.
 */
const express = require("express");
const http = require("http");
require("../db/connect");
const bodyParser = require("body-parser");
const Content = require("../models/Form");
const blog = new express.Router();

blog.use(bodyParser.json());
/**
 * The below Post API is used for posting data from the user to mongoDB for the feature blog
 */
blog.post("/postfromuser", (req, res) => {
  console.log("SERVER!!!!!");
  const userofpost = new Content(req.body);

  userofpost
    .save()
    .then(() => {
      res
        .status(200)
        .json({ success: "true", message: "data inserted succesfull" });
    })
    .catch((err) => {
      res.status(500).json({ message: "internal server error" });
    });
});

/**
 * The below Get is responsible for getting the blog data from the mongo database
 */
blog.get("/fromdata", async (req, res) => {
  console.log("This");
  try {
    const datafrommongo = await Content.find();

    res.status(200).json({
      success: "true",
      message: "data succesfull retrived",
      data: datafrommongo,
    });
  } catch (e) {
    res.status(500).json({ message: "internal server error" });
  }
});

/**
 * Below Post API is responsible for updating the status coloumn in the Content table present in MongoDb
 */
blog.post("/updateForm", async (req, res) => {
  try {
    await Content.findByIdAndUpdate(req.body._id, {
      ...req.body,
    });
    res.json({ ...req.body });
  } catch (e) {
    res.send(e);
  }
});
/**
 * The below Get API is reponsible for return data from the content table where status value is 1
 */
blog.get("/formstatus", async (req, res) => {
 
  try {
    const datafrom = await Content.find();

    let review = [];
    for (let i = 0; i < datafrom.length; i++) {
      if (datafrom[i].Status === 1) {
        await review.push(datafrom[i]);
      }
    }

   
     res.status(200).json({
       success: "true",
       message: "data succesfull retrived",
       data: review,
     });

  } catch (e) {
     res.status(500).json({ message: "internal server error" });
  }
});

module.exports = blog;
