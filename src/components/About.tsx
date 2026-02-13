import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Building2, Shield, Clock } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Award,
      title: 'Mistrz Kominiarski',
      description: 'Pełne kwalifikacje mistrzowskie potwierdzone certyfikatami',
    },
    {
      icon: Building2,
      title: 'Uprawnienia Budowlane',
      description: 'Kompleksowa wiedza techniczna i prawna',
    },
    {
      icon: Shield,
      title: '25 Lat Doświadczenia',
      description: 'Tysiące bezpiecznych instalacji i przeglądów',
    },
    {
      icon: Clock,
      title: 'Terminowość',
      description: 'Szybkie realizacje i elastyczne terminy',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">O Mnie</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1722876720000-f39b65b7d4a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VuaW9yJTIwY29uc3RydWN0aW9uJTIwd29ya2VyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&q=80&w=800"
              alt="Profesjonalny kominiarz przy pracy"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              Nazywam się <span className="font-semibold text-slate-900">Cezary Nitak</span>. Od 25 lat dbam o bezpieczeństwo systemów kominowych w polskich domach. Posiadam tytuł <span className="font-semibold text-slate-900">Mistrza Kominiarskiego</span> oraz pełne uprawnienia budowlane.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Moja nowa działalność to gwarancja osobistego zaangażowania, terminowości i rzetelności, której wymaga praca z ogniem i wentylacją. Każde zlecenie traktuję z najwyższą starannością, wiedząc, że od mojej pracy zależy bezpieczeństwo Twojej rodziny.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Oferuję kompleksową obsługę – od prostych przeglądów po skomplikowane odbiory instalacji gazowych. Zawsze z pełną dokumentacją i profesjonalnym podejściem.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-slate-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
