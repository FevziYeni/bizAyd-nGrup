import React from "react";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "../components/animatedSection";
import ContactForm from "../components/ContactForm";
import { siteConfig } from "../config/site";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>İletişim | Biz Aydın Grup</title>
        <meta
          name="description"
          content="Biz Aydın Grup ile iletişime geçin. İstanbul’daki kentsel dönüşüm, kat karşılığı ve konut projeleriniz için telefon, WhatsApp, e-posta veya form üzerinden bize ulaşın."
        />
        <meta
          name="keywords"
          content="Biz Aydın Grup iletişim, İstanbul inşaat firması, kentsel dönüşüm iletişim, telefon, WhatsApp, e-posta"
        />
        <link rel="canonical" href={`${siteConfig.url}/contact`} />
      </Helmet>

      <AnimatedSection className="px-6 py-24 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-12 text-center text-blue-900">
          İletişim
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-6 rounded-lg bg-white/90 p-6 text-slate-950 shadow-xl">
            <div className="flex gap-4">
              <MapPin className="mt-1 text-gold" aria-hidden="true" />
              <div>
                <h2 className="text-xl font-semibold text-blue-950">Adres</h2>
                <p>{siteConfig.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 text-gold" aria-hidden="true" />
              <div>
                <h2 className="text-xl font-semibold text-blue-950">
                  Telefon
                </h2>
                <a href={`tel:${siteConfig.phoneHref}`} className="hover:underline">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-1 text-gold" aria-hidden="true" />
              <div>
                <h2 className="text-xl font-semibold text-blue-950">
                  E-posta
                </h2>
                <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-black px-4 py-3 font-semibold text-white transition hover:bg-blue-950"
              >
                <Phone size={18} aria-hidden="true" />
                Ara
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 font-semibold text-white transition hover:bg-[#1ebe5d]"
              >
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-950 px-4 py-3 font-semibold text-white transition hover:bg-gold hover:text-black"
              >
                <Mail size={18} aria-hidden="true" />
                E-posta
              </a>
            </div>

            <iframe
              title="Biz Aydın Grup ofis konumu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.647915446364!2d28.86589467512451!3d41.0110788713501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb30d7f1472d%3A0xc73a75c70dcef03d!2zSGF6bmVkYXIsIFBhbmF5xLFyIFNvay4gMyBBLCAzNDE2MCBHw7xuZ8O2cmVuL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1765727738436!5m2!1str!2str"
              className="h-72 w-full rounded-lg border-0"
              loading="lazy"
            />
          </div>

          <ContactForm />
        </div>
      </AnimatedSection>
    </>
  );
};

export default ContactPage;
