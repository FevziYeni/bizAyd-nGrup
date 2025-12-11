import React from "react";
import iletişim from "../assets/iletişim.jpg";
import AnimatedSection from "./animatedSection";

const ContactSection = () => {
  return (
    <AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white p-8 py-20">
        <div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r text-blue-900 bg-clip-text ">
            İletişim
          </h1>
          <div className="space-y-6 text-black">
            <div>
              <h2 className="text-lg font-semibold">Adres</h2>
              <p aria-label="Yeni RM İnşaat Bayrampaşa Ofisi Adresi">
                İstanbul/Bayrampaşa’da yer alan ofisimiz, ulaşım açısından
                oldukça elverişli.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Telefon</h2>
              <p aria-label="Telefon Numarası">+90 (532) 405 46 77</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">E-posta</h2>
              <p aria-label="E-posta Adresi">yenirminsaat@hotmail.com</p>
            </div>
          </div>
          <div className="mt-6 space-x-4">
            <a
              href="tel:+905323322960"
              aria-label="Telefonla aramak için tıkla"
            >
              <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gold transition">
                Ara
              </button>
            </a>
            <a
              href="mailto:yenirminsaat@hotmail.com"
              aria-label="E-posta göndermek için tıkla"
            >
              <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-gold hover:text-black transition">
                E-posta Gönder
              </button>
            </a>
          </div>
        </div>
        <img
          src={iletişim}
          alt="Yeni RM İnşaat Bayrampaşa Ofisi İletişim Görseli"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
