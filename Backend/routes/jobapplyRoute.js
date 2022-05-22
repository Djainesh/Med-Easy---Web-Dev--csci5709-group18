// @version 1.0 @author [Neelay Goswami](nl339853@dal.ca)

const express = require("express");
const router = new express.Router();
const JobApply = require("../models/jobapplyModel");

// Api for adding new Career Oppurtunities
router.post("/application", async (req, res) => {
  try {
    const addingApplication = new JobApply(req.body);
    console.log(req.body);
    const insertApplication = await addingApplication.save();
    res.send(insertApplication);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Api for getting all the past entered Careers Oppurtunities in the database
router.get("/joblist", async (req, res) => {
  try {
    const joblist = await JobApply.find({});

    res.send(joblist);
  } catch (e) {
    res.status(400).send(e);
  }
});

// retrieving a specific Career Posting Detail from DB
router.get("/joblist/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const joblistun = await JobApply.findById(_id);
    res.send(joblistun);
  } catch (e) {
    res.status(400).send(e);
  }
});

//api for updating Career Information in the database
// router.patch("/careerlist/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const cr = await Career.findByIdAndUpdate(_id, req.body, { new: true });
//     res.send(cr);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

// deleting a specific data
// router.delete("/careerlist/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const jobdelete = await Career.findByIdAndDelete(_id);
//     res.send(jobdelete);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

// router.get("/", async (req, res) => {
//   res.send("Hello there!!");
// });

module.exports = router;
