// This file will handle connection logic to the Mongo-DB database.

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/task_manager', {
    serverSelectionTimeoutMS: 5000,
}).then(() => {
    console.log('DB connected successfully :)');
}).catch((err) => {
    console.log(`error :- ${err}`);
});

module.exports = {
    mongoose
};

