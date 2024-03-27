// Dashboard.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from './ItemCard'; // Import ItemCard component
import './styles.css';

function Dashboard({ user, onLogout }) {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const APP_ID = "483078ff";
    const API_KEY = "c8591d5ed7f5047ed95c5cea7f64f857";

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        try {
            const response = await fetch(`https://api.edamam.com/search?q="ab"&app_id=${APP_ID}&app_key=${API_KEY}`);
            const data = await response.json();
            setItems(data.hits);
            setFilteredItems(data.hits);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

  
    const handleSearchInputChange = (e) => {
        const { value } = e.target;
        setSearchQuery(value);
        const filtered = items.filter(item => item.recipe.label.toLowerCase().includes(value.toLowerCase()));
        setFilteredItems(filtered);
      };

    return (
        <div className="dashboard-container">
          <div className="search-box">
        <input
          type="text"
          placeholder="Search recipes"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
          <div className="dashboard-content">
            <div className="item-cards">
              {filteredItems.map((item, index) => (
              
                    <ItemCard item={item.recipe} />
              
              ))}
            </div>
          </div>
        </div>
      );
    }

export default Dashboard;
