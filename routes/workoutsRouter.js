const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


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
router.put('/:id', (req, res) => {
  if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
    res.status(400).json({
      error: 'Request path id and request body id values must match'
    });
  }

  const updated = {};
  const updateableFields = ['exercises'];
  updateableFields.forEach(field => {
    if (field in req.body) {
      updated[field] = req.body[field];
    }
  });

  Workout
    .findByIdAndUpdate(req.params.id, { $set: updated })
    .then(updatedPost => res.status(204).end())
    .catch(err => res.status(500).json({ message: 'Something went wrong' }));
});

//delete endpoint 
router.delete('/:id', (req, res) => {
  Workout
    .findByIdAndRemove(req.params.id)
    .then(() => {
      console.log(`Deleted blog post with id \`${req.params.id}\``);
      res.status(204).end();
    });
});


module.exports = router; 