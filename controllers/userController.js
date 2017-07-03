module.exports = {
  home: function(req, res){
    res.send('Home Page')
  },
  about: function(req, res){
    res.send('About Page');
  },
  setting: function(req, res){
    res.send('Setting Page');
  },
}
