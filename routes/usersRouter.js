const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const { User } = require("../models/user");

router.get('/', (req,res) => {
  User
  .find()
  .then(users => {
    res.json(users);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({error: "something went wrong"});
  });

});  

module.exports = router;