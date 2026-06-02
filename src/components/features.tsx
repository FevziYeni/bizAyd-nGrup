import React from "react";
import AnimatedSection from "./animatedSection";
import { Clock3, Handshake, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Handshake,
    title: "Memnuniyet Odaklı Süreç",
    text: "Kat karşılığı ve kentsel dönüşüm projelerinde beklentileri netleştirir, süreci anlaşılır şekilde yönetiriz.",
  },
  {
    icon: Clock3,
    title: "Zamanında Teslim",
    text: "Planlama, saha koordinasyonu ve tedarik adımlarını proje takvimine uygun ilerletmeye odaklanırız.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenilirlik ve Tecrübe",
    text: "40+ yıllık tecrübemizle güvenli, kaliteli ve uzun ömürlü yaşam alanları üretiriz.",
  },
];

const FeaturesSection = () => {
  return (
    <AnimatedSection className="bg-white/58 px-6 py-20 text-slate-950 backdrop-blur-[1px]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase text-gold">
            Neden Biz?
          </p>
          <h2 className="mt-3 text-4xl font-extrabold text-blue-950 md:text-5xl">
            Güven, planlama ve kaliteyi aynı süreçte buluşturuyoruz.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-lg border border-slate-300 bg-white/90 p-6 shadow-lg shadow-slate-900/10"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-blue-950 text-gold">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-blue-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-700">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FeaturesSection;
