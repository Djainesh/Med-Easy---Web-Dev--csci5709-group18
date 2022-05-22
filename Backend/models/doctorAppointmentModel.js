// /**
//  *
// * @author Saloni Raythatha(sl768578@dal.ca)  (backend model for Doctor's Appointment)
// *
// */

const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Speciality: {
    type: String,
    required: true,
  },
  Background: {
    type: String,
    required: true,
  },
  ImageURL: {
    type: String,
  },
  Gender: {
    type: String,
  },
});

//creating collections(model is used to create collection)
const Doctors = new mongoose.model("doctors", doctorSchema);

//inserting data manually
module.exports = Doctors;
