import { motion } from 'framer-motion';
import { Phone, Shield, Award, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const trustBadges = [
    { icon: Award, text: 'Uprawnienia Mistrzowskie' },
    { icon: Shield, text: '25 Lat Doświadczenia' },
    { icon: MapPin, text: 'Dojazd w Radomiu i okolicach' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Mistrz Kominiarski Radom –<br />
              <span className="text-orange-500">Bezpieczeństwo Twojego Domu</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed"
          >
            Profesjonalne czyszczenie kominów, okresowe przeglądy i odbiory do gazowni. 25 lat doświadczenia. Pełna dokumentacja do ubezpieczenia (CEB).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={scrollToContact}
              className="bg-orange-600 text-white px-8 py-4 rounded-md hover:bg-orange-700 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              Zamów Przegląd
            </button>
            <a
              href="tel:+48504035984"
              className="flex items-center justify-center space-x-2 bg-white text-slate-900 px-8 py-4 rounded-md hover:bg-slate-100 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              <Phone className="h-5 w-5" />
              <span>504 035 984</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20"
                >
                  <Icon className="h-6 w-6 text-orange-500" />
                  <span className="font-medium">{badge.text}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
