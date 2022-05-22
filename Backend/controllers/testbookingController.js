
const testLabModel = require('../models/testBookingModel');

const fetchTestLab = async (req, res) => {

    try{
        const testLabs = await testLabModel.find();
        res.status(200).send({
            "success": true,
            testLabs
        });
    }catch(err){
        console.log(err);
    }
}

module.exports = {fetchTestLab};