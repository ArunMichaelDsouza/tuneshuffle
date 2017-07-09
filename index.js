// Tuneshuffle app server code

const express = require('express'),
	color = require('cli-color'),
	constants = require('./lib/constants'),
	path = require('path'),
	app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
  return res.render('index');
})

app.listen(constants.PORT, () => {
	console.log(`${color.blue(constants.APP_NAME)} is running on port : ${color.yellow(constants.PORT)}`);
});