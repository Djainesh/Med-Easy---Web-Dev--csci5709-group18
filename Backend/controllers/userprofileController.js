/**
 *
 * @version 1.0
 * @author [Aditya Busam] (aditya.busam@dal.ca/ jg469380@dal.ca)
 */

const userModel = require('../models/userModel');

const userDetails = async (req, res) => {
  
    try{
        const userDetails = await userModel.find(
            {
                email: req.params.id
            }
        );
        if (userDetails.length > 0)
        {
            res.status(200).send({
                "success": true,
                "message": "User Found",
                userDetails
            }    
            );
        }else {
            res.status(200).send({
                "success": false,
                "message": "No User Found"
            }    
            );
        }
        
    }catch(err){
        res.status(500).send({
            "success": false,
            "message": "Internal Server Error"
        });
    }
}

const changePassword = async (req, res) => {
    const email = req.body.email;
    const securityQuestion1 = req.body.securityQuestion1;
    const securityQuestion2 = req.body.securityQuestion2;
    const password = req.body.password;
    try{
        const changePassword = await userModel.find(
            {
                email: email
            }
        );
        if (changePassword[0].securityQuestion1 === securityQuestion1 && changePassword[0].securityQuestion2 === securityQuestion2)
        {
            await userModel.updateOne(
                {
                    email : email
                },
                {
                    password: password
                }
            );
            res.status(200).send({
                "success": true,
                "message": "Updated Successfully"
            }    
            );
        }else {
            res.status(200).send({
                "success": false,
                "message": "Invalid security question responses"
            }    
            );
        }
        
    }catch(err){
        res.status(500).send({
            "success": false,
            "message": "Internal Server Error"
        });
    }

}

module.exports = {userDetails, changePassword};