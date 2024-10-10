import { createContext, useState, useEffect } from 'react';

export const PriceContext = createContext();

export const PriceProvider = ({ children }) => {
    const [total, setTotal] = useState(0);
    const [shippingCharge, setShippingCharge] = useState(0);
    const [offer, setOffer] = useState(0);
    const [subtotal, setSubtotal] = useState(0);

    // A function to calculate the subtotal
    const calculateSubtotal = () => {
        setSubtotal(total + shippingCharge - offer);
    };

    // Recalculate subtotal whenever total, shippingCharge, or offer changes
    useEffect(() => {
        calculateSubtotal();
    }, [total, shippingCharge, offer]);

    return (
        <PriceContext.Provider value={{
            total,
            setTotal,
            shippingCharge,
            setShippingCharge,
            offer,
            setOffer,
            subtotal,
            setSubtotal
        }}>
            {children}
        </PriceContext.Provider>
    );
};
