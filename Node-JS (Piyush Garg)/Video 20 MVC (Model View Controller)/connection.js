const mongoose = require('mongoose');  // importing mongoose to connect with MongoDB

async function connectMongoDb(url) {
    // Connecting Mongoose to MongoDB
    return mongoose.connect(url);
}

module.exports = {
    connectMongoDb
};