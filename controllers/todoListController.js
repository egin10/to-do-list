const mongo = require('./../config/db');

mongo.connectDB;

module.exports = {
  list: (req, res) => {
    res.send(`List Page`);
  },
  addList: (req, res) => {
    res.send(`Add List Page`);
  },
  addListPost: (req, res) => {
    res.send(`You're Add New List Page`);
  },
  editList: (req, res) => {
    res.send(`Edit List Page ${req.params.id}`);
  },
  editListPost: (req, res) => {
    res.send(`You're Edit List Page`);
  },
  delete: (req, res) => {
    res.send(`You're Delete List Page ${req.params.id}`);
  },
}
