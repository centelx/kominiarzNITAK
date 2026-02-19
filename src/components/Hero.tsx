import React from 'react';
import { ArrowDown, Shield, Clock, Award, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[url('https://plus.unsplash.com/premium_photo-1664302339101-3bbaa8e58925?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/80 z-0"></div>

      <div className="container mx-auto px-4 z-10 pt-28 pb-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center gap-4 mb-4 md:mb-6 text-orange-500"
          >
            <Shield size={28} />
            <Clock size={28} />
            <Award size={28} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight"
          >
            Mistrz Kominiarski Radom<br className="hidden md:block" />
            <span className="text-orange-500">Bezpieczeństwo Twojego Domu</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-200 mb-4 md:mb-8 leading-relaxed"
          >
            Profesjonalne czyszczenie kominów, okresowe przeglądy i odbiory do gazowni. 25 lat doświadczenia. Pełna dokumentacja do ubezpieczenia (CEB).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 md:mb-12"
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors cursor-pointer inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Zamów Przegląd
              <ArrowDown size={20} />
            </button>

            <a
              href="tel:+48504035984"
              className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors cursor-pointer inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone size={20} className="text-orange-600" />
              504 035 984
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 text-slate-300 text-sm md:text-base"
          >
            <span className="bg-slate-800/50 px-4 py-2 rounded-full flex items-center gap-2">
              <Award size={16} className="text-orange-500" />
              Uprawnienia Mistrzowskie
            </span>
            <span className="bg-slate-800/50 px-4 py-2 rounded-full flex items-center gap-2">
              <Clock size={16} className="text-orange-500" />
              25 lat doświadczenia
            </span>
            <span className="bg-slate-800/50 px-4 py-2 rounded-full flex items-center gap-2">
              <Shield size={16} className="text-orange-500" />
              System CEB
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
