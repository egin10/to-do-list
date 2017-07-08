const express = require('express'),
  path = require('path'),
  swig = require('swig'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  mongoose = require('mongoose'),
  promise = require('bluebird'),
  database = require('./config/db'),
  app = express();

mongoose.Promise = promise;
mongoose.connect(database.url, { useMongoClient: true });
//check connection if err
mongoose.connection.on('error', () => {
  throw new Error(`Unable to connect to database: ${database.url}`);
});

//============= VIEW ENGINE
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

//============= MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'SuperPower',
  resave: false,
  saveUninitialized: false
}));

//============= ROUTER
const main = require('./routes');
const user = require('./routes/user');

app.use('/', main);
app.use('/user', user);


//============= MIDDLEWARE 404 ROUTE
app.use('*', function (req, res) {
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end('Page Not Found!');
});

const port = process.env.PORT || 8000;
app.listen(port, function (req, res) {
  console.log(`http://localhost:${port}/`);
});
