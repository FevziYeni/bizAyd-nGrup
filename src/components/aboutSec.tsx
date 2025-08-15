import React from "react";
import hakkimizda from "../assets/hakkımızda.jpg";
import AnimatedSection from "./animatedSection";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white p-8 py-20">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
          Hakkımızda - Yeni RM İnşaat
        </h1>
        <img
          src={hakkimizda}
          alt="Yeni RM İnşaat Bayrampaşa Hakkımızda Görseli"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <div>
          <p className="mb-4">
            Bayrampaşa ve İstanbul’da 17 yılı aşkın süredir faaliyet gösteren
            Yeni RM İnşaat, kentsel dönüşüm ve kat karşılığı projelerde öncü bir
            firma olarak birçok büyük ölçekli projeyi başarıyla tamamlamıştır.
            Kaliteden ödün vermeyen anlayışımız ve sürdürülebilir yapı
            yaklaşımımızla, yalnızca binalar değil; güven, memnuniyet ve uzun
            ömürlü yaşam alanları inşa ediyoruz.
          </p>
          <div className="mt-6 space-x-4">
            <button
              className="bg-black px-6 py-2 rounded-md hover:bg-gold hover:text-black transition"
              onClick={() => navigate("/about")}
              aria-label="Hakkımızda sayfasına git"
            >
              Daha Fazla Bilgi
            </button>
            <button
              className="border border-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition"
              onClick={() => navigate("/contact")}
              aria-label="İletişim sayfasına git"
            >
              İletişime Geç
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
