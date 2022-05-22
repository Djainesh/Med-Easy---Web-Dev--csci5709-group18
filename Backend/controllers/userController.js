/**
 *
 * @version 1.0
 * @author [Aditya Busam] (aditya.busam@dal.ca/ jg469380@dal.ca)
 */

const userModel = require('../models/userModel');
const constants = require('../constants/Constants');
const jwt = require('jsonwebtoken');

const registerUser =  async (req, res) =>
{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const address =  req.body.address;
    const securityQuestion1 = req.body.securityQuestion1;
    const securityQuestion2 =  req.body.securityQuestion2;
    const password =  req.body.password;
    const userRole = req.body.userRole;
    
    try{
        const user = await userModel.create(
            {
                firstName,
                lastName,
                email,
                phoneNumber,
                address,
                securityQuestion1,
                securityQuestion2,
                password,
                userRole
            }
        );
        res.status(201).send({
            "success": true,
            "message": "User Created Successfully"
        }    
        );
    }catch(err){
        res.status(500).send({
            "success": false,
            "message": "Internal Server Error"
        });
    }
}

const verifyEmail = async (req, res) => {
    try{
        const verifyEmail = await userModel.find(
            {
                email: req.params.id
            }
        );
        if (verifyEmail.length === 0)
        {
            res.status(200).send({
                "success": false,
                "message": "No User Found"
            }    
            );
        }else{
            res.status(200).send({
                "success": true,
                "message": "User Found"
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

    const login = async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        try{
            const login = await userModel.find(
                {
                    email: email
                }
            );
            if (login[0].email === email && login[0].password === password)
            {
                const id = login[0].email;
                const role = login[0].userRole;
                const token = jwt.sign({id}, constants.JWTSECRET, {
                    expiresIn: 1000,
                });

                res.status(200).send({
                    "success": true,
                    "message": "User Found",
                    "token": token, 
                    email,
                    role
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

const forgotPassword = async (req, res) => {
    const email = req.body.email;
    const securityQuestion1 = req.body.securityQuestion1;
    const securityQuestion2 = req.body.securityQuestion2;
    const password = req.body.password;
    try{
        const forgotPassword = await userModel.find(
            {
                email: email
            }
        );
        if (forgotPassword[0].securityQuestion1 === securityQuestion1 && forgotPassword[0].securityQuestion2 === securityQuestion2)
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
                "message": "Check email or security question responses"
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

module.exports = {registerUser, verifyEmail, login, forgotPassword};
