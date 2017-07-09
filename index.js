// Tuneshuffle app server code

const express = require('express'),
	color = require('cli-color'),
	app = express(),
	constants = require('./lib/constants');

app.listen(constants.PORT, () => {
	console.log(`${color.blue(constants.APP_NAME)} is running on port : ${color.yellow(constants.PORT)}`);
});