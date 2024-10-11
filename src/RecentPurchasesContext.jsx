import { createContext, useState } from 'react';

export const RecentPurchasesContext = createContext();

export const RecentPurchasesProvider = ({ children }) => {
    const [recentPurchases, setRecentPurchases] = useState(() => {
        // Load previous purchases from localStorage, if any
        const storedPurchases = localStorage.getItem('recentPurchases');
        return storedPurchases ? JSON.parse(storedPurchases) : [];
    });

    const addRecentPurchase = (item) => {
        const updatedPurchases = [...recentPurchases, item];
        setRecentPurchases(updatedPurchases);

        // Store recent purchases in localStorage
        localStorage.setItem('recentPurchases', JSON.stringify(updatedPurchases));
    };

    return (
        <RecentPurchasesContext.Provider value={{ recentPurchases, addRecentPurchase }}>
            {children}
        </RecentPurchasesContext.Provider>
    );
};
