import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure the path to Home.css is correct

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Agro Assist</h1>
        <nav className="nav">
          {/* <ul>
            <li><Link to="/crop-recommendation">Crop Recommendation</Link></li>
            <li><Link to="/market-analysis">Market Analysis</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/weather-forecast">Weather Forecast</Link></li>
          </ul> */}
        </nav>
      </header>
      
      <section className="features">
        <div className="feature">
          <h2>Crop Recommendation</h2>
          <p>Find the best crops to plant based on your conditions.</p>
        </div>
        <div className="feature">
          <h2>Market Analysis</h2>
          <p>Get insights on current market trends and prices.</p>
        </div>
        <div className="feature">
          <h2>News</h2>
          <p>Stay updated with the latest agricultural news.</p>
        </div>
        <div className="feature">
          <h2>Weather Forecast</h2>
          <p>Check the weather to plan your farming activities.</p>
        </div>
      </section>
      
      <footer className="footer">
        <p>&copy; 2024 Agro App</p>
      </footer>
    </div>
  );
};

export default Home;
