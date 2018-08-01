'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const userSchema = mongoose.Schema({
	name: String,
	password: String,
	workoutsId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }]
});

const User = mongoose.model('User', userSchema);

module.exports = {User};