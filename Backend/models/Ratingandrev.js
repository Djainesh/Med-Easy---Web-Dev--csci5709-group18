//Author: jainesh Ketan Desai
//This file will create Mongo schema and define schema for the given table 
var mongoose = require('mongoose');


var ratingandreviewSchema =new mongoose.Schema({
  rating: String,
  review: String,
  productID: String

});

var ratingandreview = mongoose.model('ratingandreview', ratingandreviewSchema);

module.exports = ratingandreview;