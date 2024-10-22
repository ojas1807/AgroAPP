
// // // import React from 'react';
// // // import './Home.css';

// // // const Home = () => {
// // //   return (
// // //     <div className="home-container">
// // //       {/* Header Section */}
// // //       <header className="header">
// // //         <h1>Agro Assist</h1>
// // //         <nav className="nav">
// // //           <a href="#about">About Us</a>
// // //           <a href="#how-it-works">How It Works</a>
// // //           <a href="#testimonials">Testimonials</a>
// // //           <a href="#contact">Contact Us</a>
// // //         </nav>
// // //       </header>

// // //       {/* Features Section */}
// // //       <section className="features">
// // //         <h2 className="features-title">Our Key Features</h2>
// // //         <div className="feature">
// // //           <div className="feature-icon">🌱</div>
// // //           <h3>Crop Recommendation</h3>
// // //           <p>Find the best crops to plant based on your conditions, ensuring optimal growth and yield.</p>
// // //         </div>
// // //         <div className="feature">
// // //           <div className="feature-icon">📈</div>
// // //           <h3>Market Analysis</h3>
// // //           <p>Get insights on current market trends and prices to make informed decisions.</p>
// // //         </div>
// // //         <div className="feature">
// // //           <div className="feature-icon">📰</div>
// // //           <h3>News</h3>
// // //           <p>Stay updated with the latest agricultural news, innovations, and best practices.</p>
// // //         </div>
// // //         <div className="feature">
// // //           <div className="feature-icon">🌦️</div>
// // //           <h3>Weather Forecast</h3>
// // //           <p>Check the weather to plan your farming activities and mitigate risks.</p>
// // //         </div>
// // //       </section>

// // //       {/* About Section */}
// // //       <section id="about" className="about">
// // //         <h2>About Agro Assist</h2>
// // //         <p>
// // //           Agro Assist is designed to help farmers and agricultural experts make informed decisions by
// // //           providing real-time data on crops, market trends, and weather conditions. Our mission is to
// // //           empower farmers with the tools and insights they need to succeed in a rapidly changing agricultural landscape.
// // //         </p>
// // //       </section>

// // //       {/* How It Works Section */}
// // //       <section id="how-it-works" className="how-it-works">
// // //         <h2>How It Works</h2>
// // //         <ol>
// // //           <li>Sign up and create an account.</li>
// // //           <li>Provide details about your farm or agricultural needs.</li>
// // //           <li>Get personalized crop recommendations, market analysis, and weather forecasts based on your location.</li>
// // //         </ol>
// // //       </section>

// // //       {/* Testimonials Section */}
// // //       <section id="testimonials" className="testimonials">
// // //         <h2>Testimonials</h2>
// // //         <blockquote>
// // //           <p>"Agro Assist has transformed how I approach farming. The recommendations and market insights have helped me boost my crop yields!"</p>
// // //           <footer>- Ramakant Pandit</footer>
// // //         </blockquote>
// // //         <blockquote>
// // //           <p>"Weather forecasts provided by Agro Assist saved me from crop loss during unexpected storms."</p>
// // //           <footer>- vilasrao </footer>
// // //         </blockquote>
// // //       </section>

// // //       {/* Contact Section */}
// // //       <section id="contact" className="contact">
// // //         <h2>Contact Us</h2>
// // //         <p>
// // //           If you have any questions, feel free to reach out at{' '}
// // //           <a href="mailto:support@agroassist.com">support@agroassist.com</a>.
// // //         </p>
// // //       </section>

// // //       {/* Footer Section */}
// // //       <footer className="footer">
// // //         <p>&copy; 2024 Agro Assist</p>
// // //       </footer>
// // //     </div>
// // //   );
// // // };

// // // export default Home;
// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './Home.css';

// // const Home = () => {
// //   const navigate = useNavigate(); // Hook for navigation

// //   return (
// //     <div className="home-container">
// //       {/* Header Section */}
// //       <header className="header">
// //         <h1>Agro Assist</h1>
// //         <nav className="nav">
// //           <a href="#about">About Us</a>
// //           <a href="#how-it-works">How It Works</a>
// //           <a href="#testimonials">Testimonials</a>
// //           <a href="#contact">Contact Us</a>
// //         </nav>
// //       </header>

// //       {/* Features Section */}
// //       <section className="features">
// //         <h2 className="features-title">Our Key Features</h2>
        
// //         <div className="feature">
// //           <div className="feature-icon">🌱</div>
// //           <h3>Crop Recommendation</h3>
// //           <p>Find the best crops to plant based on your conditions, ensuring optimal growth and yield.</p>
// //           <button onClick={() => navigate('/crop-recommendation')}>Go to Crop Recommendation</button>
// //         </div>
        
// //         <div className="feature">
// //           <div className="feature-icon">📈</div>
// //           <h3>Market Analysis</h3>
// //           <p>Get insights on current market trends and prices to make informed decisions.</p>
// //           <button onClick={() => navigate('/market-analysis')}>Go to Market Analysis</button>
// //         </div>
        
// //         <div className="feature">
// //           <div className="feature-icon">📰</div>
// //           <h3>News</h3>
// //           <p>Stay updated with the latest agricultural news, innovations, and best practices.</p>
// //           <button onClick={() => navigate('/news')}>Go to News</button>
// //         </div>
        
// //         <div className="feature">
// //           <div className="feature-icon">🌦️</div>
// //           <h3>Weather Forecast</h3>
// //           <p>Check the weather to plan your farming activities and mitigate risks.</p>
// //           <button onClick={() => navigate('/weather-forecast')}>Go to Weather Forecast</button>
// //         </div>
// //       </section>

// //       {/* About Section */}
// //       <section id="about" className="about">
// //         <h2>About Agro Assist</h2>
// //         <p>
// //           Agro Assist is designed to help farmers and agricultural experts make informed decisions by
// //           providing real-time data on crops, market trends, and weather conditions. Our mission is to
// //           empower farmers with the tools and insights they need to succeed in a rapidly changing agricultural landscape.
// //         </p>
// //       </section>

// //       {/* How It Works Section */}
// //       <section id="how-it-works" className="how-it-works">
// //         <h2>How It Works</h2>
// //         <ol>
// //           <li>Sign up and create an account.</li>
// //           <li>Provide details about your farm or agricultural needs.</li>
// //           <li>Get personalized crop recommendations, market analysis, and weather forecasts based on your location.</li>
// //         </ol>
// //       </section>

// //       {/* Testimonials Section */}
// //       <section id="testimonials" className="testimonials">
// //         <h2>Testimonials</h2>
// //         <blockquote>
// //           <p>"Agro Assist has transformed how I approach farming. The recommendations and market insights have helped me boost my crop yields!"</p>
// //           <footer>- Ramakant Pandit</footer>
// //         </blockquote>
// //         <blockquote>
// //           <p>"Weather forecasts provided by Agro Assist saved me from crop loss during unexpected storms."</p>
// //           <footer>- Vilasrao</footer>
// //         </blockquote>
// //       </section>

// //       {/* Contact Section */}
// //       <section id="contact" className="contact">
// //         <h2>Contact Us</h2>
// //         <p>
// //           If you have any questions, feel free to reach out at{' '}
// //           <a href="mailto:support@agroassist.com">support@agroassist.com</a>.
// //         </p>
// //       </section>

// //       {/* Footer Section */}
// //       <footer className="footer">
// //         <p>&copy; 2024 Agro Assist</p>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Home;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const navigate = useNavigate();
//   const [sidebarVisible, setSidebarVisible] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility
//   };

//   return (
//     <div className="home-container">
//       {/* Header Section */}
//       <header className="header">
//         <h1>Agro Assist</h1>
//         <nav className="nav">
//           <a href="#about">About Us</a>
//           <a href="#how-it-works">How It Works</a>
//           <a href="#testimonials">Testimonials</a>
//           <a href="#contact">Contact Us</a>
//         </nav>
//         {/* Profile Logo */}
//         <div className="profile-logo" onClick={toggleSidebar}>
//           <img src="Ojas2.webp" alt="Profile" className="logo-image" />
//         </div>
//       </header>

//       {/* Sidebar */}
//       <div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
//         <ul>
//           <li onClick={() => navigate('/profile')}>Profile</li>
//           <li onClick={() => navigate('/logout')}>Logout</li>
//         </ul>
//       </div>

//       {/* Features Section */}
//       <section className="features">
//         <h2 className="features-title">Our Key Features</h2>
        
//         <div className="feature">
//           <div className="feature-icon">🌱</div>
//           <h3>Crop Recommendation</h3>
//           <p>Find the best crops to plant based on your conditions, ensuring optimal growth and yield.</p>
//           <button onClick={() => navigate('/crop-recommendation')}>Go to Crop Recommendation</button>
//         </div>
        
//         <div className="feature">
//           <div className="feature-icon">📈</div>
//           <h3>Market Analysis</h3>
//           <p>Get insights on current market trends and prices to make informed decisions.</p>
//           <button onClick={() => navigate('/market-analysis')}>Go to Market Analysis</button>
//         </div>
        
//         <div className="feature">
//           <div className="feature-icon">📰</div>
//           <h3>News</h3>
//           <p>Stay updated with the latest agricultural news, innovations, and best practices.</p>
//           <button onClick={() => navigate('/news')}>Go to News</button>
//         </div>
        
//         <div className="feature">
//           <div className="feature-icon">🌦️</div>
//           <h3>Weather Forecast</h3>
//           <p>Check the weather to plan your farming activities and mitigate risks.</p>
//           <button onClick={() => navigate('/weather-forecast')}>Go to Weather Forecast</button>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="about">
//         <h2>About Agro Assist</h2>
//         <p>
//           Agro Assist is designed to help farmers and agricultural experts make informed decisions by
//           providing real-time data on crops, market trends, and weather conditions. Our mission is to
//           empower farmers with the tools and insights they need to succeed in a rapidly changing agricultural landscape.
//         </p>
//       </section>

//       {/* How It Works Section */}
//       <section id="how-it-works" className="how-it-works">
//         <h2>How It Works</h2>
//         <ol>
//           <li>Sign up and create an account.</li>
//           <li>Provide details about your farm or agricultural needs.</li>
//           <li>Get personalized crop recommendations, market analysis, and weather forecasts based on your location.</li>
//         </ol>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="testimonials">
//         <h2>Testimonials</h2>
//         <blockquote>
//           <p>"Agro Assist has transformed how I approach farming. The recommendations and market insights have helped me boost my crop yields!"</p>
//           <footer>- Ramakant Pandit</footer>
//         </blockquote>
//         <blockquote>
//           <p>"Weather forecasts provided by Agro Assist saved me from crop loss during unexpected storms."</p>
//           <footer>- Vilasrao</footer>
//         </blockquote>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="contact">
//         <h2>Contact Us</h2>
//         <p>
//           If you have any questions, feel free to reach out at{' '}
//           <a href="mailto:support@agroassist.com">support@agroassist.com</a>.
//         </p>
//       </section>

//       {/* Footer Section */}
//       <footer className="footer">
//         <p>&copy; 2024 Agro Assist</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import ProfileImage from '../../images/Ojas2.webp'; // Corrected relative path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility
  };

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <h1>Agro Assist</h1>
        <nav className="nav">
          <a href="#about">About Us</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact Us</a>
        </nav>
        {/* Profile Logo */}
        <div className="profile-logo" onClick={toggleSidebar}>
          <img src={ProfileImage} alt="Profile" className="logo-image" />
        </div>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
        <ul>
          <li onClick={() => navigate('/profile')}>Profile</li>
          <li onClick={() => navigate('/logout')}>Logout</li>
        </ul>
      </div>

      {/* Features Section */}
      <section className="features">
        <h2 className="features-title">Our Key Features</h2>
        
        <div className="feature">
          <div className="feature-icon">🌱</div>
          <h3>Crop Recommendation</h3>
          <p>Find the best crops to plant based on your conditions, ensuring optimal growth and yield.</p>
          <button onClick={() => navigate('/crop-recommendation')}>Go to Crop Recommendation</button>
        </div>
        
        <div className="feature">
          <div className="feature-icon">📈</div>
          <h3>Market Analysis</h3>
          <p>Get insights on current market trends and prices to make informed decisions.</p>
          <button onClick={() => navigate('/market-analysis')}>Go to Market Analysis</button>
        </div>
        
        <div className="feature">
          <div className="feature-icon">📰</div>
          <h3>News</h3>
          <p>Stay updated with the latest agricultural news, innovations, and best practices.</p>
          <button onClick={() => navigate('/news')}>Go to News</button>
        </div>
        
        <div className="feature">
          <div className="feature-icon">🌦️</div>
          <h3>Weather Forecast</h3>
          <p>Check the weather to plan your farming activities and mitigate risks.</p>
          <button onClick={() => navigate('/weather-forecast')}>Go to Weather Forecast</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Agro Assist</h2>
        <p>
          Agro Assist is designed to help farmers and agricultural experts make informed decisions by
          providing real-time data on crops, market trends, and weather conditions. Our mission is to
          empower farmers with the tools and insights they need to succeed in a rapidly changing agricultural landscape.
        </p>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Sign up and create an account.</li>
          <li>Provide details about your farm or agricultural needs.</li>
          <li>Get personalized crop recommendations, market analysis, and weather forecasts based on your location.</li>
        </ol>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <h2>Testimonials</h2>
        <blockquote>
          <p>"Agro Assist has transformed how I approach farming. The recommendations and market insights have helped me boost my crop yields!"</p>
          <footer>- Ramakant Pandit</footer>
        </blockquote>
        <blockquote>
          <p>"Weather forecasts provided by Agro Assist saved me from crop loss during unexpected storms."</p>
          <footer>- Vilasrao</footer>
        </blockquote>
      </section>

      {/* Contact Section
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions, feel free to reach out at{' '}
          <a href="mailto:support@agroassist.com">support@agroassist.com</a>.
        </p>

{/* Contact Section */}
<section id="contact" className="contact">
  <h2>Contact Us</h2>
  <p>
    If you have any questions, feel free to reach out at{' '}
    <a href="mailto:support@agroassist.com">support@agroassist.com</a>.
  </p>
  
  {/* Social Media Links */}
  <div className="social-media">
    <h3>Follow Us</h3>
    <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} className="social-icon" />
    </a>
    <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} className="social-icon" />
    </a>
    <a href="https://www.facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} className="social-icon" />
    </a>
    <a href="https://www.youtube.com/youryoutube" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faYoutube} className="social-icon" />
    </a>
  </div>
</section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Agro Assist</p>
      </footer>
    </div>
  );
};

export default Home;
