import React from "react";
import hakkimizda from "../assets/hakkımızda.jpg";
import AnimatedSection from "./animatedSection";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <AnimatedSection className="bg-white/50 px-6 py-20 backdrop-blur-[1px]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative overflow-hidden rounded-lg shadow-2xl shadow-slate-900/15">
          <img
            src={hakkimizda}
            alt="Biz Aydın Grup hakkımızda görseli"
            className="h-[360px] w-full object-cover md:h-[480px]"
          />
          <div className="absolute inset-0 bg-blue-950/35" />
          <div className="absolute bottom-5 left-5 rounded-lg bg-white/95 p-5 shadow-xl">
            <strong className="block text-3xl font-extrabold text-blue-950">
              40+
            </strong>
            <span className="text-sm font-semibold text-slate-600">
              Yıllık inşaat tecrübesi
            </span>
          </div>
        </div>

        <div className="rounded-lg border border-white/70 bg-white/75 p-6 text-slate-900 shadow-xl shadow-slate-900/10">
          <p className="text-sm font-bold uppercase text-gold">Hakkımızda</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-blue-950 md:text-5xl">
            İstanbul’da güven veren yapı çözümleri.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-800">
            Biz Aydın Grup Yapı, konut inşaatı, kentsel dönüşüm, kat
            karşılığı proje ve anahtar teslim uygulamalarda planlı, kaliteli ve
            şeffaf bir süreç yönetir.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "Güvenli yapı yaklaşımı",
              "Zamanında teslim",
              "Kaliteli malzeme seçimi",
              "Net süreç iletişimi",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-gold" size={20} />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              className="inline-flex items-center gap-2 rounded-md bg-blue-950 px-6 py-3 font-semibold text-white transition hover:bg-gold hover:text-black"
              onClick={() => navigate("/about")}
              aria-label="Hakkımızda sayfasına git"
            >
              Daha Fazla Bilgi
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            <button
              className="rounded-md border border-blue-950 px-6 py-3 font-semibold text-blue-950 transition hover:bg-blue-950 hover:text-white"
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
