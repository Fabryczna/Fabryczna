import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-amber-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          {t('contact.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="bg-amber-900 border-2 border-amber-700/40 rounded-none">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-700 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-amber-100">{t('contact.address')}</h3>
                    <p className="text-amber-200 text-lg">{t('contact.addressValue')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-900 border-2 border-amber-700/40 rounded-none">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-700 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-amber-100">{t('contact.phone')}</h3>
                    <a 
                      href="tel:+48692431717" 
                      className="text-amber-200 text-lg hover:text-amber-300 transition-colors"
                    >
                      {t('contact.phoneValue')}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-900 border-2 border-amber-700/40 rounded-none">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-700 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-amber-100">{t('contact.email')}</h3>
                    <a 
                      href="mailto:espresso@kawiarniafabryczna.pl" 
                      className="text-amber-200 text-lg hover:text-amber-300 transition-colors break-all"
                    >
                      {t('contact.emailValue')}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-900 border-2 border-amber-700/40 rounded-none">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-700 p-3 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4 text-amber-100">{t('contact.hours')}</h3>
                    <div className="space-y-2 text-amber-200">
                      <div className="flex justify-between">
                        <span>{t('contact.monday')} - {t('contact.friday')}</span>
                        <span className="font-semibold text-amber-100">{t('contact.weekdayHours')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t('contact.saturday')} - {t('contact.sunday')}</span>
                        <span className="font-semibold text-amber-100">{t('contact.weekendHours')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="h-[600px] rounded-none overflow-hidden shadow-2xl border-4 border-amber-700/40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.4967890123456!2d21.033896!3d52.224307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c0e8b0001%3A0x1234567890abcdef!2sFabryczna%2028%2F30%2C%2000-446%20Warszawa!5e0!3m2!1sen!2spl!4v1234567890123!5m2!1sen!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kawiarnia Fabryczna Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}