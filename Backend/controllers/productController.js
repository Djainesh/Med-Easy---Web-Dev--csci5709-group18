/**
 *
 * @version 1.0
 * @author [Dhruv Soni](dh554152@dal.ca)(Banner ID:-B00867642)
 */

//This API will fetch all the products(Here Medicines) from the database
const product = require("../models/productModel");

const getMedicineRecord = async (req, res) => {
  product
    .find()

    .then((medicineRecord) => {
      res.status(200).json({ success: true, medicineRecord });
    })
    .catch((err) => {
      res.status(400).json({ success: false, message: err });
    });
};

//This API will fetch the  particular product(Here Medicine) based on given productid in params.
const productDisplay = async (req, res) => {
  product
    .findById({ _id: req.params.id })
    .then((medicineRecord) => {
      res.status(200).json({ success: true, medicineRecord });
    })
    .catch((err) => {
      res.status(400).json({ success: false, message: err });
    });
};

const productFetchSpecific = async (req, res) => {

  product.aggregate([{$sample: {size: 10}}]).then((medicineRecord) => {
    res.status(200).json({ success: true, medicineRecord });
  })
  .catch((err) => {
    res.status(400).json({ success: false, message: err });
  });
}

module.exports = { getMedicineRecord, productDisplay, productFetchSpecific};
