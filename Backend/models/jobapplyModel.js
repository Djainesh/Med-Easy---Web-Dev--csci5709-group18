// const express = require("express");
const mongoose = require("mongoose");

//product schema
const jobapplySchema = new mongoose.Schema({
  
  Position: {
    type: String,
    required: true,
  },
  Name:{
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  ContactNo:{
    type: Number,
    required: true,
  },
  Resume: {
    type: String,
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
});

//creating collections(model is used to create collection)
const JobApply = new mongoose.model("jobapplication", jobapplySchema);

//inserting data manually

module.exports = JobApply;
