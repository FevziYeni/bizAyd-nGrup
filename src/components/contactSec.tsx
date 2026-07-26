import React from "react";
import iletişim from "../assets/iletisim.webp";
import AnimatedSection from "./animatedSection";
import { siteConfig } from "../config/site";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <AnimatedSection className="bg-white/45 px-6 py-20 backdrop-blur-[1px]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-lg bg-blue-950 shadow-2xl shadow-slate-900/15 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="p-8 text-white md:p-10">
          <p className="text-sm font-bold uppercase text-gold">
            İletişim
          </p>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Projeniz için ilk adımı birlikte atalım.
          </h2>
          <p className="mt-5 leading-8 text-white/75">
            Kentsel dönüşüm, kat karşılığı proje veya konut inşaatı talepleriniz
            için bize telefon, WhatsApp veya e-posta üzerinden ulaşabilirsiniz.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex gap-4">
              <MapPin className="mt-1 text-gold" size={22} aria-hidden="true" />
              <div>
                <h2 className="font-semibold">Adres</h2>
                <p className="text-white/75" aria-label="Biz Aydın Grup ofis adresi">
                  {siteConfig.address} merkezli ekibimizle İstanbul genelinde
                  proje görüşmeleri yapıyoruz.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 text-gold" size={22} aria-hidden="true" />
              <div>
                <h2 className="font-semibold">Telefon</h2>
                <p className="text-white/75" aria-label="Telefon Numarası">
                  {siteConfig.phoneDisplay}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-1 text-gold" size={22} aria-hidden="true" />
              <div>
                <h2 className="font-semibold">E-posta</h2>
                <p className="text-white/75" aria-label="E-posta Adresi">
                  {siteConfig.email}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              aria-label="Telefonla aramak için tıkla"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-black transition hover:bg-white"
            >
              <Phone size={18} aria-hidden="true" />
              Ara
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp üzerinden iletişime geç"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#1ebe5d]"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="E-posta göndermek için tıkla"
              className="inline-flex items-center gap-2 rounded-md border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-950"
            >
              <Mail size={18} aria-hidden="true" />
              E-posta
            </a>
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden bg-slate-100 lg:min-h-full">
          <img
            src={iletişim}
            alt="Biz Aydın Grup iletişim görseli"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            width={1600}
            height={1050}
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
