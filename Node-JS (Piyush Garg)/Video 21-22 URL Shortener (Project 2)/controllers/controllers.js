const { nanoid } = require('nanoid');  // importing nanoid module for shortening url characters
const URL = require('../models/urlModel');  // importing URL model

async function generateNewShortURL(req, res) {
    if (!req.body.url) return res.status(400).json({ error: 'url is required' });  // condition check for empty input in body
    const shortID = nanoid(8);  // shortened url of 8 characters created by nanoid

    await URL.create({   // creating new URL in DB
        shortId: shortID,
        redirectURL: req.body.url,
        visitHistory: []
    });

    return res.json({ id: shortID });
};

async function getAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    });
}


module.exports = {
    generateNewShortURL,
    getAnalytics
};