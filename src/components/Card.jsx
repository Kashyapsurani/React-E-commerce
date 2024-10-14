import { useContext } from 'react';  // Import useContext to consume context values
import './Card.css';  // Import the stylesheet for the Card component
import { CartContext } from "../CartContext";  // Import CartContext to manage cart state
import { FavoritesContext } from "../FavoritesContext";  // Import FavoritesContext to manage favorites

function Card({ image, name, price }) {
    // Access the addtoCart function from CartContext using useContext
    const { addtoCart } = useContext(CartContext);

    // Access the addToFavorites function from FavoritesContext using useContext
    const { addToFavorites } = useContext(FavoritesContext);

    // Handle adding an item to the cart
    const handleClick = () => {
        addtoCart({ image, name, price });  // Call addtoCart with product details
    };

    // Handle adding an item to the favorites list
    const handleFavoriteClick = () => {
        addToFavorites({ image, name, price });  // Call addToFavorites with product details
    };

    return (
        <div className="mains">  {/* Main container for the card */}
            <div className="img">  {/* Image wrapper */}
                <div className="image">  {/* Specific class for the image container */}
                    <img src={image} alt="" width={"250px"} height={"250px"} />  {/* Display product image */}
                    <button className="favorite-btn" onClick={handleFavoriteClick}>❤️</button>  {/* Button to add to favorites */}
                </div>
            </div>
            <div className="data">  {/* Wrapper for product data */}
                <div className="h1">  {/* Product name */}
                    <h1>{name}</h1>
                </div>
                <div className="price">  {/* Product price */}
                    <p>{price}₹</p>
                </div>
                <div className="add-to-cart">  {/* Button to add item to cart */}
                    <button onClick={handleClick}>Add To Cart</button>  {/* Call handleClick when button is clicked */}
                </div>
            </div>
        </div>
    );
}

export default Card;
