
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Signup.css'; // Use a separate CSS file for styling

// const Signup = () => {
//   return (
//     <div className="signup-container">
//       <div className="signup-box">
//         <h2>Create Your Account</h2>
//         <form>
//           <div className="form-group">
//             <label>Full Name:</label>
//             <input type="text" required />
//           </div>
//           <div className="form-group">
//             <label>Email:</label>
//             <input type="email" required />
//           </div>
//           <div className="form-group">
//             <label>Password:</label>
//             <input type="password" required />
//           </div>
//           <div className="form-group">
//             <label>Confirm Password:</label>
//             <input type="password" required />
//           </div>
//           <button type="submit" className="signup-button">Sign Up</button>
//         </form>
//         <p>Already have an account? <Link to="/">Login here</Link></p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="form-title">Sign Up</h2>
        <form>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" />
          </div>
          <button className="btn-primary">Sign Up</button>
        </form>
        <p className="redirect-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
