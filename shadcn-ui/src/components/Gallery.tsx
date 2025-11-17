import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: '/assets/hero-cafe-interior_variant_1.jpg', alt: 'Cafe interior' },
    { src: '/assets/gallery-coffee-pour_variant_2.jpg', alt: 'Coffee preparation' },
    { src: '/assets/gallery-pastries_variant_1.jpg', alt: 'Pastries and desserts' },
    { src: '/assets/gallery-ceramics_variant_1.jpg', alt: 'Ceramic workshop' },
    { src: '/assets/about-team_variant_1.jpg', alt: 'Our team' },
    { src: '/assets/hero-cafe-interior_variant_2.jpg', alt: 'Cafe atmosphere' },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t('gallery.title')}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <img src={selectedImage} alt="Gallery image" className="w-full h-auto" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}