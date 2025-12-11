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
            Sahip olduğumuz deneyim, geleceğin yapılarını inşa ediyor. Firmamız,
            17 yılı aşkın süredir inşaat ve müteahhitlik sektöründe güvenin,
            kalitenin ve sürdürülebilirliğin temsilcisi olmuştur.
          </p>

          <p>
            Kurulduğumuz günden bu yana hem kamu hem de özel sektörde birçok
            büyük ölçekli projeyi başarıyla hayata geçirerek güçlü bir referans
            ağı oluşturduk. Yüksek mühendislik standartları, iş güvenliğine
            verdiğimiz önem ve detaylara gösterdiğimiz özen ile projelerimizi
            zamanında ve eksiksiz teslim ediyoruz.
          </p>

          <p>
            Her projemizi sadece teknik bir süreç olarak değil, bir vizyonun
            hayata geçmesi olarak görüyoruz. Bu nedenle, işimizi sadece
            tamamlamakla kalmıyor; bulunduğumuz bölgelere katma değer sağlamayı,
            çevreye duyarlı çözümler üretmeyi ve estetik ile fonksiyonelliği bir
            araya getirmeyi amaçlıyoruz.
          </p>

          <p>
            Bugüne kadar edindiğimiz bilgi birikimi ve deneyimle, geleceğe daha
            güçlü adımlarla ilerliyoruz. Kaliteli, güvenli ve uzun ömürlü yaşam
            alanları inşa etme misyonumuzla müşterilerimizin memnuniyetini ön
            planda tutuyoruz.
          </p>
        </div>
      </AnimatedSection>
    </>
  );
};

export default AboutPage;
