// /**
//  *
// * @author Saloni Raythatha (sl768578@dal.ca) (Banner ID - B00883060) (backend controller for Doctor's Appointment)
// *
// */

// GET API for getting data all the doctors details
const { MongoClient } = require('mongodb');
const express = require("express");
const doctorAppointmentModel = require('../models/doctorAppointmentModel');

const fetchDoctorDetails = async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    doctorAppointmentModel
      .find()
  
      .then((doctorRecord) => {
        res.status(200).json({ success: true, doctorRecord });
      })
      .catch((err) => {
        res.status(400).json({ success: false, message: err });
      });
  };

// GET API for getting data all the doctors by doctor id

  const doctorDisplay = async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    doctorAppointmentModel
    .findById({ _id: req.params.id })
    .then((doctorRecord) => {
      res.status(200).json({ success: true, doctorRecord });
    })
      .catch((err) => {
        res.status(400).json({ success: false, message: err });
      });
  };
module.exports = {fetchDoctorDetails, doctorDisplay};
