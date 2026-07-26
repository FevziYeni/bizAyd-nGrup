import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "../config/site";

const FloatingContactButtons: React.FC = () => (
  <div className="fixed bottom-5 right-4 z-40 flex items-center gap-2 md:bottom-6 md:right-6">
    <a
      href={`tel:${siteConfig.phoneHref}`}
      aria-label="Telefonla ara"
      className="hidden h-12 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-black text-blue-950 shadow-xl transition hover:-translate-y-0.5 md:inline-flex"
    >
      <Phone size={18} aria-hidden="true" />
      Hemen Ara
    </a>
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="inline-flex h-14 items-center gap-2 rounded-full bg-[#25D366] px-5 font-black text-white shadow-xl shadow-green-900/20 transition hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
    >
      <MessageCircle size={22} aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  </div>
);

export default FloatingContactButtons;
