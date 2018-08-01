'use strict'

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const exerciseSchema = mongoose.Schema({
	name: String,
	description: String
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = {Exercise};


