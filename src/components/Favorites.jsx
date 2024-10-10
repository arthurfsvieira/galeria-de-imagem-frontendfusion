import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return <h2 className="text-center text-xl font-semibold">No favorites images.</h2>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">My Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((image) => (
          <div key={image.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
            <img 
              src={image.download_url} 
              alt={image.author} 
              className="w-full max-h-60 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">{image.author}</h2>
              <p className="text-gray-600">{`${image.width} x ${image.height}`}</p>
              <button
                onClick={() => removeFromFavorites(image.id)}
                className="mt-2 bg-red-500 text-white py-1 px-4 rounded"
              >
                Remove from Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
