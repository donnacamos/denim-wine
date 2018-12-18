'use strict';

var express = require('express');
var cors = require('cors');
var path = require('path');
var morgan = require('morgan');
var multer = require('multer');
var upload = multer();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
var app = express();

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.post('/upload', upload.single('upfile'), function(req, res){
  res.json(req.file);
});
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));


app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port' + PORT);
});
