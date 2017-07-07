const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Define Shcema of todo
let todoSchema = new Schema({
    user: String,
    todoName: String,
    desc: String,
    date: Date
});

//Define model of todo
// mongoose.model('collection', Obj Schema)
let todo = mongoose.model('dotos', todoSchema);

module.exports = todo;