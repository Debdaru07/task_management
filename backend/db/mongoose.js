// This file will handle connection logic to the Mongo-DB database.

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/task_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connected successfully :)');
}).catch((err) => {
    console.log(`error :- ${err}`);
});

module.exports = {
    mongoose
};

