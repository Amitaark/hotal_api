const express = require('express');
const router = express.Router();

const Person = require('./../models/Person');


router.post("/", async (req, res) => {

  try {

    // Assuming The request body contains data(req.body)
    const data = req.body;

    // create a new person document using Mongoose model
    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log("Data Saved");
    res.status(200).json(response);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" })
  }
})

// Get Person Detail

router.get('/', async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data Fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" })
  }
});

// Fetch data with help of work type 

router.get("/:workType", async (req, res) => {
  const workType = req.params.workType;
  try {
    if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
      const response = await Person.find({ work: workType });
      console.log("response is fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid Work Type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" })
  }
})

// update person data

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
      new: true, // Return Updated document
      runValidators: true // run mongoose validators
    });

    if (!response) {
      return res.status(404).json({ error: "Person Not Found" });
    }
    console.log("data is Updated");
    res.status(200).json(response);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" })
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id; // Extract the person Id from url parameter

    // Assuming you have a person model
    const response = await Person.findByIdAndDelete(personId);

    // comment added

    if (!response) {
      return res.status(404).json({ error: "Person Not Found" });
    }
    console.log("data is Deleted");
    res.status(200).json({ message: "Person Deleted Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" })
  }


})


module.exports = router;