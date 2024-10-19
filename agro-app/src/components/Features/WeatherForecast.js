import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import dotenv from 'dotenv';

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
//   dotenv.config();
//   URL = process.env.url

  useEffect(() => {
    // Fetch the weather data from the backend API
    axios.get(`http://localhost:5000/api/weather`)
      .then(response => {
        setWeatherData(response.data);
        // window.location.href = "/weatherForecast";

      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setError('Failed to fetch weather data');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  // Destructure necessary data
  const { name, main, weather, wind } = weatherData;

  return (
    <div>
      <h1>Weather Forecast for {name}</h1>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Pressure: {main.pressure} hPa</p>
      <p>Weather: {weather[0].description}</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <img 
        src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} 
        alt={weather[0].description}
      />
    </div>
  );
};

export default WeatherForecast;
