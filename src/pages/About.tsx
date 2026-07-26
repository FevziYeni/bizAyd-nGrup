import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/animatedSection";
import { siteConfig } from "../config/site";
import aboutHero from "../assets/hakkimizda.webp";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Hammer,
  Home,
  MessageCircle,
  Ruler,
  ShieldCheck,
} from "lucide-react";

const stats = [
  { value: "40+", label: "Yıllık tecrübe" },
  { value: "15+", label: "Tamamlanan proje" },
  { value: "56", label: "Saha ve proje ekibi" },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Güvenli Yapılar",
    text: "Her projede teknik gereklilikleri, deprem güvenliğini ve uzun ömürlü malzeme seçimini birlikte ele alıyoruz.",
  },
  {
    icon: ClipboardCheck,
    title: "Şeffaf Süreç",
    text: "Kat malikleri, arsa sahipleri ve yatırımcılar için proje akışını anlaşılır, ölçülebilir ve takip edilebilir yönetiyoruz.",
  },
  {
    icon: Ruler,
    title: "Mimari Denge",
    text: "Estetik, fonksiyon ve uygulama kalitesini aynı çizgide tutan yaşam alanları üretmeye odaklanıyoruz.",
  },
];

const services = [
  { icon: Building2, title: "Kentsel Dönüşüm" },
  { icon: Home, title: "Konut Projeleri" },
  { icon: Hammer, title: "Anahtar Teslim İnşaat" },
  { icon: CheckCircle2, title: "Kat Karşılığı Proje" },
];

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Aydın İnşaat Hakkımızda | Biz Aydın Grup İstanbul</title>
        <meta
          name="description"
          content="Aydın İnşaat ve Biz Aydın Grup Yapı; 40+ yıllık tecrübesiyle İstanbul’da kentsel dönüşüm, kat karşılığı inşaat ve konut projeleri geliştirir."
        />
        <meta
          name="keywords"
          content="Biz Aydın Grup hakkımızda, İstanbul inşaat firması, müteahhit, toplu konut projeleri, güvenli yapılar, inşaat tecrübesi"
        />
        <link rel="canonical" href={`${siteConfig.url}/about`} />
      </Helmet>

      <AnimatedSection className="text-slate-950">
        <section
          className="relative flex min-h-[560px] items-center overflow-hidden bg-cover bg-center px-6 py-24 text-white"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-blue-950/70" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.82),rgba(2,6,23,0.42),rgba(2,6,23,0.72))]" />

          <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase text-gold">
                {siteConfig.legalName}
              </p>
              <h1 className="mt-4 text-5xl font-extrabold leading-tight md:text-7xl">
                İstanbul’da güvenli ve değerli yaşam alanları inşa ediyoruz.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
                Kentsel dönüşüm, kat karşılığı proje, konut inşaatı ve anahtar
                teslim uygulamalarda 40 yıllık deneyimi modern mimari anlayışla
                birleştiriyoruz.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-black transition hover:bg-white"
                >
                  Projeleri Gör
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-950"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/70 px-6 py-10 backdrop-blur-[1px]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 overflow-hidden rounded-lg border border-slate-300 bg-white/92 shadow-xl shadow-slate-900/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {stats.map((item) => (
              <div key={item.label} className="p-7 text-center">
                <strong className="block text-4xl font-extrabold text-blue-950">
                  {item.value}
                </strong>
                <span className="mt-2 block text-sm font-semibold text-slate-600">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f7f7f2]/75 px-6 py-20 backdrop-blur-[1px]">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.08fr] lg:items-center">
            <div className="overflow-hidden rounded-lg shadow-2xl shadow-slate-900/15">
              <img
                src={aboutHero}
                alt="Biz Aydın Grup kurumsal hakkımızda görseli"
                className="h-full min-h-[420px] w-full object-cover"
                loading="lazy"
                decoding="async"
                width={1600}
                height={1099}
              />
            </div>

            <div className="rounded-lg border border-white/70 bg-white/75 p-6 shadow-xl shadow-slate-900/10">
              <p className="text-sm font-bold uppercase text-gold">
                Biz Kimiz?
              </p>
              <h2 className="mt-3 text-4xl font-extrabold leading-tight text-blue-950 md:text-5xl">
                Planlı, şeffaf ve uzun ömürlü inşaat anlayışı.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-800">
                <p>
                  Biz Aydın Grup Yapı, İstanbul’da konut inşaatı,
                  kentsel dönüşüm, kat karşılığı proje ve anahtar teslim
                  uygulamalarda hizmet veren deneyimli bir yapı firmasıdır.
                </p>
                <p>
                  Zamanında teslim, doğru malzeme seçimi, güçlü saha yönetimi
                  ve müşteri memnuniyeti iş kültürümüzün merkezinde yer alır.
                  Her projede teknik güvenliği, kullanım konforunu ve mimari
                  değeri birlikte değerlendiririz.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Depreme dayanıklı yapı yaklaşımı",
                  "Kat karşılığı proje danışmanlığı",
                  "Modern konut ve yaşam alanları",
                  "Süreç boyunca net iletişim",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold" size={20} />
                    <span className="font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/72 px-6 py-20 backdrop-blur-[1px]">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase text-gold">
                Yaklaşımımız
              </p>
              <h2 className="mt-3 text-4xl font-extrabold text-blue-950 md:text-5xl">
                Projenin her aşamasında kontrollü ilerleriz.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {principles.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-lg border border-slate-300 bg-white/92 p-6 shadow-lg shadow-slate-900/10"
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
        </section>

        <section className="bg-blue-950/95 px-6 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-gold">
                Uzmanlık Alanları
              </p>
              <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
                Arsadan teslimata kadar güçlü proje yönetimi.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="flex items-center gap-4 rounded-lg border border-white/15 bg-white/10 p-5"
                >
                  <Icon className="text-gold" size={26} aria-hidden="true" />
                  <span className="text-lg font-bold">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f2]/75 px-6 py-16 backdrop-blur-[1px]">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-lg border border-gold/30 bg-white/92 p-8 shadow-xl shadow-slate-900/10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase text-gold">
                Projenizi konuşalım
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-blue-950">
                Kentsel dönüşüm veya kat karşılığı projeniz için bize ulaşın.
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-950 px-6 py-3 font-semibold text-white transition hover:bg-gold hover:text-black"
            >
              İletişime Geç
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default AboutPage;
