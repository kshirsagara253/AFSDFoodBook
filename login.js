// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated login logic - replace this with actual authentication logic
    if (username === 'user' && password === 'password') {
      onLogin({ username }); // passing user data
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container login-container"> {/* Apply container and login-container classes */}
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <Link to="/register">Register</Link></p>
  </div>
  );
}

export default Login;
