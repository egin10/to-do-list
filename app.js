var express = require('express');
var path = require('path');
var swig = require('swig');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

//============= VIEW ENGINE
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

//============= MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(session({
  secret : 'SuperPower',
  resave : false,
  saveUninitialized : false
}));

//============= ROUTER
var main = require('./routes');
var user = require('./routes/user');

app.use('/', main);
app.use('/user', user);


//============= MIDDLEWARE 404 ROUTE
app.use('*', function(req, res){
  res.writeHead(404, {"Content-Type":"text/html"});
  res.end('Page Not Found!');
});

var port = process.env.PORT || 8000;
app.listen(port, function(req, res){
  console.log('http://localhost:'+port+'/');
});
