var express = require('express');
var bodyParser = require('body-parser');

/////////////////////APPLICATION RUN////////////////////
var app = express();
app.use(express.static(__dirname + '/'));
app.listen('9070');
console.log('working on 9070');