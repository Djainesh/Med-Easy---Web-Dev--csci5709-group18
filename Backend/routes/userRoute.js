/**
 *
 * @version 1.0
 * @author [Aditya Busam] (aditya.busam@dal.ca/ jg469380@dal.ca)
 */

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post("/api/v1/register", userController.registerUser);
router.get ("/api/v1/verifyemail/:id", userController.verifyEmail)
router.post ("/api/v1/login", userController.login);
router.post ("/api/v1/forgotpassword", userController.forgotPassword);

module.exports = router;