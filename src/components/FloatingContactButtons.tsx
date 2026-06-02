import React from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "../config/site";

const FloatingContactButtons: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3">
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        title="WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        <MessageCircle size={22} aria-hidden="true" />
      </a>
      <a
        href={`mailto:${siteConfig.email}`}
        aria-label="E-posta gönder"
        title="E-posta"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        <Mail size={22} aria-hidden="true" />
      </a>
      <a
        href={`tel:${siteConfig.phoneHref}`}
        aria-label="Telefonla ara"
        title="Ara"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-black shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        <Phone size={22} aria-hidden="true" />
      </a>
    </div>
  );
};

export default FloatingContactButtons;
