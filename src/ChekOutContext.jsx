import { createContext, useState } from 'react';

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
    const [isCheckedOut, setIsCheckedOut] = useState(false);

    const clearCart = () => {
        setIsCheckedOut(true);

        localStorage.removeItem('cart');
    };

    return (
        <CheckoutContext.Provider value={{ clearCart, isCheckedOut }}>
            {children}
        </CheckoutContext.Provider>
    );
};

