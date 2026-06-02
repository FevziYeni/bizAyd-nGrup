import React from "react";
import { Helmet } from "react-helmet-async";

import AboutSection from "../components/aboutSec";
import ContactSection from "../components/contactSec";
import ProjectsSection from "../components/content";
import FeaturesSection from "../components/features";
import ProjectCardsSection from "../components/projectSec";
import HeroSection from "../components/slayt";
import ScrollToTopButton from "../components/scrollToUp";
import { localBusinessSchema, siteConfig } from "../config/site";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Biz Aydın Grup | İstanbul Kentsel Dönüşüm ve Konut Projeleri
        </title>
        <meta
          name="description"
          content="Biz Aydın Grup; İstanbul’da kentsel dönüşüm, kat karşılığı inşaat, konut ve anahtar teslim projelerde güvenilir çözümler sunar."
        />
        <meta
          name="keywords"
          content="Biz Aydın Grup, İstanbul inşaat firması, kentsel dönüşüm İstanbul, kat karşılığı inşaat, güvenilir müteahhit, konut projeleri, anahtar teslim inşaat"
        />
        <link rel="canonical" href={siteConfig.url} />
        <meta
          property="og:title"
          content="Biz Aydın Grup | İstanbul Kat Karşılığı ve Kentsel Dönüşüm"
        />
        <meta
          property="og:description"
          content="İstanbul’da güvenilir kat karşılığı ve kentsel dönüşüm projeleri sunan Biz Aydın Grup ile arsanızı güvenle değerlendirin."
        />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="rounded-lg">
        <HeroSection />
        {/* <RiskChartSection /> */}
        <ProjectsSection />
        <ProjectCardsSection />
        <FeaturesSection />
        <AboutSection />
        <ContactSection />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Home;
