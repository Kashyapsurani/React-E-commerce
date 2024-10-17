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
            description: `Pizza[a][1] is an Italian dish typically consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients, baked at a high temperature, traditionally in a wood-fired oven.[2]

The term pizza was first recorded in the year 997 AD, in a Latin manuscript from the southern Italian town of Gaeta, in Lazio, on the border with Campania.[3] Raffaele Esposito is often credited for creating with modern pizza in Naples.[4][5][6][7] In 2009, Neapolitan pizza[8] was registered with the European Union as a traditional speciality guaranteed (TSG) dish. In 2017, the art of making Neapolitan pizza was added to UNESCO's list of intangible cultural heritage.[9]

Pizza and its variants are among the most popular foods in the world. Pizza is sold at a variety of restaurants, including pizzerias (pizza specialty restaurants), Mediterranean restaurants, via delivery, and as street food.[10] In Italy, pizza served in a restaurant is presented unsliced, and is eaten with the use of a knife and fork.[11][12] In casual settings, however, it is typically cut into slices to be eaten while held in the hand. Pizza is also sold in grocery stores in a variety of forms, including frozen or as kits for self-assembly. They are then cooked using a home oven.

In 2017, the world pizza market was US$128 billion, and in the U.S. it was $44 billion spread over 76,000 pizzerias.[13] Overall, 13% of the U.S. population aged two years and over consumed pizza on any given day.[14]`
        },
        {
            id: 2,
            image: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
            name: 'Burger',
            price: 150,
            description: `A hamburger, or simply a burger, is a dish consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll. The patties are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chilis with condiments such as ketchup, mustard, mayonnaise, relish or a "special sauce", often a variation of Thousand Island dressing, and are frequently placed on sesame seed buns. A hamburger patty topped with cheese is called a cheeseburger.[1] Under some definitions, and in some cultures, a burger is considered a sandwichHamburgers are typically associated with fast - food restaurants and diners but are also sold at various other restaurants, including more expensive high- end establishments.There are many international and regional variations of hamburgers.Some of the largest multinational fast - food chains have a burger as one of their core products: McDonald's Big Mac and Burger King's Whopper have become global icons of American culture.[2][3]`
        },
        {
            id: 3,
            image: dhosaImage, // Ensure you import the correct image path
            name: 'Dhosa',
            price: 120,
            description: `The dosa originated in South India, but its precise geographical origins are unknown. According to food historian K. T. Achaya, references in the Sangam literature suggest that dosa was already in use in the ancient Tamil country around the 1st century CE.[1] However, according to historian P. Thankappan Nair, dosa originated in the town of Udupi in present-day Karnataka.[2] Achaya states that the earliest written mention of dosa appears in the 8th-century literature of present-day Tamil Nadu, while the earliest mention of dosa in Kannada literature appears a century later.[3]

In popular tradition outside of Southern India, the origin of the dosa is linked to Udupi, probably because of the dish's association with Udupi restaurants.[3] The Tamil dosa is traditionally softer and thicker; the thinner and crispier version of dosa was first made in present-day Karnataka.[4] A recipe for dosa can be found in Manasollasa, a 12th-century Sanskrit encyclopedia compiled by Someshvara III, who ruled from present-day Karnataka.[5]

The dosa arrived in Mumbai with the opening of Udupi restaurants in the 1930s.[6] After India's independence in 1947, South Indian cuisine became gradually popular in North India. In New Delhi, the Madras Hotel in Connaught Place became one of the first restaurants to serve South Indian cuisine.[7][8]`
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
                    <div className="parent ">
                        <button className="add-to-carts" onClick={handleAddToCart}>
                        Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
