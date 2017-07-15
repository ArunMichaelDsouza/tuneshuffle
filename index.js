// Tuneshuffle app server code

const express = require('express'),
    color = require('cli-color'),
    constants = require('./lib/constants'),
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser');

// Enable api module
require('./lib/api')(app);

// Setup body parser for express requests
app.use(bodyParser.urlencoded({ extended: false }));

// Setup public assets directory and view engine
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Setup app locals
app.locals.constants = constants;

// Setup default route
app.get('/', (req, res) => res.render('index'));

// Setup app server on specified port
app.listen(constants.PORT, () => {
    console.log(`${color.blue(constants.APP_TITLE)} is running on port : ${color.yellow(constants.PORT)}`);
});