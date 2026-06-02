import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "./animatedSection";
import { siteConfig } from "../config/site";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <AnimatedSection className="bg-blue-950 px-6 pb-8 pt-12 text-white">
      <div className="mx-auto mb-8 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold mb-3 text-gold">
            {siteConfig.brandName.toUpperCase()}
          </h3>
          <p className="text-sm leading-6 text-white/70">
            İstanbul merkezli yapı firmamız, kat karşılığı ve kentsel dönüşüm
            projelerinde güven, kalite ve şeffaf süreç yönetimiyle hizmet verir.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2 text-gold">
            Sayfalar
          </h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li>
              <Link to="/" className="hover:underline" aria-label="Anasayfa">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:underline"
                aria-label="Projelerimiz"
              >
                Projeler
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:underline"
                aria-label="Hakkımızda"
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline"
                aria-label="İletişim"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2 text-gold">
            İletişim
          </h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="inline-flex items-center gap-2 hover:underline"
                aria-label="Telefon"
              >
                <Phone size={15} aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 hover:underline"
                aria-label="E-posta"
              >
                <Mail size={15} aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin size={15} aria-hidden="true" />
              {siteConfig.address}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2 text-gold">
            Hızlı Ulaşım
          </h4>
          <div className="flex flex-col gap-2 text-sm text-white/75">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:underline"
            >
              <MessageCircle size={16} aria-hidden="true" />
              WhatsApp ile yazın
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 hover:underline"
            >
              <Mail size={16} aria-hidden="true" />
              Teklif talebi gönderin
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-white/15 pt-5 text-center text-sm text-white/60">
        © {new Date().getFullYear()} BİZ AYDIN GRUP | İstanbul. Kat
        karşılığı ve kentsel dönüşüm projelerinde güvenle hizmet vermektedir.
        Tüm hakları saklıdır.
      </div>
    </AnimatedSection>
  );
};

export default Footer;
