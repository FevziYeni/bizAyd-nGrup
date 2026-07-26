import React from "react";
import { Helmet } from "react-helmet-async";
import AboutSection from "../components/aboutSec";
import ContactSection from "../components/contactSec";
import ProjectsSection from "../components/content";
import FeaturesSection from "../components/features";
import ProjectCardsSection from "../components/projectSec";
import HeroSection from "../components/slayt";
import IstanbulCoverageSection from "../components/IstanbulCoverageSection";
import ScrollToTopButton from "../components/scrollToUp";
import AydinInsaatSection from "../components/AydinInsaatSection";
import FaqSection from "../components/FaqSection";
import {
  localBusinessSchema,
  siteConfig,
  websiteSchema,
} from "../config/site";

const Home: React.FC = () => (
  <>
    <Helmet>
      <title>Aydın İnşaat | İstanbul Kentsel Dönüşüm | Biz Aydın Grup</title>
      <meta
        name="description"
        content="Aydın İnşaat ve Biz Aydın Grup Yapı; İstanbul genelinde kentsel dönüşüm, kat karşılığı inşaat, konut ve anahtar teslim projeler sunar."
      />
      <link rel="canonical" href={siteConfig.url} />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Aydın İnşaat | İstanbul Kentsel Dönüşüm | Biz Aydın Grup"
      />
      <meta
        property="og:description"
        content="40+ yıllık tecrübeyle İstanbul’da güvenli kentsel dönüşüm, kat karşılığı ve konut projeleri."
      />
      <meta property="og:image" content={`${siteConfig.url}/og.jpg`} />
      <meta property="og:url" content={siteConfig.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Aydın İnşaat | İstanbul Kentsel Dönüşüm"
      />
      <meta
        name="twitter:description"
        content="Güngören merkezli, İstanbul genelinde planlı ve güvenli yapı çözümleri."
      />
      <meta name="twitter:image" content={`${siteConfig.url}/og.jpg`} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [localBusinessSchema, websiteSchema],
        })}
      </script>
    </Helmet>

    <main>
      <HeroSection />
      <ProjectsSection />
      <AydinInsaatSection />
      <ProjectCardsSection />
      <IstanbulCoverageSection />
      <FeaturesSection />
      <AboutSection />
      <FaqSection compact />
      <ContactSection />
      <ScrollToTopButton />
    </main>
  </>
);

export default Home;
