import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from 'figma:asset/ab9cb9d4be695267765259e5b48ef00b311d2e9d.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Russian Music Choir Cambridge" className="h-14 w-auto" />
            </a>
            <p className="text-gray-600 text-sm leading-relaxed">
              Сохраняем традиции русской хоровой музыки в Кембридже с 1979 года
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  О хоре
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  Как присоединиться
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  Расписание репетиций
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  Концерты
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                  Фотогалерея
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Cambridge, UK</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@russianchoir.co.uk" className="hover:text-red-600 transition-colors">
                  info@russianchoir.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+441234567890" className="hover:text-red-600 transition-colors">
                  +44 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} Russian Music Choir Cambridge. Все права защищены.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="https://youtube.com/@RussianMusicChoirCambridge"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-600 transition-all duration-300 hover:scale-110"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-600 transition-all duration-300 hover:scale-110"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-600 transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}