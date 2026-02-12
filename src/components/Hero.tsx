import React from 'react';
import { ArrowDown, Shield, Clock, Award } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-[url('https://plus.unsplash.com/premium_photo-1664302339101-3bbaa8e58925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9vZiUyMHN1bnNldCUyMHNpbGhvdWV0dGV8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/80 z-0"></div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center gap-4 mb-6 text-orange-500"
          >
            <Shield size={28} />
            <Clock size={28} />
            <Award size={28} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Mistrz Kominiarski Radom<br className="hidden md:block" />
            <span className="text-orange-500">Bezpieczeństwo Twojego Domu</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-200 mb-8 leading-relaxed"
          >
            Profesjonalne czyszczenie kominów, okresowe przeglądy i odbiory do gazowni. 25 lat doświadczenia. Pełna dokumentacja do ubezpieczenia (CEB).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors cursor-pointer inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Zamów Przegląd
              <ArrowDown size={20} />
            </ScrollLink>
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
