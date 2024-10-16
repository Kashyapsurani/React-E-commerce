import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {

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
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="banner-section">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" // Banner image
                            alt="Food Banner"
                            className="banner"
                        />
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className="banner-section">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" // Banner image
                            alt="Food Banner"
                            className="banner"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-section">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" // Banner image
                            alt="Food Banner"
                            className="banner"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-section">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" // Banner image
                            alt="Food Banner"
                            className="banner"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-section">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" // Banner image
                            alt="Food Banner"
                            className="banner"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-section">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" // Banner image
                            alt="Food Banner"
                            className="banner"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-section">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" // Banner image
                            alt="Food Banner"
                            className="banner"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-section">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" // Banner image
                            alt="Food Banner"
                            className="banner"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-section">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" // Banner image
                            alt="Food Banner"
                            className="banner"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="warpeer">


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
