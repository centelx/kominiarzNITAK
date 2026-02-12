import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Powrót na stronę główną</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12"
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Polityka Prywatności</h1>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Administrator danych</h2>
              <p>
                Administratorem danych osobowych jest <strong>Zakład Kominiarski Cezary NITAK</strong>,
                ul. Szeroka Droga 19 C, 26-600 Radom, NIP: 9481813306.
              </p>
              <p className="mt-2">
                Kontakt: <a href="mailto:cezarynitakk@gmail.com" className="text-orange-600 hover:text-orange-700">cezarynitakk@gmail.com</a> lub telefonicznie: <a href="tel:+48504035984" className="text-orange-600 hover:text-orange-700">504 035 984</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Cel przetwarzania danych</h2>
              <p>
                Dane osobowe przekazane za pośrednictwem formularza kontaktowego lub telefonicznie są przetwarzane wyłącznie w celu:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Nawiązania kontaktu i odpowiedzi na zapytanie</li>
                <li>Realizacji zamówionej usługi kominiarskiej</li>
                <li>Wystawienia wymaganej dokumentacji (protokoły, wpisy do CEB)</li>
                <li>Wypełnienia obowiązków prawnych wynikających z przepisów</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Podstawa prawna</h2>
              <p>
                Przetwarzanie danych osobowych odbywa się na podstawie:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Zgody użytkownika (art. 6 ust. 1 lit. a RODO)</li>
                <li>Wykonania umowy lub działań przedumownych (art. 6 ust. 1 lit. b RODO)</li>
                <li>Wypełnienia obowiązku prawnego (art. 6 ust. 1 lit. c RODO)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Zakres danych</h2>
              <p>
                Zbierane dane osobowe obejmują:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Imię i nazwisko</li>
                <li>Numer telefonu</li>
                <li>Adres e-mail (jeśli podany)</li>
                <li>Adres realizacji usługi</li>
                <li>Treść zapytania</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Okres przechowywania danych</h2>
              <p>
                Dane osobowe przechowywane są przez okres:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Realizacji usługi i wypełnienia obowiązków prawnych</li>
                <li>Okresu przedawnienia roszczeń wynikających z umowy</li>
                <li>Do czasu wycofania zgody przez użytkownika</li>
              </ul>
              <p className="mt-2">
                Dokumentacja techniczna (protokoły przeglądów) przechowywana jest zgodnie z wymogami prawa budowlanego – minimum 5 lat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Prawa użytkownika</h2>
              <p>Użytkownik ma prawo do:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Dostępu do swoich danych osobowych</li>
                <li>Sprostowania (poprawiania) danych</li>
                <li>Usunięcia danych (w przypadkach przewidzianych prawem)</li>
                <li>Ograniczenia przetwarzania danych</li>
                <li>Przenoszenia danych</li>
                <li>Wniesienia sprzeciwu wobec przetwarzania danych</li>
                <li>Wycofania zgody w dowolnym momencie</li>
                <li>Wniesienia skargi do organu nadzorczego (UODO)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Odbiorcy danych</h2>
              <p>
                Dane osobowe mogą być przekazywane:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Organom administracji publicznej w zakresie wymaganym prawem</li>
                <li>Zakładom ubezpieczeń (w przypadku realizacji przeglądów dla celów ubezpieczeniowych)</li>
                <li>Dostawcom usług IT (hosting strony internetowej, poczta e-mail)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Pliki cookies</h2>
              <p>
                Strona internetowa nie wykorzystuje plików cookies do śledzenia użytkowników. Mogą być stosowane jedynie niezbędne cookies techniczne zapewniające prawidłowe działanie strony.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Bezpieczeństwo danych</h2>
              <p>
                Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające bezpieczeństwo przetwarzanych danych osobowych, w tym zabezpieczenie przed ich udostępnieniem osobom nieupoważnionym, utratą czy uszkodzeniem.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Kontakt w sprawach RODO</h2>
              <p>
                W sprawach związanych z ochroną danych osobowych prosimy o kontakt:
              </p>
              <p className="mt-2">
                E-mail: <a href="mailto:cezarynitakk@gmail.com" className="text-orange-600 hover:text-orange-700">cezarynitakk@gmail.com</a><br />
                Telefon: <a href="tel:+48504035984" className="text-orange-600 hover:text-orange-700">504 035 984</a>
              </p>
            </section>

            <section className="border-t border-slate-200 pt-6 mt-8">
              <p className="text-sm text-slate-600">
                Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
