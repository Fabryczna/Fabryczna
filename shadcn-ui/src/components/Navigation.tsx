import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { key: 'home', id: '#home' },
    { key: 'about', id: '#about' },
    { key: 'menu', id: '#menu' },
    { key: 'gallery', id: '#gallery' },
    { key: 'contact', id: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-amber-950/95 backdrop-blur-sm shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-3 group"
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/logo.png`}
              alt="Kawiarnia Fabryczna"
              className="h-12 w-12 rounded-full border-2 border-amber-700/50 group-hover:border-amber-700 transition-all"
            />
            <span className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
              Kawiarnia Fabryczna
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-amber-300 transition-colors font-medium tracking-wide"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
            <LanguageSwitcher />
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-amber-950/95 backdrop-blur-sm border-t border-amber-700/30">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-amber-300 transition-colors font-medium text-left px-4 py-2"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
              <div className="px-4 py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}