const mongoose = require('mongoose');
const url = 'mongodb://localhost/todolist';

module.exports = {
    connectDB: () => {
        mongoose.connect(url, err =>{
            if(err){
                console.log(err);
            }
            console.log('Database is Connected ;)');
        });
    }
}