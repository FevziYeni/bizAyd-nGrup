import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LOGO from "../assets/LOGOK.jpg";
import { Button } from "../components/ui/Button";
import { Separator } from "@radix-ui/react-separator";
import { Mail, Menu, MessageCircle } from "lucide-react";
import { siteConfig } from "../config/site";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "../components/ui/drawer";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  const handleNavigate = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <div className="sticky left-0 top-0 z-50 w-full">
      <nav className="w-full bg-white/95 shadow-sm backdrop-blur-md">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-4">
            <img
              src={LOGO}
              alt="Biz Aydın Grup logosu"
              className="h-16 w-16 cursor-pointer object-contain"
              onClick={() => handleNavigate("/")}
            />

            <Separator
              orientation="vertical"
              className="hidden h-12 w-px bg-gold/60 sm:block"
            />

            <div
              className="flex cursor-pointer flex-col leading-tight"
              onClick={() => handleNavigate("/")}
            >
              <span className="text-lg font-bold text-blue-950 sm:text-xl">
                BİZ AYDIN GRUP
              </span>
              <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-gold sm:block">
                Yapı
              </span>
            </div>
          </div>

          <div className="hidden items-center space-x-4 md:flex">
            <Button
              onClick={() => handleNavigate("/")}
              className="bg-transparent text-sm text-blue-950 shadow-none hover:bg-blue-950 hover:text-white"
            >
              Anasayfa
            </Button>

            <Button
              onClick={() => handleNavigate("/projects")}
              className="bg-transparent text-sm text-blue-950 shadow-none hover:bg-blue-950 hover:text-white"
            >
              Projelerimiz
            </Button>

            <Button
              onClick={() => handleNavigate("/about")}
              className="bg-transparent text-sm text-blue-950 shadow-none hover:bg-blue-950 hover:text-white"
            >
              Hakkımızda
            </Button>

            <Button
              onClick={() => handleNavigate("/contact")}
              className="bg-blue-950 text-sm text-white hover:bg-gold hover:text-black"
            >
              İletişim
            </Button>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#25D366] text-white transition hover:bg-[#1ebe5d]"
              aria-label="WhatsApp ile iletişime geç"
              title="WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gold text-black transition hover:bg-yellow-300"
              aria-label="E-posta gönder"
              title="E-posta"
            >
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setDrawerOpen(true)}
              className="text-blue-950"
              aria-label="Menüyü aç"
              type="button"
            >
              <Menu size={28} />
            </button>
          </div>
        </header>
      </nav>

      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="right">
        <DrawerContent className="bg-blue-950 text-white">
          <DrawerHeader>
            <DrawerTitle className="text-xl font-bold text-white">
              Menü
            </DrawerTitle>
          </DrawerHeader>

          <div className="flex flex-col gap-4 px-6 pb-6">
            <Button
              variant="ghost"
              className="justify-start text-white hover:text-yellow-300"
              onClick={() => handleNavigate("/")}
            >
              Anasayfa
            </Button>

            <Button
              variant="ghost"
              className="justify-start text-white hover:text-yellow-300"
              onClick={() => handleNavigate("/projects")}
            >
              Projelerimiz
            </Button>

            <Button
              variant="ghost"
              className="justify-start text-white hover:text-yellow-300"
              onClick={() => handleNavigate("/about")}
            >
              Hakkımızda
            </Button>

            <Button
              variant="ghost"
              className="justify-start text-white hover:text-yellow-300"
              onClick={() => handleNavigate("/contact")}
            >
              İletişim
            </Button>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-[#25D366] px-4 py-3 text-center font-semibold text-white"
            >
              WhatsApp
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-md bg-gold px-4 py-3 text-center font-semibold text-black"
            >
              E-posta
            </a>

            <DrawerClose asChild>
              <Button
                variant="outline"
                className="mt-6 border-white text-white hover:bg-yellow-300 hover:text-black"
              >
                Kapat
              </Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;