import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: '/assets/510967344_17929798920065578_6245359192033336503_n_variant_1.jpg', alt: 'Cafe interior' },
    { src: '/assets/482927620_17917322583065578_1830750573849745121_n_variant_1.jpg', alt: 'Coffee preparation' },
    { src: '/assets/488421804_17920629057065578_4344392129228648134_n_variant_1.jpg', alt: 'Pastries and desserts' },
    { src: '/assets/504212594_17928361890065578_706424466558488474_n_variant_1.jpg', alt: 'Ceramic workshop' },
    { src: '/assets/496310396_17924261931065578_590266168430374412_n.jpg', alt: 'Our team' },
    { src: '/assets/497222474_17924708028065578_6264275441268322953_n.jpg', alt: 'Cafe atmosphere' },
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