import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, FileCheck2, Home } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Kentsel Dönüşüm",
    text: "Mevcut yapının değerlendirilmesinden kontrollü uygulamaya kadar planlı dönüşüm süreci.",
    linkLabel: "İstanbul kentsel dönüşüm hizmeti",
    to: "/istanbul-kentsel-donusum",
  },
  {
    icon: FileCheck2,
    title: "Kat Karşılığı İnşaat",
    text: "Arsa, imar koşulları ve malik beklentilerine göre şeffaf ve uygulanabilir proje modeli.",
    linkLabel: "Kat karşılığı proje yaklaşımımız",
    to: "/istanbul-kentsel-donusum",
  },
  {
    icon: Home,
    title: "Konut ve Anahtar Teslim Projeler",
    text: "Planlamadan uygulamaya, saha koordinasyonundan teslime kadar uçtan uca yapı çözümü.",
    linkLabel: "Tamamlanan inşaat projeleri",
    to: "/projects",
  },
];

const AydinInsaatSection: React.FC = () => (
  <section className="bg-white px-6 py-20">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Biz Aydın Grup Yapı
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-blue-950 md:text-5xl">
            Aydın İnşaat ile İstanbul genelinde güvenli yapı çözümleri
          </h2>
        </div>
        <div className="space-y-4 leading-8 text-slate-700">
          <p>
            Biz Aydın Grup Yapı, İstanbul'da “Aydın İnşaat” adıyla aranan
            kentsel dönüşüm, kat karşılığı ve konut projesi ihtiyaçlarına 40
            yılı aşan saha tecrübesiyle çözüm sunar.
          </p>
          <p>
            Güngören merkezli olmamıza rağmen hizmet alanımız tek bir bölgeyle
            sınırlı değildir. Avrupa ve Anadolu Yakası'nın tüm ilçelerindeki
            uygun projeleri yerinde değerlendirir, teknik ve ticari süreci
            anlaşılır biçimde planlarız.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map(({ icon: Icon, title, text, linkLabel, to }) => (
          <article
            key={title}
            className="flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50 p-7"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-gold">
              <Icon size={24} aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-xl font-black text-blue-950">{title}</h3>
            <p className="mt-3 flex-1 leading-7 text-slate-700">{text}</p>
            <Link
              to={to}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-950 underline decoration-gold decoration-2 underline-offset-4"
            >
              {linkLabel}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/sikca-sorulan-sorular"
          className="inline-flex items-center gap-2 font-bold text-blue-950"
        >
          İnşaat ve dönüşüm süreciyle ilgili sık sorulan sorular
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
);

export default AydinInsaatSection;
