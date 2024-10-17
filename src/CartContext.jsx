import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addtoCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.name === item.name);
        if (!existingItem) {
            setCart((prevCart) => {
                const updatedCart = [...prevCart, item];
                return updatedCart;
            });
        }
    };

    const removeFromCart = (itemName) => {
        const updatedCart = cart.filter((item) => item.name !== itemName);
        setCart(updatedCart);
    };

    const clearCart = () => {
        setCart([]);  
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addtoCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
