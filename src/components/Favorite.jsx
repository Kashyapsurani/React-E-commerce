// Favorite.js
import React, { useContext } from 'react';
import { FavoritesContext } from "../FavoritesContext";
import { CartContext } from '../CartContext'; // Import CartContext to use addtoCart function
import './Favorite.css';

function Favorite() {
    const { favorites, removeFromFavorites } = useContext(FavoritesContext);
    const { addtoCart } = useContext(CartContext); // Access addtoCart from CartContext

    const handleAddToCart = (item) => {
        addtoCart(item); // Add the item to the cart when the button is clicked
    };

    return (
        <div className="favorites-container">
            <h1>My Favorites</h1>
            {favorites.length === 0 ? (
                <p>No favorites added yet!</p>
            ) : (
                <div className="favorites-list">
                    {favorites.map((item, index) => (
                        <div key={index} className="favorite-item">
                            <img src={item.image} alt={item.name} width={"100px"} height={"100px"} />
                            <h2>{item.name}</h2>
                            <p>{item.price}₹</p>
                            <button onClick={() => removeFromFavorites(item.name)}>Remove</button>
                            <button onClick={() => handleAddToCart(item)}>Add To Cart</button> {/* Add to Cart button */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorite;
