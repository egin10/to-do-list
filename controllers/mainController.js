module.exports = {
  index: (req, res) => {
    res.send(`Index Page`);
  },
  register: (req, res)=>{
    res.send('Register Page');
  },
  registerPost: (req, res)=>{
    res.send('Register new User');
  },
}
