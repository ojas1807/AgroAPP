// controllers/weatherController.js
const dotenv = require('dotenv');
const axios = require('axios');
const Weather = require('../models/Weather'); // Import the Weather model

dotenv.config();
const getWeatherData = async (req, res) => {
  try {
    const lat = '19.0760'; // Latitude for Mumbai
const lon = '72.8777'; // Longitude for Mumbai

    const apiKey = process.env.WEATHER_API_KEY; // Store API key in .env file
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const response = await axios.get(apiUrl);

    // Save weather data to the database
    // const weatherData = new Weather({
    //   location: response.data.timezone, // You can replace with a more suitable name if needed
    //   lat: response.data.lat,
    //   lon: response.data.lon,
    //   current: {
    //     temperature: response.data.current.temp,
    //     humidity: response.data.current.humidity,
    //     pressure: response.data.current.pressure,
    //     description: response.data.current.weather[0].description,
    //     icon: response.data.current.weather[0].icon,
    //     windSpeed: response.data.current.wind_speed,
    //   },
    //   daily: response.data.daily.map(day => ({
    //     date: new Date(day.dt * 1000), // Convert UNIX timestamp to Date
    //     temperature: {
    //       min: day.temp.min,
    //       max: day.temp.max,
    //     },
    //     humidity: day.humidity,
    //     pressure: day.pressure,
    //     description: day.weather[0].description,
    //     icon: day.weather[0].icon,
    //   })),
    // });

    // Save the weather data to the database
    //await weatherData.save();

    // Send the weather data to the client
    res.json(response.data); 
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};

module.exports = { getWeatherData };
