module.exports = {
  login: (req, res) => {
    res.send('Login Page');
  },
  loginPost: (req, res) => {
    res.send('Login Post');
  },
  logout: (req, res) => {
    res.send('Logout');
  },
}
