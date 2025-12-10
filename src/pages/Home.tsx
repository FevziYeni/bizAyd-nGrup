import React from "react";
import { Helmet } from "react-helmet-async";

import AboutSection from "../components/aboutSec";
import ContactSection from "../components/contactSec";
import ProjectsSection from "../components/content";
import FeaturesSection from "../components/features";
import ProjectCardsSection from "../components/projectSec";
import RiskChartSection from "../components/riskChart";
import HeroSection from "../components/slayt";
import ScrollToTopButton from "../components/scrollToUp";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Biz Aydın Grup İnşaat | Kentsel Dönüşüm ve Konut Projeleri
        </title>
        <meta
          name="description"
          content="Bayrampaşa ve İstanbul’da kat karşılığı ve kentsel dönüşüm projelerinde öncü firma: Biz Aydın Grup İnşaat. 17 yıllık tecrübemizle güvenli, modern ve sürdürülebilir projeler sunuyoruz.
"
        />
        <meta
          name="keywords"
          content="bayrampaşa müteahhit, bayrampaşa kat karşılığı, bayrampaşa kentsel dönüşüm, istanbul müteahhit firmaları, Biz Aydın Grup inşaat,Biz Aydın Grup, rm inşaat,rm insaat, Biz Aydın Grup, yenirm güvenilir müteahhit, kat karşılığı projeler, toplu konut bayrampaşa, istanbul kentsel dönüşüm, modern konut projeleri

"
        />
        <meta
          property="og:title"
          content="Biz Aydın Grup İnşaat | Bayrampaşa Kat Karşılığı & Kentsel Dönüşüm"
        />
        <meta
          property="og:description"
          content="Bayrampaşa ve İstanbul’da güvenilir kat karşılığı ve kentsel dönüşüm projeleri sunan Biz Aydın Grup İnşaat ile arsanızı kazanca dönüştürün."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.yenirm.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="rounded-lg">
        <HeroSection />
        <RiskChartSection />
        <ProjectCardsSection />
        <ProjectsSection />
        <ContactSection />
        <FeaturesSection />
        <AboutSection />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Home;
