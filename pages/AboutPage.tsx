import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-brand-primary">Nuestra Historia</h1>
            <p className="mt-4 text-xl text-gray-600">Tejiendo Tradición e Innovación Desde 1985</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <img 
              src="https://picsum.photos/seed/about1/800/600" 
              alt="Taller de textiles" 
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold text-brand-secondary mb-4">Pasión por los Textiles</h2>
              <p className="text-gray-700 leading-relaxed">
                FillKolor nació de una pasión familiar por las telas de alta calidad. Desde nuestros humildes comienzos en un pequeño taller, hemos crecido hasta convertirnos en un referente en el sector textil, sin perder nunca de vista nuestro compromiso con la excelencia. Cada hilo cuenta una historia de dedicación, artesanía y una búsqueda incesante de la perfección.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <img 
                src="https://picsum.photos/seed/about2/800/600" 
                alt="Equipo de diseño" 
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-2xl font-semibold text-brand-secondary mb-4">Nuestra Misión y Valores</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nuestra misión es proveer a diseñadores, confeccionistas y creativos con textiles que inspiren y eleven sus creaciones. Nos guiamos por tres pilares fundamentales:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Calidad:</strong> Un estándar intransigente en cada fibra.</li>
                <li><strong>Innovación:</strong> Fusionando técnicas tradicionales con tecnología de vanguardia.</li>
                <li><strong>Sostenibilidad:</strong> Un compromiso con prácticas éticas y respetuosas con el medio ambiente.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};