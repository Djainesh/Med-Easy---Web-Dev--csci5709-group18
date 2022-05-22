// /**
//  *
// * @author Saloni Raythatha(sl768578@dal.ca)  (backend route for doctor appointment)
// */

const express = require('express');
const doctorAppointmentController = require('../controllers/doctorAppointmentController');

const router = express.Router();

router.get("/doctors/", doctorAppointmentController.fetchDoctorDetails);
router.get("/doctors/:id", doctorAppointmentController.doctorDisplay);

module.exports = router;
