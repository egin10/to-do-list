module.exports = {
  list: function(req, res){
    res.send('List Page');
  },
  addList: function(req, res){
    res.send('Add List Page');
  },
  editList: function(req, res){
    res.send('Edit List Page ' + req.params.id);
  },
}
