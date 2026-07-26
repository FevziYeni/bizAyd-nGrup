import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FaqSection from "../components/FaqSection";
import { siteConfig } from "../config/site";
import { faqs } from "../data/faqs";

const FaqPage: React.FC = () => {
  const canonical = `${siteConfig.url}/sikca-sorulan-sorular`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        url: canonical,
        name: "Aydın İnşaat Sıkça Sorulan Sorular",
        inLanguage: "tr-TR",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
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
            name: "Sıkça Sorulan Sorular",
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Aydın İnşaat SSS | Kentsel Dönüşüm ve İnşaat</title>
        <meta
          name="description"
          content="Aydın İnşaat hizmetleri, İstanbul kentsel dönüşüm, kat karşılığı inşaat, bina yenileme, proje süresi ve teklif süreci hakkında sıkça sorulan sorular."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteConfig.brandName} />
        <meta
          property="og:title"
          content="Aydın İnşaat ve Kentsel Dönüşüm SSS"
        />
        <meta
          property="og:description"
          content="İstanbul'da inşaat, kentsel dönüşüm ve kat karşılığı proje süreçleri hakkında merak edilenleri yanıtladık."
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${siteConfig.url}/og.jpg`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <main>
        <section className="bg-blue-950 px-6 py-20 text-white md:py-24">
          <div className="mx-auto max-w-5xl">
            <nav className="mb-8 text-sm text-white/70" aria-label="Sayfa yolu">
              <Link to="/" className="hover:text-gold">
                Anasayfa
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Sıkça Sorulan Sorular</span>
            </nav>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
              Bilgi merkezi
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Aydın İnşaat ve kentsel dönüşüm hakkında sıkça sorulan sorular
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Projeniz için karar vermeden önce süreç, kapsam ve çalışma
              yaklaşımımız hakkında ihtiyaç duyabileceğiniz temel bilgileri
              burada bulabilirsiniz.
            </p>
          </div>
        </section>

        <FaqSection />
      </main>
    </>
  );
};

export default FaqPage;
