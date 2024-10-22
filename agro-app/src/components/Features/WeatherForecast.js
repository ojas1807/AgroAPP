import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherForecast.css'; // Add this CSS file for styling

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/weather`)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setError('Failed to fetch weather data');
      });
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!weatherData) {
    return <div className="loading">Loading...</div>;
  }

  const { name, main, weather, wind } = weatherData;

  // Convert Kelvin to Celsius
  const temperatureCelsius = (main.temp - 273.15).toFixed(2);

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h1 className="city-name">{name}</h1>
        <div className="weather-details">
          <div className="temperature">
            <h2>{temperatureCelsius}°C</h2>
            <p>{weather[0].description}</p>
          </div>
          <img
            className="weather-icon"
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
            alt={weather[0].description}
          />
        </div>
        <div className="additional-info">
          <p>Humidity: <span>{main.humidity}%</span></p>
          <p>Pressure: <span>{main.pressure} hPa</span></p>
          <p>Wind Speed: <span>{wind.speed} m/s</span></p>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
