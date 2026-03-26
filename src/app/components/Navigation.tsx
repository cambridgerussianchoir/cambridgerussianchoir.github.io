import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from 'C:\\Users\\mikha\\Downloads\\cambridgerussianchoir.github.io-main\\cambridgerussianchoir.github.io-main\\src\\assets\\ab9cb9d4be695267765259e5b48ef00b311d2e9d.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'О хоре' },
    { href: '#benefits', label: 'Преимущества' },
    { href: '#process', label: 'Как присоединиться' },
    { href: '#testimonials', label: 'Отзывы' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/80 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Russian Music Choir Cambridge" className="h-12 w-auto" />
            <span className="text-xl font-bold text-gray-900">Хор Русской Музыки</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-red-600 to-amber-500 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Связаться
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-6 py-2 bg-gradient-to-r from-red-600 to-amber-500 text-white rounded-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Связаться
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}