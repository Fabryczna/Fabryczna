import { useTranslation } from 'react-i18next';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Coffee, Croissant, UtensilsCrossed, Wine } from 'lucide-react';

export default function Menu() {
  const { t } = useTranslation();

  const menuItems = [
    {
      icon: Coffee,
      title: t('menu.coffee'),
      description: t('menu.coffeeDesc'),
      image: '/assets/coffee-latte-art.jpg',
    },
    {
      icon: UtensilsCrossed,
      title: t('menu.food'),
      description: t('menu.foodDesc'),
      image: '/assets/breakfast-food.jpg',
    },
    {
      icon: Croissant,
      title: t('menu.pastries'),
      description: t('menu.pastriesDesc'),
      image: '/assets/fresh-pastries.jpg',
    },
    {
      icon: Wine,
      title: t('menu.drinks'),
      description: t('menu.drinksDesc'),
      image: '/assets/barista-coffee.jpg',
    },
  ];

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-amber-950">
          {t('menu.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-amber-200 rounded-none group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="bg-amber-700 p-3 rounded-full">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader className="bg-amber-50 p-6">
                  <CardTitle className="text-2xl mb-3 text-amber-950">{item.title}</CardTitle>
                  <CardDescription className="text-base text-amber-900 leading-relaxed">
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