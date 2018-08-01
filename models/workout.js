'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const workoutSchema = mongoose.Schema({
	workoutName: String,
	exerciseId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],
	created: {type: Date, default: Date.now},
	date: Date
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = {Workout};