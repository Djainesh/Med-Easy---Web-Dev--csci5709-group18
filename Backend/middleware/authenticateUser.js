/**
 *
 * @version 1.0
 * @author [Aditya Busam] (aditya.busam@dal.ca/ jg469380@dal.ca)
 */

const jwt = require("jsonwebtoken");
const constants = require("../constants/Constants");

exports.verifyJWT = (req, res, next) => {
    const token = req.headers.token;
  
    if (!token) {
      res.send({
        success: false,
        message: "401 User unauthorised",
      });
    } else {
      jwt.verify(token, constants.JWTSECRET, (err, decoded) => {
        if (err) {
          res.send({
            success: false,
            status: 401,
            message: "401 User unauthorised",
          });
        } else {
          next();
        }
      });
    }
  };