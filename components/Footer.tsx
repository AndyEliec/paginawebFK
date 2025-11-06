import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-light">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold text-brand-accent">FillKolor</h3>
            <p className="text-sm text-gray-400">
              Líderes en tintorería industrial y acabados textiles de alta calidad.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contacto Rápido</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="tel:+34912345678" className="hover:text-brand-accent">+34 912 345 678</a></li>
              <li><a href="mailto:ventas@fillkolor.com" className="hover:text-brand-accent">ventas@fillkolor.com</a></li>
              <li>C/ de la Seda, 123, 28080 Madrid, España</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-accent">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.343 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm-1.002 11.872a4.872 4.872 0 100-9.744 4.872 4.872 0 000 9.744zM12 8.378a3.622 3.622 0 110 7.244 3.622 3.622 0 010-7.244zm6.406-7.18a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-accent">
                <span className="sr-only">Pinterest</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.36 12.3c-.67 2.06-2.03 2.9-3.95 2.53-1.42-.27-2.33-1.2-2.58-2.6-.3-1.68.16-3.13 1.2-4.2.1-.1.2-.23.16-.38-.07-.3-.24-.62-.3-.92-.08-.34.02-.6.3-.7.28-.1.54.08.6.35.08.33.17.65.28.95.2.55.7.77 1.25.63.78-.2 1.15-1.1.9-1.85-.3-1-1.1-1.5-2.06-1.5-.98 0-1.8.4-2.4 1.1-.64.73-.85 1.7-.6 2.7.2.78.83 1.2 1.43 1.2.2 0 .4-.03.6-.1.2-.07.38-.17.38-.4 0-.3-.3-.54-.6-.6-.18-.04-.37-.03-.55.05-.2.1-.3.28-.2.48.1.18.3.2.5.15.54-.12.87-.6.95-1.1.1-.55.02-1.12-.3-1.6-.33-.5-.86-.8-1.42-.8-1.2 0-2.22.8-2.55 2-.3 1.1-.05 2.3.6 3.14.7.9 1.8 1.2 2.9 1.1 1.7-.16 2.8-1.3 3.1-2.9.2-.95.03-1.9-.4-2.7-.22-.4-.1-.85.25-1.1.35-.25.8-.1 1.05.25.4.5.55 1.1.4 1.75z" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} FillKolor. Todos los derechos reservados.</p>
          <p className="mt-2 space-x-4">
            <a href="#" className="hover:text-brand-accent">Política de Privacidad</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-brand-accent">Aviso Legal</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-brand-accent">Política de Cookies</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
