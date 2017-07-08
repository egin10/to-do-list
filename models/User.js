const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define Schema of users
let userSchema = new Schema({
    username: String,
    password: String,
});

// mongoose.model('collections', Obj Schema)
let user = mongoose.model('users', userSchema);

module.exports = user;