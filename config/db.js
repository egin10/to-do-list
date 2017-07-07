const mongoose = require('mongoose');
const url = 'mongodb://localhost/todolist';

module.exports = {
    connectDB: () => {
        mongoose.connect(url);
    }
}