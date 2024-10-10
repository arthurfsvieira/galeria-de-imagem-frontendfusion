import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <div key={image.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={image.download_url} 
              alt={image.author} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{image.author}</h2>
              <p className="text-gray-600">{`${image.width} x ${image.height}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
