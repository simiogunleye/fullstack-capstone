const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const { Workout } = require("../models/workout");

router.get('/', (req,res) => {
  Workout
  .find()
  .then(workouts => {
    res.json(workouts);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({error: "something went wrong"});
  });
  
});

// post request to create/name workout 
router.post('/', (req,res) => {
  const requiredFields = ['workoutName', 'exercises'];
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }

  Workout
  .create({
    workoutName: req.body.workoutName, 
    exerciseId: req.body.exerciseId,
    created: req.body.created,
    date: req.body.date
  })
  .then(workoutName => res.status(201).json(workoutName))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong' });
    });

});


//put request to update workout name

router.put("/:id", (req, res) => {
  const requiredFields = ['id','workoutName', 'exercises', 'created'];
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }
  if (req.params.id !== req.body.id) {
    const message = `Request path id (${
      req.params.id
    }) and request body id ``(${req.body.id}) must match`;
    console.error(message);
    return res.status(400).send(message);
  }
  console.log(`Updating workout with id \`${req.params.id}\``);
  Workout.update({
    id: req.params.id,
    workoutName: req.body.workoutName,
    created: req.body.created,
    date: req.body.date,
  });
  res.status(204).end();
});


//delete endpoint 

router.delete("/:id", (req, res) => {
  Workout.delete(req.params.id);
  console.log(`Deleted blog post with id \`${req.params.ID}\``);
  res.status(204).end();
});

module.exports = router; 