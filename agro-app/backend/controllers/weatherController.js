const dotenv = require('dotenv');
const axios = require('axios');
const Weather = require('../models/Weather'); // Import the Weather model

dotenv.config();
const getWeatherData = async (req, res) => {
  try {
    const lat = '19.2696'; // Latitude for Mumbai
const lon = '73.3709'; // Longitude for Mumbai

    const apiKey = process.env.WEATHER_API_KEY; // Store API key in .env file
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const response = await axios.get(apiUrl);

   
    res.json(response.data); 
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};

module.exports = { getWeatherData };
