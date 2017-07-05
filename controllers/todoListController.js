module.exports = {
  list: (req, res) => {
    res.send('List Page');
  },
  addList: (req, res) => {
    res.send('Add List Page');
  },
  editList: (req, res) => {
    res.send('Edit List Page ' + req.params.id);
  },
}
