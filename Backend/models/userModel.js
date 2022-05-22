/**
 *
 * @version 1.0
 * @author [Aditya Busam] (aditya.busam@dal.ca/ jg469380@dal.ca)
 */

const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  securityQuestion1: { type: String, required: true },
  securityQuestion2: { type: String, required: true },
  password: { type: String, required: true },
  userRole: {type:String, required: true },

  cart: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("user_details", userDetailsSchema);
