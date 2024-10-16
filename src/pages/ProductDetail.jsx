// src/pages/ProductDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import dhosaImage from '../assets/food-trail-coimbatore-microsite1-1024x576.jpg'; // Ensure you import the image correctly
import "./ProductDetail.css";

function ProductDetail() {
    const { id } = useParams();  // Get the product ID from the URL parameters
    const productId = parseInt(id, 10); // Convert the id to an integer

    const [cards] = useState([  // Use useState but no need to set state again
        {
            id: 1,
            image: 'https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.jpg',
            name: 'Pizza',
            price: 250,
            description: 'A flatbread topped with cheese, sauce, and various toppings.'
        },
        {
            id: 2,
            image: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
            name: 'Burger',
            price: 150,
            description: 'A delicious sandwich with a meat or plant-based patty, veggies, and sauce.'
        },
        {
            id: 3,
            image: dhosaImage, // Ensure you import the correct image path
            name: 'Dhosa',
            price: 120,
            description: 'A crispy South Indian pancake served with sambar and chutney.'
        },
    ]);

    // Find the product based on the ID from the URL
    const product = cards.find(card => card.id === productId);

    // Render loading state or product details
    if (!product) {
        return <div className="product-not-found">Product not found.</div>;  // Handle case when the product is not found
    }

    // Function to handle adding the product to the cart
    const handleAddToCart = () => {
        alert(`${product.name} has been added to your cart!`);
        // Here you can add logic to actually add the product to a cart
        // For example, update cart state or send data to a cart context
    };

    return (
        <div className="product-detail-container"> {/* Centering container */}
            <div className="product-detail">
                <div className="product-image">
                    <img src={product.image} alt={product.name} width="300" height="300" />
                </div>
                <div className="product-info">
                    <h1 className="product-name">{product.name}</h1>  {/* Display product name */}
                    <p className="product-price">Price: <span>{product.price}₹</span></p>  {/* Display product price */}
                    <p className="product-description">{product.description}</p>  {/* Display product description */}
                    <button className="add-to-carts" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
