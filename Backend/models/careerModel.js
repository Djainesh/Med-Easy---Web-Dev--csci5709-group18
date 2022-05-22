// const express = require("express");
const mongoose = require("mongoose");

//product schema
const careerSchema = new mongoose.Schema({
  
  Position: {
    type: String,
    required: true,
  },
  Pay: {
    type: Number,
    required: true,
  },
  Hours: {
    type: Number,
    required: true,
  },
  Experience: {
    type: String,
    required: true,
  },
  Education: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});

//creating collections(model is used to create collection)
const Career = new mongoose.model("career", careerSchema);

//inserting data manually

module.exports = Career;
