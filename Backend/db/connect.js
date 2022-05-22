/**
 *
 * @version 1.0
 * @author [Chandan Shukla](chandan.shukla@dal.ca)
 */

const mongoose = require('mongoose');



const connectDB = (uri) => {
    return mongoose.connect(uri)
    .then((result) => {
        console.log("connected to the database",result);
    }).catch((err) => {
        console.log(err);
    })
};

module.exports = connectDB;