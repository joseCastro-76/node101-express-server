// import files and packages up here
const express = require('express');
const morgan = require('morgan');
const data = require('./data');
// create your express server below
var app = express();

// add your routes and middleware below
app.use(morgan('dev'));

app.get('/',(req, res) => res.status(200).type('html').send(req.body));
app.get('/data', (req, res) => res.send(data));
// finally export the express application
module.exports = app;
