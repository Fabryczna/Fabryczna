import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/Hero /images/HeroBanner.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <img
          src="/images/Cafe.jpg"
          alt="toMy Kawiarnia Logo"
          className="h-24 w-24 md:h-32 md:w-32 mx-auto mb-6 drop-shadow-2xl"
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">{t('hero.subtitle')}</p>
        <Button
          onClick={scrollToAbout}
          size="lg"
          className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6"
        >
          {t('hero.cta')}
        </Button>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}