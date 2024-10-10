import { useContext } from 'react';
import './Card.css';
import { CartContext } from "../CartContext";
import { FavoritesContext } from "../FavoritesContext";  // Import FavoritesContext

function Card({ image, name, price }) {
    const { addtoCart } = useContext(CartContext);
    const { addToFavorites } = useContext(FavoritesContext);  // Access addToFavorites

    const handleClick = () => {
        addtoCart({ image, name, price });
    };

    const handleFavoriteClick = () => {
        addToFavorites({ image, name, price });  // Add to favorites
    };

    return (
        <div className="mains">
            <div className="img">
                <div className="image">
                    <img src={image} alt="" width={"250px"} height={"250px"} />
                    <button className="favorite-btn" onClick={handleFavoriteClick}>❤️</button>
                </div>
            </div>
            <div className="data">
                <div className="h1">
                    <h1>{name}</h1>
                </div>
                <div className="price">
                    <p>{price}₹</p>
                </div>
                <div className="add-to-cart">
                    <button onClick={handleClick}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
