const express = require('express');  // importing express
const router = express.Router();
const { generateNewShortURL, getAnalytics } = require('../controllers/controllers');  // importing req handlers file (controllers)

router.post('/', generateNewShortURL);

router.get('/analytics/:shortId', getAnalytics);

module.exports = router;