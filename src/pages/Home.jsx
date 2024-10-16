import { useState } from 'react';
import Card from '../components/Card';
import './Home.css';


// Make sure images are correctly imported or accessible
import dhosaImage from '../assets/food-trail-coimbatore-microsite1-1024x576.jpg'; // Correct import path

function Home() {
  // Array of card data for multiple items
  const [cards, setCards] = useState([
    {
      id: 1,
      image: 'https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.jpg',
      name: 'Pizza',
      price: 250,
    },
    {
      id: 2,
      image: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
      name: 'Burger',
      price: 150,
    },
    {
      id: 3,
      image: dhosaImage, // Correct image path or imported file
      name: 'Dhosa',
      price: 120,
    },
  ]);

  return (
    <>
      <div className="warpeer">
        <div className="banner-section">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" // Banner image
                alt="Food Banner"
                className="banner"
              />
        </div>

        {/* Map through cards array to dynamically render multiple Card components */}
        <div className="warper">
          {cards.map((card) => (
            <Card
              key={card.id} // Use unique id as key
              id={card.id}   // Pass the id to Card component
              image={card.image}
              name={card.name}
              price={card.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home