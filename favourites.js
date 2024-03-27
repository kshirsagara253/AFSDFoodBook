// Favorites.js
import React, { useContext } from 'react';
import { FavoritesContext } from './ItemCard';
import ItemCard from './ItemCard';

function Favorites() {
  // Accessing the favorites array from the context
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="favorites-container">
      <h2>Favorites</h2>
      <div className="favorites-grid">
        {/* Map through the favorites array and render each favorite item */}
        {favorites.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
