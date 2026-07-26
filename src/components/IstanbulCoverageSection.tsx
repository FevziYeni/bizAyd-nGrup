import React from "react";
import { ArrowRight, Building2, MapPin, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./animatedSection";

const IstanbulCoverageSection: React.FC = () => (
  <AnimatedSection className="bg-[#f3f1eb] px-6 py-20 md:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="section-eyebrow">İstanbul Genelinde Hizmet</p>
          <h2 className="section-title mt-4">
            İstanbul’un her noktasında projeniz için yanınızdayız.
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:pb-2">
          Avrupa Yakası ve Anadolu Yakası ayrımı olmadan İstanbul’un 39
          ilçesinde kentsel dönüşüm, kat karşılığı inşaat, konut ve anahtar
          teslim proje taleplerini yerinde değerlendiriyoruz.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {[
          {
            title: "Avrupa Yakası",
            text: "Güngören merkezli saha ekibimizle Avrupa Yakası’nın tüm ilçelerinde bina, arsa ve proje değerlendirmesi.",
          },
          {
            title: "Anadolu Yakası",
            text: "Kartal’daki proje tecrübemizle Anadolu Yakası genelinde konut ve kentsel dönüşüm çözümleri.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="group relative overflow-hidden rounded-2xl bg-blue-950 p-8 text-white shadow-xl md:p-10"
          >
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-gold/15" />
            <MapPin className="text-gold" size={30} aria-hidden="true" />
            <h3 className="mt-7 text-3xl font-black">{item.title}</h3>
            <p className="mt-4 max-w-xl leading-8 text-slate-300">{item.text}</p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <ShieldCheck size={17} className="text-gold" aria-hidden="true" />
                Yerinde değerlendirme
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Building2 size={17} className="text-gold" aria-hidden="true" />
                Uçtan uca proje yönetimi
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-9 flex flex-col items-start justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:flex-row md:items-center">
        <div>
          <strong className="block text-xl font-black text-blue-950">
            Projeniz İstanbul’un neresinde olursa olsun değerlendirelim.
          </strong>
          <span className="mt-1 block text-sm text-slate-600">
            Yapının veya arsanın konumuna göre saha görüşmesi planlayalım.
          </span>
        </div>
        <Link
          to="/istanbul-kentsel-donusum"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-3 font-black text-blue-950 transition hover:bg-blue-950 hover:text-white"
        >
          Hizmetleri inceleyin
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </div>
  </AnimatedSection>
);

export default IstanbulCoverageSection;
