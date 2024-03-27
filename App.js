// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Updated import
import { Link } from 'react-router-dom';

import Login from './login';
import Register from './register';
import Dashboard from './dashboard';
import ItemDetails from './ItemDetails';
import ItemCard from './ItemCard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <Router>
      <div><nav className="navbar">
            <div className="logo">
              <Link to="/">FoodBook</Link>
            </div>
            <ul className="nav-menu">
              <li><Link to="/dashboard">Home</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
              <li><Link to="/about">About Us</Link></li>
              {loggedIn ?  <Link to="/login" >Logout</Link>:<Link to="/login">login</Link>}
            </ul>
          </nav>
      <Routes> 
       
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleLogin} />} />
        <Route path='/Itemdetails' element={<ItemDetails item={ItemCard}/>} />
        <Route path="/dashboard" element={loggedIn ? <Dashboard user={user} onLogout={handleLogout} /> : <Navigate to="/login" />} />
        
      </Routes> 
      </div>
    </Router>
  );
}

export default App;
