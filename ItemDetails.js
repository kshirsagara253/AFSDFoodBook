// ItemDetails.js
import React, { useEffect } from 'react';

function ItemDetails({ item }) {
    const handleAddToFavorites = () => {
       
    };

    const handleRemoveFromFavorites = () => {
      
    };
   
    return (

        
        <div className="item-details-container">
            <div className="item-details">
                <h2>{item.label}</h2>
                <img src={item.image} alt={item.label} />
                <p>Calories: {Math.round(item.calories)}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer">See Recipe</a>
            </div>
            <div className="item-buttons">
                <button g={handleAddToFavorites}>Add to Favorites</button>
                <button onClick={handleRemoveFromFavorites}>Remove from Favorites</button>
            </div>
        </div>
    );
}

export default ItemDetails;
