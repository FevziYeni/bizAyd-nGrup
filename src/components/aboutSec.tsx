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
            Biz Aydın İnşaat Mimarlık İstanbul’da faaliyet gösteren bir inşaat
            firmasıdır. Konut inşaatı, kentsel dönüşüm, villa yapımı, anahtar
            teslim projeler ve tadilat hizmetlerinde zamanında teslim, kaliteli
            malzeme ve müşteri memnuniyeti işimizin temelini oluşturur.
            Özellikle kentsel dönüşüm projelerinde sahip olduğumuz deneyimle
            güvenilir çözümler sunuyoruz. Amacımız; estetik, sağlam ve işlevsel
            yapılar inşa ederek yaşam alanlarına değer katmaktır.
          </p>
          <div className="mt-4 space-x-4">
            <button
              className="bg-black px-6 py-2 rounded-md text-white hover:bg-gold hover:text-black transition"
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
