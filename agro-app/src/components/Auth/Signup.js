import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [gender, setGender] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    // Sending signup data to backend using Axios
    axios.post('/api/auth/signup', { username, email, password, phoneNo, gender })
      .then((response) => {
        // Handle successful signup (e.g., redirect to login or show a success message)
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error('Signup Error:', error);
        // Show error message based on the error response
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data.error || 'An error occurred during signup');
        } else {
          setErrorMessage('An error occurred during signup');
        }
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="btn-primary">Sign Up</button>
        </form>
        <p className="redirect-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
