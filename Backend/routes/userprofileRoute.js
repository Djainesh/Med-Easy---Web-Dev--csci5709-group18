/**
 *
 * @version 1.0
 * @author [Aditya Busam] (aditya.busam@dal.ca/ jg469380@dal.ca)
 */

const express = require('express');
const userController = require('../controllers/userprofileController');
const AuthenticateUser = require('../middleware/authenticateUser')

const router = express.Router();

router.post("/api/v1/changepassword", AuthenticateUser.verifyJWT, userController.changePassword);
router.get ("/api/v1/getuserdetails/:id", AuthenticateUser.verifyJWT, userController.userDetails)

module.exports = router;