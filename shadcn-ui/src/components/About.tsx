import { useTranslation } from 'react-i18next';
import { Coffee, Heart, Users } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-amber-950">
          {t('about.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-700 text-white mb-6">
              <Coffee className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-amber-950">Specialty Coffee</h3>
            <p className="text-amber-900 leading-relaxed">
              {t('about.mission')}
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-700 text-white mb-6">
              <Heart className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-amber-950">Pasja do Kawy</h3>
            <p className="text-amber-900 leading-relaxed">
              {t('about.story')}
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-700 text-white mb-6">
              <Users className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-amber-950">Industrialny Klimat</h3>
            <p className="text-amber-900 leading-relaxed">
              {t('about.atmosphere')}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 rounded-none overflow-hidden shadow-2xl">
            <img
              src={`${import.meta.env.BASE_URL}assets/cafe-atmosphere.jpg`}
              alt="Cafe interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-950/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}