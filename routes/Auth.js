module.exports = {
  isLogin: (req, res, next) => {
    console.log('is Login!');
    next();
  },
}
