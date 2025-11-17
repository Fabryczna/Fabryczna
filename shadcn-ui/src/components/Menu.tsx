import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, Cake, Palette, Music } from 'lucide-react';

export default function Menu() {
  const { t } = useTranslation();

  const menuItems = [
    {
      icon: Coffee,
      title: t('menu.coffee'),
      description: t('menu.coffeeDesc'),
      image: '/assets/gallery-coffee-pour_variant_1.jpg',
    },
    {
      icon: Cake,
      title: t('menu.pastries'),
      description: t('menu.pastriesDesc'),
      image: '/assets/gallery-pastries.jpg',
    },
    {
      icon: Palette,
      title: t('menu.ceramics'),
      description: t('menu.ceramicsDesc'),
      image: '/assets/gallery-ceramics.jpg',
    },
    {
      icon: Music,
      title: t('menu.events'),
      description: t('menu.eventsDesc'),
      image: '/assets/hero-cafe-interior.jpg',
    },
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t('menu.title')}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-6 w-6" />
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base text-gray-700">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}