import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: `${import.meta.env.BASE_URL}assets/hero-cafe-interior.jpg`, alt: 'Industrial cafe interior' },
    { src: `${import.meta.env.BASE_URL}assets/coffee-latte-art_variant_1.jpg`, alt: 'Specialty coffee' },
    { src: `${import.meta.env.BASE_URL}assets/fresh-pastries_variant_1.jpg`, alt: 'Fresh pastries' },
    { src: `${import.meta.env.BASE_URL}assets/breakfast-food_variant_1.jpg`, alt: 'Breakfast plate' },
    { src: `${import.meta.env.BASE_URL}assets/cafe-atmosphere_variant_1.jpg`, alt: 'Seating area' },
    { src: `${import.meta.env.BASE_URL}assets/barista-coffee_variant_1.jpg`, alt: 'Barista at work' },
  ];

  return (
    <section id="gallery" className="py-24 bg-amber-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-amber-950">
          {t('gallery.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden cursor-pointer group rounded-none shadow-lg"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 via-amber-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border-4 border-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden rounded-none border-4 border-amber-700">
          {selectedImage && (
            <img src={selectedImage} alt="Gallery image" className="w-full h-auto" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}