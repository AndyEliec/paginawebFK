import React from 'react';

const CategoryCard: React.FC<{ imageUrl: string; title: string; description: string }> = ({ imageUrl, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-semibold font-serif text-brand-primary mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

export const ProcessesPage: React.FC = () => {
  return (
    <div className="bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-brand-primary">Nuestros Procesos</h1>
          <p className="mt-4 text-xl text-gray-600">Control de calidad en cada etapa, desde el hilo hasta el acabado final.</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <CategoryCard
            imageUrl="https://picsum.photos/seed/tejeduria/800/600"
            title="TEJEDURIA"
            description="Nuestra división de tejeduría es donde la magia comienza. Utilizando telares de última generación, creamos las bases de nuestros tejidos, asegurando una estructura y calidad excepcionales desde el primer hilo."
          />
          <CategoryCard
            imageUrl="https://picsum.photos/seed/tintoreria/800/600"
            title="TINTORERIA"
            description="En la tintorería, damos vida y color a nuestras telas. Con procesos sostenibles y un riguroso control de calidad, logramos una paleta de colores vibrante, duradera y consistente en cada lote de producción."
          />
        </div>
      </div>
    </div>
  );
};
