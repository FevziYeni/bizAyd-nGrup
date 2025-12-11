import React from "react";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "../components/animatedSection";

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>İletişim | Yeni RM İnşaat</title>
        <meta
          name="description"
          content="Yeni RM İnşaat ile iletişime geçin. Bayrampaşa / İstanbul'da ofisimiz, telefon ve e-posta ile bize ulaşabilirsiniz."
        />
        <meta
          name="keywords"
          content="İletişim, Yeni RM İnşaat, Bayrampaşa, telefon, e-posta, inşaat firması"
        />
      </Helmet>

      <AnimatedSection className="py-20 px-6 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-12 text-center text-blue-900">
          İletişim
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* İletişim Bilgileri */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">Adres</h2>
              <p>Bayrampaşa / İstanbul</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Telefon</h2>
              <a
                href="tel:+905323322960"
                className="text-yellow-400 hover:underline"
              >
                +90 (532) 405 46 77
              </a>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">E-posta</h2>
              <a
                href="mailto:yenirminsaat@hotmail.com"
                className="text-yellow-400 hover:underline"
              >
                yenirminsaat@hotmail.com
              </a>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="tel:+905323322960"
                className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gold transition duration-300"
              >
                Ara
              </a>
              <a
                href="mailto:yenirminsaat@hotmail.com"
                className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-gold hover:text-black transition duration-300"
              >
                E-posta Gönder
              </a>
            </div>
          </div>

          {/* Harita */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Yeni RM İnşaat Konumu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.5223772259897!2d28.898350674991203!3d41.057572816389744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab07ea082e8e9%3A0x1d0b3843b0dd3de7!2zS2FydGFsdGVwZSwgw5xyZ8O8cGzDvCBDZC4sIDM0MDQwIEJheXJhbXBhxZ9hL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1751897095025!5m2!1str!2str"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default ContactPage;
