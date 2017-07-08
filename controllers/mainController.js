const User = require('./../models/User');

module.exports = {
  index: (req, res) => {
    res.send(`Index Page`);
  },
  register: (req, res) => {
    res.send('Register Page');
  },
  registerPost: (req, res) => {
    let newUser = new User({
      username: req.body.username,
      password: req.body.password
    });

    newUser.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ "status": 200, "message": "Success" });
    });
  },
}
