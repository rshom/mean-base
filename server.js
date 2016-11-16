// server.js

// modules ======================================================
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// we don't pull in mongoose here, because we don't need it in server.js
var mongoose = require('mongoose');


// configuration ================================================

// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080;

// connect to our mongoDB database
// (uncomment after you enter in your own credentials in config/db.js)
//mongoose.connect(db.url);
mongoose.connect('mongodb://127.0.0.1:27017/test'); console.log('Using local database');


// get all data/stuff from body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 


// Routes =======================================================

require('./app/routes')(app); //configure our routes

// start app ====================================================

//startup at http://localhost:8080
app.listen(port);

// let user know
console.log('Listening on port: ' +port);

// expose app
exports = module.exports = app;

