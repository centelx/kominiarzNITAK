import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult('Wysyłanie...');

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append('access_key', '4343a106-203d-4279-9980-da05e02f360f');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Wiadomość została wysłana pomyślnie! Oddzwonię wkrótce.');
        form.reset();
      } else {
        console.error('Error', data);
        setResult(data.message);
      }
    } catch (error) {
      console.error('Fetch error', error);
      setResult('Wystąpił błąd. Spróbuj ponownie później lub zadzwoń.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '504 035 984',
      link: 'tel:+48504035984',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'cezarynitakk@gmail.com',
      link: 'mailto:cezarynitakk@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'ul. Szeroka Droga 19 C, 26-600 Radom',
      link: 'https://maps.google.com/?q=Szeroka+Droga+19C+Radom',
    },
    {
      icon: Clock,
      title: 'Godziny pracy',
      content: 'Pn-Pt: 8:00 - 16:00',
      link: null,
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Kontakt</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Zamów usługę lub zapytaj o termin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Zakład Kominiarski Cezary NITAK
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <span className="text-slate-700">{info.content}</span>
                  );

                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                          <Icon className="h-6 w-6 text-orange-600" />
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{info.title}</p>
                        <div className="text-lg">{content}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 text-lg mb-3">Obszar działania</h4>
              <p className="text-slate-700">
                Radom i okolice (Przysucha, Szydłowiec, Zwoleń, Kozienice, Iłża i inne)
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Formularz kontaktowy</h3>
              <form onSubmit={onSubmit} className="space-y-4">
                <input
                  type="hidden"
                  name="subject"
                  value="Nowe zapytanie ze strony Kominiarz Radom"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Imię i Nazwisko
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Numer Telefonu
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Wiadomość / Rodzaj usługi
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-md hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij Wiadomość'}
                </button>

                {result && (
                  <p className="text-center text-sm font-medium mt-4 text-slate-700 bg-slate-100 p-3 rounded-md">
                    {result}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
