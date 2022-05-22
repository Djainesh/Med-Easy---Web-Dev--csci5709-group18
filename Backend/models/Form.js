var mongoose = require("mongoose");
var Schemaforform = mongoose.Schema;

var contentSchema = new Schemaforform({
  Topic: String,
  Content: String,
  Status: Number,
});

var Content = mongoose.model("Content", contentSchema);

module.exports = Content;
