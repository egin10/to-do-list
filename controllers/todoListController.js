const Todolist = require('./../models/Todolist');

module.exports = {
  list: (req, res) => {
    Todolist.find({ "user": req.params.user }, // temporary (just for test) id_user
      (err, data) => {
        if (err) {
          res.send(err)
        } else {
          res.json(data);
        }
      })
  },
  addList: (req, res) => {
    res.send(`Add List Page`);
  },
  addListPost: (req, res) => {
    let newTodo = new Todolist({
      user: req.body.user, // temporary (just for test) id_user
      todoName: req.body.eventName,
      desc: req.body.desc,
      date: Date.now()
    });

    // save it
    newTodo.save((err, data) => {
      if (err) {
        res.send(err)
      } else {
        // res.json(data);
        res.json({ "status": 200, "message": "Success" });
      }
    });
  },
  editList: (req, res) => {
    Todolist.find({ "_id": req.params.id },
      (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.json(data);
        }
      });
  },
  editListPost: (req, res) => {
    Todolist.update({ "_id": req.params.id }, // temporary (just for test) id_user
      { todoName: req.body.eventName, desc: req.body.desc },
      (err, data) => {
        if (err) {
          res.send(err);
        } else {
          // res.json(data);
          res.json({ "status": 200, "message": "Success" });
        }
      });
  },
  delete: (req, res) => {
    Todolist.find({ "_id": req.params.id }, (err, data) => {
      if (data == "") {
        res.send('Data is Gone for along time ago!');
      } else {
        Todolist.remove({ "_id": req.params.id },
          (err, data) => {
            if (err) {
              res.send(err);
            } else {
              // res.json(data);
              res.json({ "status": 200, "message": "Success" });
            }
          });
      }
    });
  },
}
