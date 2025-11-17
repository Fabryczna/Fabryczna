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
          backgroundImage: `url(${import.meta.env.BASE_URL}assets/hero-cafe-interior.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/70 via-stone-900/60 to-stone-950/80" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <img
          src={`${import.meta.env.BASE_URL}assets/logo.png`}
          alt="Kawiarnia Fabryczna Logo"
          className="h-28 w-28 md:h-36 md:w-36 mx-auto mb-8 rounded-full border-4 border-amber-700/40 drop-shadow-2xl"
        />
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-lg tracking-tight">
          {t('hero.title')}
        </h1>
        <p className="text-2xl md:text-3xl mb-10 drop-shadow-md font-light tracking-wide text-amber-200">
          {t('hero.subtitle')}
        </p>
        <Button
          onClick={scrollToAbout}
          size="lg"
          className="bg-amber-700 hover:bg-amber-800 text-white text-lg px-10 py-7 rounded-none font-semibold tracking-wide shadow-xl transition-all duration-300 hover:scale-105"
        >
          {t('hero.cta')}
        </Button>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-amber-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </section>
  );
}