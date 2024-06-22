import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // Redirect to Google OAuth login endpoint (replace with your backend URL)
    window.location.href = 'http://localhost:5000/auth/google';
  };

  // Implement logic to handle successful login from Google OAuth redirect
  // (e.g., using URL parameters or a separate backend API endpoint)
  // Update isLoggedIn state and navigate to communication route

  return (
    <div>
      <h1>TensorGo Communication</h1>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      {/* (Optional) Placeholder for signup button */}
      {/* <button onClick={() => navigate('/signup')}>Signup</button> */}
    </div>
  );
};

export default Login;
