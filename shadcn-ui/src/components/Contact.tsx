import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const { t } = useTranslation();

  const openingHours = [
    { day: t('contact.monday'), hours: t('contact.hours1') },
    { day: t('contact.tuesday'), hours: t('contact.hours1') },
    { day: t('contact.wednesday'), hours: t('contact.hours1') },
    { day: t('contact.thursday'), hours: t('contact.hours1') },
    { day: t('contact.friday'), hours: t('contact.hours1') },
    { day: t('contact.saturday'), hours: t('contact.hours1') },
    { day: t('contact.sunday'), hours: t('contact.hours2') },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t('contact.title')}</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">{t('contact.address')}</h3>
                    <p className="text-gray-700">{t('contact.addressValue')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">{t('contact.phone')}</h3>
                    <a href="tel:+48530381052" className="text-gray-700 hover:underline">
                      +48 530 381 052
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div className="w-full">
                    <h3 className="font-bold text-xl mb-4">{t('contact.hours')}</h3>
                    <div className="space-y-2">
                      {openingHours.map((item, index) => (
                        <div key={index} className="flex justify-between text-gray-700">
                          <span>{item.day}</span>
                          <span className="font-medium">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="font-bold text-xl mb-4">{t('contact.social')}</h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="flex-1"
                >
                  <a
                    href="https://www.facebook.com/toMyKawiarniaWarszawa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-5 w-5 mr-2" />
                    Facebook
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="flex-1"
                >
                  <a
                    href="https://www.instagram.com/tomy_kawiarnia_warszawa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <Card className="h-full">
              <CardContent className="p-0 h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.5678901234567!2d21.012345678901234!3d52.229876543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8b0b0b0b0b%3A0x1234567890abcdef!2sAl.%20Jerozolimskie%2042%2C%2000-024%20Warszawa!5e0!3m2!1sen!2spl!4v1234567890123!5m2!1sen!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="toMy Kawiarnia Location"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}