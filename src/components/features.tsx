import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faBolt,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import AnimatedSection from "./animatedSection";

const FeaturesSection = () => {
  return (
    <AnimatedSection className="py-10 text-black bg-gradient-to-r from-white via-blue-900 to-white px-0 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center justify-center px-4">
          <FontAwesomeIcon
            icon={faSmile}
            size="2x"
            className="text-yellow-400 mb-2"
            aria-hidden="true"
          />
          <h3
            className="text-lg font-semibold mb-1"
            aria-label="Müşteri memnuniyeti Bayrampaşa kentsel dönüşüm"
          >
            %100 Müşteri Memnuniyeti
          </h3>
          <p className="text-sm">
            Güngören / İstanbul’daki kat karşılığı ve kentsel dönüşüm
            projelerinde, müşteri memnuniyetini her zaman ön planda tutuyoruz.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center px-4">
          <FontAwesomeIcon
            icon={faBolt}
            size="2x"
            className="text-yellow-400 mb-2"
            aria-hidden="true"
          />
          <h3
            className="text-lg font-semibold mb-1"
            aria-label="Hızlı teslimat ve proje süresi"
          >
            Hızlı ve Zamanında Teslimat
          </h3>
          <p className="text-sm">
            Projelerimizi, İstanbul’daki kentsel dönüşüm ve toplu konut
            projelerinde belirlenen zaman çizelgesine uygun şekilde hızlı ve
            kaliteli olarak tamamlıyoruz.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center px-4">
          <FontAwesomeIcon
            icon={faShieldAlt}
            size="2x"
            className="text-yellow-400 mb-2"
            aria-hidden="true"
          />
          <h3
            className="text-lg font-semibold mb-1"
            aria-label="Güvenilir müteahhit ve inşaat firması"
          >
            Güvenilirlik ve Tecrübe
          </h3>
          <p className="text-sm">
            17+ yıllık tecrübemizle Güngören / İstanbul’da kentsel dönüşüm
            projelerinde güvenilir bir müteahhit firması olarak çalışıyoruz.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FeaturesSection;
