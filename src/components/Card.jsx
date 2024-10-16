import { useContext } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Card.css';
import { CartContext } from "../CartContext";
import { FavoritesContext } from "../FavoritesContext";

function Card({ id, image, name, price }) {  // Add id as a prop
    const { addtoCart } = useContext(CartContext);
    const { addToFavorites } = useContext(FavoritesContext);

    const handleClick = () => {
        addtoCart({ image, name, price });
    };

    const handleFavoriteClick = () => {
        addToFavorites({ image, name, price });
    };

    return (
        <div className="mains">
            <div className="img">
                <div className="image">
                    <Link to={`/product/${id}`}>  {/* Wrap image and button in a Link for navigation */}
                        <img src={image} alt={name} width={"250px"} height={"250px"} />
                    </Link>
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
