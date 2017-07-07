module.exports = {
  // ========= MIDDLEWARE
  isLogin: (req, res, next) => {
    console.log(`is Login!`);
    next();
  },

  // ======= ROUTING
  login: (req, res) => {
    res.send(`Login Page`);
  },
  loginPost: (req, res) => {
    res.send(`Login Post`);
  },
  logout: (req, res) => {
    req.session.destroy(
      (err) => {
      if(err) throw err;

      //redirect to index
      res.send(`You're Log out`);
    });
  },
}
