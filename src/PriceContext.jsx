import { createContext, useState, useEffect } from 'react';

export const PriceContext = createContext();

export const PriceProvider = ({ children }) => {
    const [total, setTotal] = useState(0);
    const [shippingCharge, setShippingCharge] = useState(0);
    const [offer, setOffer] = useState(0);
    const [subtotal, setSubtotal] = useState(0);

    const calculateSubtotal = () => {
        setSubtotal(total + shippingCharge - offer);
    };

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
