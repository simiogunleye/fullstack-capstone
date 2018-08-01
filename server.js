'use strict';

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const exercisesRouter = require('./routes/exercisesRouter');
const workoutsRouter = require('./routes/workoutsRouter');
const usersRouter = require('./routes/usersRouter');

const { DATABASE_URL, PORT } = require('./config');

const { Exercise } = require('./models/exercise');
const { Workout } = require('./models/workout');
const { User } = require('./models/user');

const app = express();
app.use(morgan('common'));
app.use(express.json());
app.use(express.static('public'));


//Routes
app.use('/api/exercises', exercisesRouter);
app.use('/api/workouts', workoutsRouter);
app.use('/api/signup', usersRouter);







// both runServer and closeServer need to access the same
// server object, so we declare `server` here, and then when
// runServer runs, it assigns a value.
let server;

function runServer(DATABASE_URL, port = PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(DATABASE_URL, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
        .on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}


// like `runServer`, this function also needs to return a promise.
// `server.close` does not return a promise on its own, so we manually
// create one.
function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}


// if server.js is called directly (aka, with `node server.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = {app, runServer, closeServer};



//app.listen(process.env.PORT || 8080);
 

