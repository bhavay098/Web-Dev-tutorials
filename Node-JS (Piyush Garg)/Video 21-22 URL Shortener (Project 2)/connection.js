const mongoose = require('mongoose');

function connectMongoDB(url) {  // connecting mongoDB while using try catch to handle errors
    return mongoose.connect(url);
}

module.exports = connectMongoDB;