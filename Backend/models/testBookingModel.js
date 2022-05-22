const mongoose = require('mongoose');


const testingLab = new mongoose.Schema({
    labName: {type: String, required: true},
    lastCharges:  {type: Number, required: true},
    labAddress: {type: String, required: true},
    labImage: {type: String, required: true}
});


module.exports = mongoose.model("testing_labs",testingLab);