import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';
import { XIcon } from './icons/XIcon';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [product]);
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % product.images.gallery.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + product.images.gallery.length) % product.images.gallery.length);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative bg-brand-light w-full max-w-4xl max-h-[90vh] rounded-lg shadow-2xl flex flex-col md:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black z-30 bg-white/50 rounded-full p-1"
        >
          <XIcon className="w-6 h-6" />
        </button>

        <div className="w-full md:w-1/2 relative group">
          <figure 
            className="w-full h-64 md:h-full overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            <img
              src={product.images.gallery[currentImageIndex]}
              alt={`${product.name} - ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-[2]"
              style={{ transformOrigin: `${mousePos.x}% ${mousePos.y}%` }}
            />
          </figure>
          
          <div className="absolute inset-0 flex items-center justify-between p-2">
            <button
              onClick={prevImage}
              className="bg-black/30 text-white rounded-full p-2 hover:bg-black/50 transition-colors z-20"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="bg-black/30 text-white rounded-full p-2 hover:bg-black/50 transition-colors z-20"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
           <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {product.images.gallery.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
          <h2 className="text-3xl font-serif font-bold text-brand-primary mb-2">{product.name}</h2>
          <p className="text-sm text-gray-500 mb-4">REF: {product.reference}</p>
          
          <div className="space-y-4 text-brand-secondary flex-grow">
            <div>
              <h4 className="font-semibold">Composición:</h4>
              <p>{product.composition}</p>
            </div>
            <div>
              <h4 className="font-semibold">Ancho:</h4>
              <p>{product.width}</p>
            </div>
            <div>
              <h4 className="font-semibold">Uso Recomendado:</h4>
              <p>{product.recommendedUse}</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
             <button
              className="w-full bg-brand-accent text-white font-bold py-3 px-4 rounded-md hover:bg-brand-accent-hover transition-colors duration-300 shadow-lg"
              onClick={() => {
                const subject = `Consulta sobre producto: ${product.name} (REF: ${product.reference})`;
                window.location.href = `mailto:ventas@fillkolor.com?subject=${encodeURIComponent(subject)}`;
              }}
            >
              Solicitar Catálogo/Muestras
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};