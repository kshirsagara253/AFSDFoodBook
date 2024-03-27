
import React, { useState, useContext, createContext } from 'react';
import { Link } from 'react-router-dom';

import './ItemCard.css'; 

function ItemCard({ item }) {
    const [isFavorite, setIsFavorite] = useState(false); // State to track if item is in favorites
    // const FavoritesContext = createContext(item)
    // const { favorites, setFavorites } = useContext(FavoritesContext); // Access favorites context
    // Function to handle adding or removing item from favorites
    const handleToggleFavorite = () => {
        if (!isFavorite) {
            // setFavorites([...favorites, item]); // Add item to favorites
        } else {
            // const updatedFavorites = favorites.filter(favItem => favItem.label !== item.label);
            // setFavorites(updatedFavorites); // Remove item from favorites
        }
        setIsFavorite(!isFavorite); // Toggle isFavorite state
    };

    
    const buttonText = isFavorite ? "Remove from Favorites" : "Add to Favorites";

    return (
        <div className="card">
            <Link to={`/ItemDetails`} itemProp={item}>
                <img src={item.image} alt={item.label} />
            </Link>
            <div className="card-body">
                <h3 className="card-title">{item.label}</h3>
                <p>Calories: {Math.round(item.calories)}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="recipe-link">See Recipe</a>
              
                <button onClick={handleToggleFavorite}>{buttonText}</button>
            </div>
        </div>
    );
}

export default ItemCard;
