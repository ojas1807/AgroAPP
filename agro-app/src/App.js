import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Home from './components/Features/Home';
import CropRecommendation from './components/Features/CropRecommendation';
import MarketAnalysis from './components/Features/MarketAnalysis';
import NewsFeature from './components/Features/NewsFeature';
import WeatherForecast from './components/Features/WeatherForecast';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/crop-recommendation" element={<CropRecommendation />} />
        <Route path="/market-analysis" element={<MarketAnalysis />} />
        <Route path="/news" element={<NewsFeature />} />
        <Route path="/weather-forecast" element={<WeatherForecast />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
