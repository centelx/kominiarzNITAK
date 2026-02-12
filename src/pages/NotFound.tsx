import { Link } from 'react-router-dom';
import { Home, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold text-slate-900 mb-4">404</h1>
        <p className="text-2xl text-slate-600 mb-8">
          Strona nie została znaleziona
        </p>
        <p className="text-lg text-slate-500 mb-8 max-w-md mx-auto">
          Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 bg-orange-600 text-white px-8 py-4 rounded-md hover:bg-orange-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
          >
            <Home className="h-5 w-5" />
            <span>Wróć na stronę główną</span>
          </Link>
          <a
            href="tel:+48504035984"
            className="inline-flex items-center justify-center space-x-2 bg-white text-slate-900 px-8 py-4 rounded-md hover:bg-slate-100 transition-colors font-semibold shadow-lg hover:shadow-xl border-2 border-slate-200"
          >
            <Phone className="h-5 w-5" />
            <span>Zadzwoń: 504 035 984</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
