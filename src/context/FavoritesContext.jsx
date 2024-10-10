import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (image) => {
    setFavorites((prevFavorites) => [...prevFavorites, image]);
  };

  const removeFromFavorites = (imageId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((image) => image.id !== imageId)
    );
  };

  const isFavorite = (imageId) => {
    return favorites.some((image) => image.id === imageId);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
