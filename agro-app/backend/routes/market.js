const express = require('express');
const { getMarketData, getMarketTrends } = require('../controllers/marketController'); // Ensure you import your controller functions
const router = express.Router();

// Route to get all market data
router.get('/', getMarketData);  // Fetch all market data

// Route to get market trends based on region and crop
router.get('/trends', getMarketTrends);  // Fetch market trends by region and crop

module.exports = router;