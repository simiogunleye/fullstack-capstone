const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const { Exercise } = require("../models/exercise");

router.get('/', (req,res) => {
  Exercise
  .find()
  .then(exercises => {
    res.json(exercises);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({error: "something went wrong"});
  });
  
});


module.exports = router;