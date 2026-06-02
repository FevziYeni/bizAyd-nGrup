import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg_image.jpg";
import AnimatedSection from "./animatedSection";
import { siteConfig } from "../config/site";
import { ArrowRight, Building2, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[680px] w-full overflow-hidden">
      <img
        src={bgImage}
        alt="Biz Aydın Grup İstanbul kentsel dönüşüm ve konut projeleri"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-blue-950/70" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.9),rgba(2,6,23,0.58),rgba(2,6,23,0.18))]" />

      <div className="relative z-20 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-24 text-white">
        <div className="max-w-3xl">
          <AnimatedSection>
            <p className="text-sm font-bold uppercase text-gold">
              {siteConfig.legalName}
            </p>
            <h1 className="mt-4 text-5xl font-extrabold leading-tight md:text-7xl">
              {siteConfig.slogan}
            </h1>
          </AnimatedSection>

          <AnimatedSection>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/85">
              40 yıllık tecrübeyle İstanbul’da konut inşaatı, kentsel dönüşüm,
              kat karşılığı ve anahtar teslim proje hizmetleri sunuyoruz.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/projects")}
                aria-label="Biz Aydın Grup projelerini görüntüle"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-black transition hover:bg-white"
              >
                Projelerimizi Gör
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              <button
                onClick={() => navigate("/contact")}
                aria-label="Biz Aydın Grup ile iletişime geç"
                className="rounded-md border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-950"
              >
                İletişime Geç
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                <ShieldCheck className="text-gold" size={24} />
                <span className="font-semibold">Güvenli yapı yaklaşımı</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                <Building2 className="text-gold" size={24} />
                <span className="font-semibold">Kat karşılığı projeler</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
