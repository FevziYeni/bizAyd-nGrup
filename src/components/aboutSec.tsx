import React from "react";
import hakkimizda from "../assets/hakkımızda.jpg";
import AnimatedSection from "./animatedSection";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-white p-8 py-20">
        {/* Sol Metin Alanı */}
        <div className="flex flex-col justify-center space-y-4 text-black">
          <h1 className="text-6xl font-bold  text-blue-900 bg-clip-text ">
            Hakkımızda
          </h1>
          <p className="py-8">
            Güngören / İstanbul’da 17 yılı aşkın süredir faaliyet gösteren Yeni
            RM İnşaat, kentsel dönüşüm ve kat karşılığı projelerde öncü bir
            firma olarak birçok büyük ölçekli projeyi başarıyla tamamlamıştır.
            Kaliteden ödün vermeyen anlayışımız ve sürdürülebilir yapı
            yaklaşımımızla, yalnızca binalar değil; güven, memnuniyet ve uzun
            ömürlü yaşam alanları inşa ediyoruz.
          </p>
          <div className="mt-4 space-x-4">
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

        {/* Sağ Görsel Alanı */}
        <div className="flex justify-center items-start">
          <img
            src={hakkimizda}
            alt="Yeni RM İnşaat Bayrampaşa Hakkımızda Görseli"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
