import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const WhatsAppWidget: React.FC = () => {
  const phoneNumber = "34912345678";
  const message = "Hola, me gustaría solicitar más información sobre sus productos.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-40 transition-transform duration-300 hover:scale-110 hover:bg-[#128C7E]"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};
