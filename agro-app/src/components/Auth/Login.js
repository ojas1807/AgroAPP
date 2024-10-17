import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="form-title">Login</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button className="btn-primary">Login</button>
        </form>
        <p className="redirect-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
