import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import { CartContext } from "../CartContext";
import { FavoritesContext } from "../FavoritesContext";
import Swal from 'sweetalert2'; 

function Card({ id, image, name, price }) {
    const { addtoCart } = useContext(CartContext);
    const { addToFavorites } = useContext(FavoritesContext);

    const handleClick = () => {
        addtoCart({ image, name, price });

        Swal.fire({
            icon: 'success',
            title: 'Added to Cart!',
            text: `${name} has been added to your cart.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    const handleFavoriteClick = () => {
        addToFavorites({ image, name, price });

        Swal.fire({
            icon: 'success',
            title: 'Added to Favorites!',
            text: `${name} has been added to your favorites.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="mains">
            <div className="img">
                <div className="image">
                    <Link to={`/product/${id}`}>
                        <img src={image} alt={name} width={"250px"} height={"250px"} />
                    </Link>
                    <button className="favorite-btn" onClick={handleFavoriteClick}>❤️</button>
                </div>
            </div>
            <div className="data">
                <Link to={`/product/${id}`}>
                    <div className="h1">
                        <h1>{name}</h1>
                    </div>
                    <div className="price">
                        <p>{price}₹</p>
                    </div>
                </Link>
                <div className="add-to-cart">
                    <button onClick={handleClick}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
