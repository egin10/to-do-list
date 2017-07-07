const mongo = require('./../config/db');

mongo.connectDB;

module.exports = {
  home: (req, res) => {
    res.send(`Home Page`)
  },
  about: (req, res) => {
    res.send(`About Page`);
  },
  setting: (req, res) => {
    res.send(`Setting Page`);
  },
}
