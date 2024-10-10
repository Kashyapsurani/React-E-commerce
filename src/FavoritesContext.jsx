import { createContext, useState, useEffect } from 'react';

// Create the FavoritesContext
export const FavoritesContext = createContext();

// FavoritesProvider component to provide context
export const FavoritesProvider = ({ children }) => {
    // Get the initial favorites list from localStorage (if any)
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    // Function to add an item to the favorites list
    const addToFavorites = (item) => {
        // Check if the item is already in favorites to prevent duplicates
        if (!favorites.some(fav => fav.name === item.name)) {
            setFavorites((prevFavorites) => {
                const updatedFavorites = [...prevFavorites, item];
                localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Save to localStorage
                return updatedFavorites;
            });
        }
    };

    // Function to remove an item from favorites
    const removeFromFavorites = (itemName) => {
        const updatedFavorites = favorites.filter((fav) => fav.name !== itemName);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Save updated list to localStorage
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
