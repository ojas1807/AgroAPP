// routes/weatherRoutes.js

const express = require('express');
const router = express.Router();
const { getWeatherData } = require('../controllers/weatherController');

// GET route for fetching weather data
router.get('/', getWeatherData);

module.exports = router;
