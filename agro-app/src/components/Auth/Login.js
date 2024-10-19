// // import React from 'react';
// // import './Login.css';

// // const Login = () => {
// //   return (
// //     <div className="login-container">
// //       <div className="login-form">
// //         <h2 className="form-title">Login</h2>
// //         <form>
// //           <div className="input-group">
// //             <label>Email</label>
// //             <input type="email" placeholder="Enter your email" />
// //           </div>
// //           <div className="input-group">
// //             <label>Password</label>
// //             <input type="password" placeholder="Enter your password" />
// //           </div>
// //           <button className="btn-primary">Login</button>
// //         </form>
// //         <p className="redirect-text">
// //           Don't have an account? <a href="/signup">Sign up</a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
// import React, { useState } from 'react';
// import './Login.css';

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   // Handling form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Sending login data to backend
//     fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           // If login successful, call onLogin
//           onLogin();
//         } else {
//           // If login fails, show error message
//           setErrorMessage('Invalid email or password');
//         }
//       })
//       .catch((error) => {
//         console.error('Login Error:', error);
//         setErrorMessage('An error occurred while logging in');
//       });
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2 className="form-title">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {errorMessage && <p className="error-message">{errorMessage}</p>}
//           <button type="submit" className="btn-primary">Login</button>
//         </form>
//         <p className="redirect-text">
//           Don't have an account? <a href="/signup">Sign up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending login data to backend using Axios
    axios.post('/api/auth/login', { email, password })
      .then((response) => {
        // Assuming your backend returns a success response
        if (response.data.token) {
          // If login successful, call onLogin
          onLogin();
        }
      })
      .catch((error) => {
        console.error('Login Error:', error);
        // Show error message based on the error response
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data.error || 'Invalid email or password');
        } else {
          setErrorMessage('An error occurred while logging in');
        }
      });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSubmit}>
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
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="btn-primary">Login</button>
        </form>
        <p className="redirect-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
