// /**
//  *
// * @author Saloni Raythatha(sl768578@dal.ca)  (backend route for Search, Filter and Display)
// *
// */

const express = require('express');
const searchController = require('../controllers/searchController');

const router = express.Router();

router.get("/products/:name", searchController.fetchProductDetails)

module.exports = router;