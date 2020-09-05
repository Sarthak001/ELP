var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var urlEncodedParser = bodyParser.urlencoded({extended: false});

mongoose.connect('mongodb://localhost/practice', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

mongoose.connection.once('open', function() {
  console.log('Connection Successful');
}).on('error', function() {
  console.log('Connection Failed', error);
});

var app = express();

app.use('/asset', express.static('asset'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('home', {page:"landing"});
});

app.get('/allCourses', function(req, res) {
  res.render('home', {page: "allCourses"});
});

app.get('/login', function(req, res) {
  res.render('loginSignUp');
});

app.post('/signup', urlEncodedParser, function(req, res) {
  console.log(req.body.name);
    res.send('email');
});

app.listen(3000);
