import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "../config/site";

const services = [
  {
    icon: ShieldCheck,
    title: "Kentsel Dönüşüm",
    text: "Mevcut yapının yenilenmesinden yeni yaşam alanının teslimine kadar planlı ve güvenli süreç yönetimi.",
  },
  {
    icon: Building2,
    title: "Kat Karşılığı İnşaat",
    text: "Arsanın potansiyeline ve tarafların beklentilerine uygun, şeffaf ve uygulanabilir proje modeli.",
  },
  {
    icon: Home,
    title: "Konut Projeleri",
    text: "Mimari işlev, yapı güvenliği ve uzun vadeli kullanım değerini bir araya getiren konut çözümleri.",
  },
  {
    icon: Hammer,
    title: "Anahtar Teslim Uygulama",
    text: "Planlama, saha koordinasyonu, malzeme ve uygulama adımlarının tek merkezden yönetimi.",
  },
];

const IstanbulServicesPage: React.FC = () => {
  const canonical = `${siteConfig.url}/istanbul-kentsel-donusum`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "İstanbul Kentsel Dönüşüm ve İnşaat Hizmetleri",
    description:
      "İstanbul’un 39 ilçesinde kentsel dönüşüm, kat karşılığı inşaat, konut ve anahtar teslim proje hizmetleri.",
    url: canonical,
    serviceType: [
      "Kentsel dönüşüm",
      "Kat karşılığı inşaat",
      "Konut projesi",
      "Anahtar teslim inşaat",
    ],
    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },
    provider: {
      "@type": "GeneralContractor",
      name: siteConfig.legalName,
      url: siteConfig.url,
      telephone: siteConfig.phoneHref,
    },
  };

  return (
    <>
      <Helmet>
        <title>Aydın İnşaat | İstanbul Kentsel Dönüşüm Hizmetleri</title>
        <meta
          name="description"
          content="Aydın İnşaat ve Biz Aydın Grup Yapı ile İstanbul’un 39 ilçesinde kentsel dönüşüm, kat karşılığı inşaat, konut ve anahtar teslim proje hizmetleri."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="İstanbul Kentsel Dönüşüm ve İnşaat | Biz Aydın Grup"
        />
        <meta
          property="og:description"
          content="Avrupa ve Anadolu Yakası’nda, İstanbul’un tamamında güvenli ve planlı yapı çözümleri."
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${siteConfig.url}/og.jpg`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <main className="bg-[#f8f7f3]">
        <section className="relative overflow-hidden bg-blue-950 px-6 py-20 text-white md:py-28">
          <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full border border-gold/15" />
          <div className="relative mx-auto max-w-7xl">
            <nav className="mb-8 text-sm text-slate-400" aria-label="Sayfa yolu">
              <Link to="/" className="hover:text-white">
                Anasayfa
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gold">İstanbul Kentsel Dönüşüm</span>
            </nav>
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-gold">
                <MapPin size={17} aria-hidden="true" />
                İstanbul’un 39 ilçesinde
              </div>
              <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                Aydın İnşaat ile İstanbul genelinde kentsel dönüşüm
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Avrupa Yakası’ndan Anadolu Yakası’na; binanızın, arsanızın ve
                projenizin bulunduğu konumdan bağımsız olarak yerinde
                değerlendirme ve uçtan uca proje yönetimi sunuyoruz.
              </p>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 font-black text-blue-950 transition hover:bg-white"
              >
                <MessageCircle size={19} aria-hidden="true" />
                Projenizi değerlendirelim
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="section-eyebrow">Uzmanlık Alanlarımız</p>
              <h2 className="section-title mt-4">
                İstanbul’un yapı ihtiyaçlarına kapsamlı çözümler
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950 text-gold">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-blue-950">
                    {title}
                  </h3>
                  <p className="mt-3 leading-8 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="section-eyebrow">Çalışma Modelimiz</p>
              <h2 className="section-title mt-4">
                Konumdan önce projenin doğru planlanmasına odaklanıyoruz.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                İstanbul’un her ilçesinde aynı kalite standardıyla çalışır;
                proje kapsamını yapının durumu, arsanın özellikleri ve
                ihtiyaçlar doğrultusunda belirleriz.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "İlk görüşme ve ihtiyaç analizi",
                "Yerinde yapı veya arsa değerlendirmesi",
                "Teknik, mimari ve ticari planlama",
                "Şeffaf uygulama ve saha yönetimi",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-[#f8f7f3] p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold font-black text-blue-950">
                    {index + 1}
                  </span>
                  <span className="font-bold text-blue-950">{step}</span>
                  {index === 3 ? (
                    <CheckCircle2 className="ml-auto text-gold" aria-hidden="true" />
                  ) : (
                    <ClipboardCheck className="ml-auto text-slate-300" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gold px-6 py-14">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-950/70">
                İstanbul’un her noktasında
              </p>
              <h2 className="mt-2 text-3xl font-black text-blue-950">
                Projenizi bulunduğu yerde birlikte inceleyelim.
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-950 px-7 py-4 font-black text-white"
            >
              İletişime geçin
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default IstanbulServicesPage;
