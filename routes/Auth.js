module.exports = {
  isLogin: function(req, res, next){
    console.log('is Login!');
    next();
  },
}
