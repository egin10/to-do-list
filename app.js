const express = require('express');
const path = require('path');
const swig = require('swig');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

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
const main = require('./routes');
const user = require('./routes/user');

app.use('/', main);
app.use('/user', user);


//============= MIDDLEWARE 404 ROUTE
app.use('*', function(req, res){
  res.writeHead(404, {"Content-Type":"text/html"});
  res.end('Page Not Found!');
});

const port = process.env.PORT || 8000;
app.listen(port, function(req, res){
  console.log(`http://localhost:${port}/`);
});
