// Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated registration logic - replace this with actual registration logic
    onRegister({ username });
    navigate('/dashboard');
  };

  return (
    <div className="container register-container"> {/* Apply container and register-container classes */}
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}


export default Register;
