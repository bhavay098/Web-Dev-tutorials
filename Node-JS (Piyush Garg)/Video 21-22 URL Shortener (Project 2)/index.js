const express = require('express');
const app = express();
const PORT = 8001;
const connectMongoDB = require('./connection');  // importing MongoDB connection file
const URL = require('./models/urlModel');
const urlRoute = require('./routes/urlRouter');  // importing all routes
const path = require('path');  // built-in core module that helps construct, resolve, normalize, and manipulate file paths easily

connectMongoDB('mongodb://127.0.0.1:27017/short-url')  // connecting MongoDB
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log('MongoDB connection failed:', error));

app.set('view engine', 'ejs');  // Setting EJS as the view engine
// app.set is a method in Express.js used to configure settings for your Express application. app.set(settingName, value);
app.set('views', path.resolve('./views'));

app.use(express.json());  // built-in middleware in Express that converts raw unreadable JSON data sent from frontend in a request into a usable object & puts the converted data into req.boy

app.use('/url', urlRoute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(  // findOneAndUpdate is a MongoDB method that lets you find a document that matches a filter, update it, and optionally return the updated document. Model.findOneAndUpdate(filter, update, options)
        { shortId },  // filter
        { $push: { visitHistory: { timeStamp: Date.now() } } }  // MongoDB update operator.
    );  // adding a new object { timestamp: ... } to the array field visitHistory.
    res.redirect(entry.redirectURL);  // .redirect() is a built-in method that causes the browser or client to navigate to a different URL
});

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));