// Tuneshuffle app server code

const express = require('express'),
    color = require('cli-color'),
    constants = require('./lib/constants'),
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    woodlot = require('woodlot').middlewareLogger,
    cookieParser = require('cookie-parser');

// Enable body/cookie parser middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Logger middleware
app.use(woodlot({
    streams: ['./logs/tuneshuffle-server.log'],
    stdout: true,
    format: {
        options: {
            cookies: true,
            headers: true
        }
    }
}));

// Enable api module
require('./lib/api')(app);

// Setup public assets directory and view engine
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Setup app locals
app.locals.constants = constants;

// Setup default route
app.get('/', (req, res) => res.render('index'));

// Run app server on specified port
app.listen(constants.PORT, () => {
    console.log(`${color.blue(constants.APP_TITLE)} is running on port : ${color.yellow(constants.PORT)}`);
});