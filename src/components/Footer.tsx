import { Link } from 'react-router-dom';
import { Flame, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Flame className="h-8 w-8 text-orange-500" />
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg leading-tight">Zakład Kominiarski</span>
                <span className="text-sm text-slate-400">Cezary NITAK</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Profesjonalne usługi kominiarskie w Radomiu. 25 lat doświadczenia i pełne kwalifikacje mistrzowskie.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3 text-slate-400">
              <a href="tel:+48504035984" className="flex items-center space-x-2 hover:text-orange-500 transition-colors">
                <Phone className="h-4 w-4" />
                <span>504 035 984</span>
              </a>
              <a href="mailto:cezarynitakk@gmail.com" className="flex items-center space-x-2 hover:text-orange-500 transition-colors">
                <Mail className="h-4 w-4" />
                <span>cezarynitakk@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                <span>ul. Szeroka Droga 19 C<br />26-600 Radom</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Informacje</h3>
            <div className="space-y-2 text-slate-400">
              <p>NIP: 9481813306</p>
              <p>Mistrz Kominiarski</p>
              <p>Uprawnienia Budowlane</p>
              <Link to="/privacy-policy" className="block hover:text-orange-500 transition-colors">
                Polityka Prywatności
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} Zakład Kominiarski Cezary NITAK. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
