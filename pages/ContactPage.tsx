import React from 'react';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por su mensaje. Nos pondremos en contacto con usted en breve.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
        <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent"/>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
        <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent"/>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
        <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent"></textarea>
      </div>
      <div>
        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors">
          Enviar Mensaje
        </button>
      </div>
    </form>
  );
};


export const ContactPage: React.FC = () => {
  const phoneNumber = "34912345678";
  const message = "Hola, me gustaría solicitar más información sobre sus productos.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-brand-primary">Contacto</h1>
          <p className="mt-4 text-xl text-gray-600">Estamos aquí para ayudarle. Contáctenos para consultas o muestras.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-brand-secondary mb-6">Envíenos un mensaje</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-brand-secondary mb-6">Nuestra Ubicación</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>Dirección:</strong> C/ de la Seda, 123, 28080 Madrid, España</p>
                <p><strong>Teléfono:</strong> <a href="tel:+34912345678" className="text-brand-accent hover:underline">+34 912 345 678</a></p>
                <p><strong>Email:</strong> <a href="mailto:ventas@fillkolor.com" className="text-brand-accent hover:underline">ventas@fillkolor.com</a></p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-semibold text-brand-secondary mb-6">¿Prefiere un contacto más directo?</h2>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#25D366] hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] transition-colors"
              >
                <WhatsAppIcon className="w-6 h-6" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
            
            <div className="bg-gray-300 h-64 rounded-lg shadow-lg flex items-center justify-center text-gray-500">
              <p>Mapa Interactivo (Google Maps)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};