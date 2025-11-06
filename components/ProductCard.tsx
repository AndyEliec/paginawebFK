
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl"
      onClick={onClick}
    >
      <img
        src={product.images.thumbnail}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/60 to-transparent">
        <h3 className="text-white text-lg font-semibold font-serif">{product.name}</h3>
        <p className="text-brand-accent text-sm">{product.category}</p>
      </div>
    </div>
  );
};
