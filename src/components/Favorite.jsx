import React, { useContext } from 'react';  // Import React and useContext hook
import { FavoritesContext } from "../FavoritesContext";  // Import FavoritesContext to access favorites and removal functionality
import { CartContext } from '../CartContext';  // Import CartContext to use addtoCart function
import './Favorite.css';  // Import the CSS file for styling

function Favorite() {
    // Destructure favorites and removeFromFavorites from FavoritesContext
    const { favorites, removeFromFavorites } = useContext(FavoritesContext);

    // Destructure addtoCart from CartContext
    const { addtoCart } = useContext(CartContext);

    // Function to handle adding a favorite item to the cart
    const handleAddToCart = (item) => {
        addtoCart(item);  // Add the item to the cart using addtoCart
    };

    return (
        <div className="favorites-container">  {/* Main container for favorites list */}
            <h1>My Favorites</h1>

            {/* Conditionally render a message if no favorites are added yet */}
            {favorites.length === 0 ? (
                <p style={{ marginTop: "20px" }}>No favorites added yet!</p>  /* Display if there are no favorites */
            ) : (
            <div className="favorites-list" style={{ marginTop: "20px" }}>  {/* List of favorite items */}
                {/* Map through the favorites array and render each favorite item */}
                {favorites.map((item, index) => (
                    <div key={index} className="favorite-item">  {/* Individual favorite item */}
                        <img src={item.image} alt={item.name} width={"100px"} height={"100px"} />  {/* Display item image */}
                        <h2>{item.name}</h2>  {/* Display item name */}
                        <p>{item.price}₹</p>  {/* Display item price */}

                        {/* Button to remove the item from favorites */}
                        <button onClick={() => removeFromFavorites(item.name)}>Remove</button>

                        {/* Button to add the item to the cart */}
                        <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
                    </div>
                ))}
            </div>
            )}
        </div>
    );
}

export default Favorite;
