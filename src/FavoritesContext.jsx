import { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    const addToFavorites = (item) => {
        const existingFavorite = favorites.find(fav => fav.name === item.name);
        if (!existingFavorite) {
            setFavorites((prevFavorites) => {
                const updatedFavorites = [...prevFavorites, item];
                localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
                return updatedFavorites;
            });
        }
    };

    const removeFromFavorites = (itemName) => {
        const updatedFavorites = favorites.filter((fav) => fav.name !== itemName);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
