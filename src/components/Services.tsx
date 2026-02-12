import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ClipboardCheck, Flame, Home, FileCheck } from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: ClipboardCheck,
      title: 'Okresowe Przeglądy Kominiarskie',
      description: 'Wymagane prawem przeglądy roczne. Wystawiam protokoły honorowane przez ubezpieczycieli i nadzór budowlany.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600',
    },
    {
      icon: Flame,
      title: 'Czyszczenie Przewodów',
      description: 'Mechaniczne usuwanie sadzy i gniazd. Zabezpiecz swój dom przed pożarem sadzy i zaczadzeniem.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600',
    },
    {
      icon: Home,
      title: 'Odbiory do Gazowni',
      description: 'Kompleksowe sprawdzanie wentylacji i przewodów spalinowych dla nowych i modernizowanych instalacji gazowych.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600',
    },
    {
      icon: FileCheck,
      title: 'System CEB (Ubezpieczenia)',
      description: 'Wpisy do Centralnej Ewidencji Emisyjności Budynków – niezbędne, aby Twoje ubezpieczenie domu działało.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Oferta</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Kompleksowe usługi kominiarskie z pełną dokumentacją i gwarancją jakości
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-orange-50 border-2 border-orange-200 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Potrzebujesz innej usługi kominiarskiej?
          </h3>
          <p className="text-lg text-slate-700 mb-6">
            Zadzwoń i zapytaj – doświadczenie pozwala mi realizować nietypowe zlecenia
          </p>
          <a
            href="tel:+48504035984"
            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-md hover:bg-orange-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Zadzwoń: 504 035 984
          </a>
        </motion.div>
      </div>
    </section>
  );
}
