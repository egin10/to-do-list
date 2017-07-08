const User = require('./../models/User');

module.exports = {
  home: (req, res) => {
    res.send(`Home Page`)
  },
  about: (req, res) => {
    res.send(`About Page`);
  },
  setting: (req, res) => {
    User.find({ "username": req.params.user }, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        if (data == "") {
          res.send(`Who's you want to see ?`);
        } else {
          res.json(data);
        }
      }
    });
  },
  settingPost: (req, res) => {
    User.update({ "username": req.body.username },
      { "password": req.body.password }, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          // res.json(data);
          res.json({"status": 200, "message": "Success"});
        }
      });
  },
}
