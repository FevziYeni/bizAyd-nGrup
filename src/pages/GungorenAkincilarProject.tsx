import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Building2, CheckCircle2, MapPin, ShieldCheck } from "lucide-react";
import AnimatedSection from "../components/animatedSection";
import { siteConfig } from "../config/site";
import akincilar1 from "../assets/projects/gungoren-akincilar-1.jpeg";
import akincilar2 from "../assets/projects/gungoren-akincilar-2.jpeg";
import akincilar3 from "../assets/projects/gungoren-akincilar-3.jpeg";
import akincilar4 from "../assets/projects/gungoren-akincilar-4.jpeg";

const images = [
  {
    src: akincilar2,
    alt: "Güngören Akıncılar Projesi bina yıkım ve kentsel dönüşüm çalışması",
  },
  {
    src: akincilar3,
    alt: "Güngören Akıncılar Mahallesi kentsel dönüşüm proje alanı",
  },
  {
    src: akincilar1,
    alt: "Biz Aydın Grup Güngören Akıncılar Projesi şantiye güvenlik alanı",
  },
  {
    src: akincilar4,
    alt: "Güngören Akıncılar Projesi kentsel dönüşüm şantiyesi",
  },
];

const projectUrl = `${siteConfig.url}/projeler/gungoren-akincilar-projesi`;

const projectSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${projectUrl}#project`,
      name: "Güngören Akıncılar Projesi",
      headline: "Güngören Akıncılar Kentsel Dönüşüm Projesi",
      description:
        "Biz Aydın Grup tarafından Güngören Akıncılar Mahallesi'nde yürütülen kentsel dönüşüm ve konut projesi.",
      url: projectUrl,
      mainEntityOfPage: projectUrl,
      image: `${siteConfig.url}/gungoren-akincilar-og.jpg`,
      inLanguage: "tr-TR",
      contentLocation: {
        "@type": "Place",
        name: "Akıncılar Mahallesi, Güngören, İstanbul",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Güngören",
          addressRegion: "İstanbul",
          addressCountry: "TR",
        },
      },
      author: { "@id": `${siteConfig.url}/#business` },
      publisher: { "@id": `${siteConfig.url}/#business` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${projectUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Anasayfa",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projeler",
          item: `${siteConfig.url}/projects`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Güngören Akıncılar Projesi",
          item: projectUrl,
        },
      ],
    },
  ],
};

const GungorenAkincilarProject: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<
    (typeof images)[number] | null
  >(null);

  return (
    <>
      <Helmet>
        <title>Güngören Akıncılar Kentsel Dönüşüm | Biz Aydın</title>
        <meta
          name="description"
          content="Biz Aydın Grup Güngören Akıncılar Projesi: Akıncılar Mahallesi'nde güvenli, modern ve depreme dayanıklı yaşam alanları için kentsel dönüşüm çalışması."
        />
        <link rel="canonical" href={projectUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteConfig.brandName} />
        <meta property="og:title" content="Güngören Akıncılar Projesi | Biz Aydın Grup" />
        <meta
          property="og:description"
          content="Güngören Akıncılar Mahallesi'nde yürütülen kentsel dönüşüm projemizi ve saha çalışmalarını inceleyin."
        />
        <meta property="og:url" content={projectUrl} />
        <meta
          property="og:image"
          content={`${siteConfig.url}/gungoren-akincilar-og.jpg`}
        />
        <meta
          property="og:image:alt"
          content="Güngören Akıncılar kentsel dönüşüm projesi"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Güngören Akıncılar Projesi | Biz Aydın Grup"
        />
        <meta
          name="twitter:description"
          content="Güngören Akıncılar Mahallesi kentsel dönüşüm projesini ve saha çalışmalarını inceleyin."
        />
        <meta
          name="twitter:image"
          content={`${siteConfig.url}/gungoren-akincilar-og.jpg`}
        />
        <script type="application/ld+json">
          {JSON.stringify(projectSchema)}
        </script>
      </Helmet>

      <main>
        <section className="bg-blue-950 px-6 py-20 text-white md:py-28">
          <div className="mx-auto max-w-7xl">
            <nav className="mb-8 text-sm text-white/70" aria-label="Sayfa yolu">
              <Link to="/" className="hover:text-gold">
                Anasayfa
              </Link>
              <span className="mx-2">/</span>
              <Link to="/projects" className="hover:text-gold">
                Projeler
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Güngören Akıncılar</span>
            </nav>

            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/10 px-4 py-2 text-sm font-semibold text-gold">
                  <MapPin size={17} aria-hidden="true" />
                  Akıncılar Mahallesi, Güngören / İstanbul
                </div>
                <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                  Güngören Akıncılar Projesi
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                  Güngören Akıncılar Mahallesi'nde, mevcut yapının güvenli
                  şekilde yenilenmesi ve çağdaş yaşam standartlarına uygun
                  konutların oluşturulması amacıyla yürüttüğümüz kentsel
                  dönüşüm projesi.
                </p>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex rounded-md bg-gold px-6 py-3 font-bold text-blue-950 transition hover:bg-yellow-300"
                >
                  Proje Hakkında Bilgi Alın
                </a>
              </div>

              <button
                type="button"
                onClick={() => setSelectedImage(images[0])}
                className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl"
                aria-label="Güngören Akıncılar Projesi ana görselini büyüt"
              >
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="h-[480px] w-full rounded-xl object-cover"
                />
              </button>
            </div>
          </div>
        </section>

        <AnimatedSection className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-gold">
                  Proje Hakkında
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-blue-950 md:text-4xl">
                  Güvenli dönüşüm, modern yaşam
                </h2>
              </div>
              <div className="space-y-5 text-base leading-8 text-slate-700">
                <p>
                  Güngören Akıncılar Projesi, Biz Aydın Grup'un bölgedeki
                  kentsel dönüşüm deneyimini güvenli uygulama ve planlı saha
                  yönetimiyle bir araya getiriyor.
                </p>
                <p>
                  Proje sürecinde mevcut yapının kontrollü yıkımı, çevre
                  güvenliği ve yeni yapının güncel ihtiyaçlara uygun biçimde
                  hayata geçirilmesi esas alınıyor.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Güvenli Uygulama",
                  text: "Kontrollü saha yönetimi ve iş güvenliği odaklı çalışma.",
                },
                {
                  icon: Building2,
                  title: "Kentsel Dönüşüm",
                  text: "Bölgenin ihtiyaçlarına uygun, çağdaş konut yaklaşımı.",
                },
                {
                  icon: CheckCircle2,
                  title: "Planlı Süreç",
                  text: "Yıkımdan yeni yapıya kadar titizlikle yönetilen proje.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-7"
                >
                  <Icon className="text-gold" size={30} aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold text-blue-950">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-slate-100 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-widest text-gold">
                Saha Görselleri
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-blue-950 md:text-4xl">
                Güngören Akıncılar proje süreci
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {images.map((image) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className="group overflow-hidden rounded-xl bg-white p-2 text-left shadow-lg"
                  aria-label={`${image.alt} görselini büyüt`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-[420px] w-full rounded-lg object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <section className="bg-white px-6 py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-2xl bg-blue-950 p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <p className="font-bold uppercase tracking-wider text-gold">
                Diğer çalışmalarımız
              </p>
              <h2 className="mt-2 text-2xl font-black md:text-3xl">
                İstanbul konut ve kentsel dönüşüm projelerini inceleyin
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex shrink-0 justify-center rounded-full bg-gold px-6 py-3 font-black text-blue-950 transition hover:bg-white"
            >
              Tüm Projeler
            </Link>
          </div>
        </section>
      </main>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Proje görseli"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[90vh] max-w-6xl rounded-lg object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 text-4xl font-bold text-white"
            aria-label="Görseli kapat"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default GungorenAkincilarProject;
