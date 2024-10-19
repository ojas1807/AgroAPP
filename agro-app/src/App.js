// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './components/Auth/Login';
// import Signup from './components/Auth/Signup';
// import Home from './components/Features/Home';
// import CropRecommendation from './components/Features/CropRecommendation';
// import MarketAnalysis from './components/Features/MarketAnalysis';
// import NewsFeature from './components/Features/NewsFeature';
// import WeatherForecast from './components/Features/WeatherForecast';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/crop-recommendation" element={<CropRecommendation />} />
//         <Route path="/market-analysis" element={<MarketAnalysis />} />
//         <Route path="/news" element={<NewsFeature />} />
//         <Route path="/weather-forecast" element={<WeatherForecast />} />
//         <Route path="/" element={<Navigate to="/login" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
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

  // Handling login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // Send login data to backend
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Login Success:', data);
        window.location.href = '/home';  // Redirect to home page after successful login
      })
      .catch((error) => {
        console.error('Login Error:', error);
      });
  };

  // Handling signup form submission
  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    // Send signup data to backend
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Signup Success:', data);
        window.location.href = '/login';  // Redirect to login after signup
      })
      .catch((error) => {
        console.error('Signup Error:', error);
      });
  };

  // Handling logout
  const handleLogout = () => {
    console.log('Logout successful');
    window.location.href = '/login';  // Redirect to login page
  };

  // Handling forgot password
  const handleForgotPassword = () => {
    console.log('Forgot password logic');
    // Implement forgot password functionality here
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} onForgotPassword={handleForgotPassword} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/home" element={<Home onLogout={handleLogout} />} />
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
