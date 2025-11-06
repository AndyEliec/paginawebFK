import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProcessesPage } from './pages/GrupoBondeadosPage';
import { Page, Product } from './types';
import { WhatsAppWidget } from './components/WhatsAppWidget';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSetSelectedProduct = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage setPage={setCurrentPage} setSelectedProduct={handleSetSelectedProduct} />;
      case Page.Catalog:
        return <CatalogPage setSelectedProduct={handleSetSelectedProduct} />;
      case Page.Processes:
        return <ProcessesPage />;
      case Page.About:
        return <AboutPage />;
      case Page.Contact:
        return <ContactPage />;
      default:
        return <HomePage setPage={setCurrentPage} setSelectedProduct={handleSetSelectedProduct} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-brand-dark">
      <Header currentPage={currentPage} setPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <WhatsAppWidget />
      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
