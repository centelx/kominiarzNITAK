import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    if (!isHome) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'O Mnie', href: 'about' },
    { name: 'Oferta', href: 'services' },
    { name: 'Opinie', href: 'testimonials' },
    { name: 'Kontakt', href: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <Flame className="h-8 w-8 text-orange-600 group-hover:text-orange-700 transition-colors" />
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-lg leading-tight">Zakład Kominiarski</span>
              <span className="text-sm text-slate-600">Cezary NITAK</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-slate-700 hover:text-orange-600 font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a
              href="tel:+48504035984"
              className="flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              <span>504 035 984</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 hover:text-orange-600 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-200"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-slate-700 hover:text-orange-600 font-medium py-2 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="tel:+48504035984"
                className="flex items-center justify-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors font-semibold w-full"
              >
                <Phone className="h-5 w-5" />
                <span>504 035 984</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
