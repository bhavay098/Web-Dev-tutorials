const mongoose = require('mongoose');  // importing mongoose

const urlSchema = new mongoose.Schema({
    shortId: { type: String, required: true, unique: true },
    redirectURL: { type: String, required: true },
    visitHistory: [{ timeStamp: { type: Number } }]  // an array of objects containing timestamps of clicks on url
}, { timestamps: true });

const URL = mongoose.model('url', urlSchema);  // creating model

module.exports = URL;  // exporting the model to be used in other files