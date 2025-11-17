import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Heart, Users } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t('about.title')}</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-8 w-8" />
              <h3 className="text-2xl font-bold">{t('about.mission')}</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{t('about.missionText')}</p>
          </div>

          <div>
            <img
              src="/assets/about-team.jpg"
              alt="toMy Kawiarnia Team"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="order-2 md:order-1">
            <img
              src="/assets/gallery-coffee-pour.jpg"
              alt="Coffee preparation"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-8 w-8" />
              <h3 className="text-2xl font-bold">{t('about.story')}</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{t('about.storyText')}</p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="h-8 w-8" />
            <h3 className="text-2xl font-bold">{t('about.awards')}</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-black/10 hover:border-black/30 transition-colors">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-yellow-600" />
                <p className="font-semibold">{t('about.award1')}</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-black/10 hover:border-black/30 transition-colors">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-yellow-600" />
                <p className="font-semibold">{t('about.award2')}</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-black/10 hover:border-black/30 transition-colors">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-yellow-600" />
                <p className="font-semibold">{t('about.award3')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}