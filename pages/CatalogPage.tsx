
import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

interface CatalogPageProps {
  setSelectedProduct: (product: Product) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({ setSelectedProduct }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = useMemo(() => ['Todos', ...new Set(products.map(p => p.category))], []);
  
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Todos') {
      return products;
    }
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);
  
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-brand-primary">Nuestro Catálogo</h1>
          <p className="mt-4 text-lg text-gray-600">Explore nuestra diversa selección de textiles de primera calidad.</p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => setSelectedProduct(product)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};
