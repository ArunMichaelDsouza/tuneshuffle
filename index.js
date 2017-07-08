// Tuneshuffle app server code

const express = require('express'),
	app = express(),
	constants = require('./lib/constants');

app.listen(constants.PORT, () => {
	console.log(`${constants.APP_NAME} is running on port : ${constants.PORT}`);
});