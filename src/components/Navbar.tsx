import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Mail, MapPin, Menu, MessageCircle, Phone } from "lucide-react";
import LOGO from "../assets/logo-mark-transparent.webp";
import { siteConfig } from "../config/site";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";

const navigation = [
  { label: "Anasayfa", to: "/" },
  { label: "Projeler", to: "/projects" },
  { label: "Hizmetler", to: "/istanbul-kentsel-donusum" },
  { label: "SSS", to: "/sikca-sorulan-sorular" },
  { label: "Hakkımızda", to: "/about" },
];

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => setDrawerOpen(false), [pathname]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="hidden bg-blue-950 text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-5 text-slate-300">
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} className="text-gold" aria-hidden="true" />
              {siteConfig.address}
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Mail size={14} className="text-gold" aria-hidden="true" />
              {siteConfig.email}
            </a>
          </div>
          <span className="font-semibold text-gold">
            40+ yıllık yapı ve proje tecrübesi
          </span>
        </div>
      </div>

      <nav className="border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-[92px] max-w-7xl items-center justify-between px-5 md:px-6">
          <Link to="/" className="flex items-center gap-3" aria-label="Biz Aydın Grup anasayfa">
            <img
              src={LOGO}
              alt="Biz Aydın Grup Yapı logosu"
              className="h-[72px] w-[108px] shrink-0 object-contain drop-shadow-sm"
              width={108}
              height={72}
              decoding="async"
            />
            <span className="min-w-0 leading-tight">
              <strong className="block whitespace-nowrap text-base font-black tracking-[0.045em] text-blue-950 sm:text-xl">
                BİZ AYDIN GRUP
              </strong>
              <span className="mt-1 block whitespace-nowrap text-[11px] font-black uppercase tracking-[0.12em] text-[#8a6a1f] sm:text-xs">
                YAPI VE GAYRİMENKUL
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative rounded-full px-4 py-2.5 text-sm font-bold transition ${
                  isActive(item.to)
                    ? "bg-blue-950 text-white"
                    : "text-slate-700 hover:bg-slate-100 hover:text-blue-950"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="flex items-center gap-3 px-2 text-blue-950"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                <Phone size={18} aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <small className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Bizi arayın
                </small>
                <strong className="text-sm">{siteConfig.phoneDisplay}</strong>
              </span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-black text-blue-950 transition hover:bg-blue-950 hover:text-white"
            >
              Teklif Alın
              <ChevronRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-950 text-white lg:hidden"
            aria-label="Menüyü aç"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="right">
        <DrawerContent className="border-none bg-blue-950 text-white">
          <DrawerHeader className="border-b border-white/10 px-6 py-6">
            <DrawerTitle className="text-left text-xl font-black text-white">
              BİZ AYDIN GRUP
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col px-4 py-5">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center justify-between rounded-xl px-4 py-4 font-bold ${
                  isActive(item.to) ? "bg-white/10 text-gold" : "text-white"
                }`}
              >
                {item.label}
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 rounded-xl bg-gold px-4 py-4 text-center font-black text-blue-950"
            >
              İletişime Geçin
            </Link>

            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex flex-col items-center gap-2 rounded-xl bg-white/5 p-3 text-xs"
              >
                <Phone size={20} className="text-gold" aria-hidden="true" />
                Ara
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 rounded-xl bg-white/5 p-3 text-xs"
              >
                <MessageCircle size={20} className="text-gold" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex flex-col items-center gap-2 rounded-xl bg-white/5 p-3 text-xs"
              >
                <Mail size={20} className="text-gold" aria-hidden="true" />
                E-posta
              </a>
            </div>

            <DrawerClose className="mt-6 text-sm text-slate-400">
              Menüyü kapat
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Navbar;
