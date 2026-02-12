import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Marek Z.',
      text: 'Pan Cezary to fachowiec starej daty – w najlepszym tego słowa znaczeniu. Punktualnie, czysto i z pełną dokumentacją.',
      rating: 5,
    },
    {
      name: 'Anna K.',
      text: 'Szybki termin realizacji przeglądu. Wszystko wyjaśnione, protokół do ubezpieczalni wystawiony od ręki. Polecam!',
      rating: 5,
    },
    {
      name: 'Piotr W.',
      text: 'Korzystamy z usług od lat. Pełen profesjonalizm i dbałość o porządek w domu podczas czyszczenia.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Opinie Klientów</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Zaufało mi już setki zadowolonych klientów w Radomiu i okolicach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-slate-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
            >
              <div className="flex items-center justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-lg mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="text-center">
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-slate-600 mb-6">
            Dołącz do grona zadowolonych klientów
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="bg-orange-600 text-white px-8 py-4 rounded-md hover:bg-orange-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Zamów Usługę
          </button>
        </motion.div>
      </div>
    </section>
  );
}
