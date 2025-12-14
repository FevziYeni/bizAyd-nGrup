import React from "react";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "../components/animatedSection";

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Hakkımızda | Yeni RM İnşaat</title>
        <meta
          name="description"
          content="Yeni RM İnşaat, 17 yıllık tecrübesiyle güvenli, kaliteli ve sürdürülebilir inşaat projeleri sunar. İstanbul'da birçok büyük ölçekli projeyi başarıyla tamamlamıştır."
        />
        <meta
          name="keywords"
          content="Hakkımızda, Yeni RM İnşaat, İstanbul inşaat firmaları, müteahhit, toplu konut projeleri, güvenli yapılar, inşaat tecrübesi"
        />
      </Helmet>

      <AnimatedSection className="py-20 px-6 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center text-blue-900">
          Hakkımızda
        </h1>

        <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed text-black">
          <p>
            Biz Aydın İnşaat Mimarlık İstanbul’da faaliyet gösteren bir inşaat
            firmasıdır. Konut inşaatı, kentsel dönüşüm, villa yapımı, anahtar
            teslim projeler ve tadilat hizmetlerinde zamanında teslim, kaliteli
            malzeme ve müşteri memnuniyeti işimizin temelini oluşturur.
            Özellikle kentsel dönüşüm projelerinde sahip olduğumuz deneyimle
            güvenilir çözümler sunuyoruz. Amacımız; estetik, sağlam ve işlevsel
            yapılar inşa ederek yaşam alanlarına değer katmaktır.
          </p>
        </div>
      </AnimatedSection>
    </>
  );
};

export default AboutPage;
