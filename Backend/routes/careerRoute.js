// @version 1.0 @author [Neelay Goswami](nl339853@dal.ca)

const express = require("express");
const router = new express.Router();
const Career = require("../models/careerModel");

// Api for adding new Career Oppurtunities
router.post("/addcareer", async (req, res) => {
  try {
    const addingCareer = new Career(req.body);
    console.log(req.body);
    const insertCareer = await addingCareer.save();
    res.send(insertCareer);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Api for getting all the past entered Careers Oppurtunities in the database
router.get("/careerlist", async (req, res) => {
  try {
    const joblist = await Career.find({});

    res.send(joblist);
  } catch (e) {
    res.status(400).send(e);
  }
});

// retrieving a specific Career Posting Detail from DB
router.get("/careerlist/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const joblistunique = await Career.findById(_id);
    res.send(joblistunique);
  } catch (e) {
    res.status(400).send(e);
  }
});

//api for updating Career Information in the database
router.patch("/careerlist/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const cr = await Career.findByIdAndUpdate(_id, req.body, { new: true });
    res.send(cr);
  } catch (e) {
    res.status(500).send(e);
  }
});

// deleting a specific data
router.delete("/careerlist/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const jobdelete = await Career.findByIdAndDelete(_id);
    res.send(jobdelete);
  } catch (e) {
    res.status(500).send(e);
  }
});

// router.get("/", async (req, res) => {
//   res.send("Hello there!!");
// });

module.exports = router;
