
import React from 'react';
import { products } from '../data/products';
import { Page, Product } from '../types';
import { ProductCard } from '../components/ProductCard';

interface HomePageProps {
  setPage: (page: Page) => void;
  setSelectedProduct: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setPage, setSelectedProduct }) => {
  const featuredProducts = products.slice(0, 3);
  
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
        <div className="absolute inset-0 bg-brand-dark bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-2xl">La Esencia de la Calidad Textil</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-lg">
            Descubra una colección curada de las telas más finas del mundo, donde la tradición se encuentra con la innovación.
          </p>
          <button
            onClick={() => setPage(Page.Catalog)}
            className="bg-brand-accent text-white font-bold py-3 px-8 rounded-md hover:bg-brand-accent-hover transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            Explorar Catálogo
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-brand-primary mb-12">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => {
                  setSelectedProduct(product);
                }} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-brand-light py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-brand-accent text-white rounded-full p-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-primary mb-2">Calidad Insuperable</h3>
            <p className="text-gray-600">Seleccionamos solo las mejores fibras y materiales para garantizar durabilidad y un tacto excepcional.</p>
          </div>
          <div className="flex flex-col items-center">
             <div className="bg-brand-accent text-white rounded-full p-4 mb-4">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-primary mb-2">Innovación Constante</h3>
            <p className="text-gray-600">Investigamos nuevas técnicas y tendencias para ofrecer textiles que marcan la diferencia en cada proyecto.</p>
          </div>
          <div className="flex flex-col items-center">
             <div className="bg-brand-accent text-white rounded-full p-4 mb-4">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-primary mb-2">Sostenibilidad</h3>
            <p className="text-gray-600">Comprometidos con procesos de producción responsables para un futuro más verde y consciente.</p>
          </div>
        </div>
      </section>
    </div>
  );
};