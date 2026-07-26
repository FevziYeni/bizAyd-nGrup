import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "../config/site";

const HeroSection: React.FC = () => (
  <section className="relative min-h-[760px] overflow-hidden bg-blue-950 text-white">
    <img
      src="/hero.webp"
      alt="Biz Aydın Grup İstanbul kentsel dönüşüm ve konut projesi"
      className="absolute inset-0 h-full w-full object-cover object-center"
      width={1620}
      height={1080}
    />
    <div className="absolute inset-0 bg-blue-950/55" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,38,0.98)_0%,rgba(5,18,38,0.88)_42%,rgba(5,18,38,0.35)_75%,rgba(5,18,38,0.2)_100%)]" />
    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-blue-950/80 to-transparent" />

    <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-24">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold backdrop-blur">
          <MapPin size={16} aria-hidden="true" />
          Güngören merkezli • İstanbul genelinde
        </div>

        <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.08] tracking-[-0.035em] sm:text-5xl md:text-7xl">
          Aydın İnşaat ile İstanbul’da güvenli kentsel dönüşüm
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
          {siteConfig.legalName}, Aydın İnşaat hizmetleri kapsamında 40 yılı
          aşan saha tecrübesiyle kentsel dönüşüm, kat karşılığı inşaat ve
          anahtar teslim konut projelerini şeffaf ve planlı bir süreçle hayata
          geçirir.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 font-bold text-blue-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
          >
            Projenizi değerlendirelim
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white hover:text-blue-950"
          >
            Projelerimizi inceleyin
          </Link>
        </div>

        <div className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              value: "40+ Yıl",
              label: "İnşaat tecrübesi",
            },
            {
              icon: Building2,
              value: "15+ Proje",
              label: "Tamamlanan uygulama",
            },
            {
              icon: CheckCircle2,
              value: "Uçtan Uca",
              label: "Planlı proje yönetimi",
            },
          ].map(({ icon: Icon, value, label }) => (
            <div
              key={value}
              className="flex items-center gap-3 border-l border-white/20 py-2 pl-4"
            >
              <Icon className="shrink-0 text-gold" size={24} aria-hidden="true" />
              <div>
                <strong className="block text-sm font-extrabold">{value}</strong>
                <span className="text-xs text-slate-300">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  </section>
);

export default HeroSection;
