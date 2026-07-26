import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "../config/site";

const Footer: React.FC = () => (
  <footer className="bg-[#07172e] px-6 pb-8 pt-16 text-white">
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
            Projenizi birlikte değerlendirelim
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
            Güvenli ve değerli yapılar için ilk adımı bugün atın.
          </h2>
        </div>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 font-black text-blue-950 transition hover:bg-white"
        >
          <MessageCircle size={19} aria-hidden="true" />
          WhatsApp’tan Yazın
        </a>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1.1fr]">
        <div>
          <h3 className="text-xl font-black tracking-[0.08em]">BİZ AYDIN GRUP</h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            Aydın İnşaat ve Biz Aydın Grup Yapı; İstanbul genelinde kentsel
            dönüşüm, kat karşılığı inşaat, konut ve anahtar teslim projelerde
            güvenli, planlı ve şeffaf çözümler sunar.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-gold transition hover:bg-white hover:text-blue-950"
              aria-label="Telefonla ara"
            >
              <Phone size={18} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-gold transition hover:bg-white hover:text-blue-950"
              aria-label="E-posta gönder"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-[0.16em] text-gold">
            Kurumsal
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li><Link to="/" className="hover:text-white">Anasayfa</Link></li>
            <li><Link to="/about" className="hover:text-white">Hakkımızda</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projelerimiz</Link></li>
            <li><Link to="/sikca-sorulan-sorular" className="hover:text-white">Sıkça Sorulan Sorular</Link></li>
            <li><Link to="/contact" className="hover:text-white">İletişim</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-[0.16em] text-gold">
            Hizmetler
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li>
              <Link to="/istanbul-kentsel-donusum" className="hover:text-white">
                Kentsel Dönüşüm
              </Link>
            </li>
            <li>
              <Link to="/istanbul-kentsel-donusum" className="hover:text-white">
                Kat Karşılığı İnşaat
              </Link>
            </li>
            <li>
              <Link to="/istanbul-kentsel-donusum" className="hover:text-white">
                Konut Projeleri
              </Link>
            </li>
            <li>
              <Link to="/istanbul-kentsel-donusum" className="hover:text-white">
                Anahtar Teslim İnşaat
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-[0.16em] text-gold">
            İletişim
          </h4>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-400">
            <li className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-gold" size={17} aria-hidden="true" />
              {siteConfig.address}
            </li>
            <li>
              <a href={`tel:${siteConfig.phoneHref}`} className="flex gap-3 hover:text-white">
                <Phone className="shrink-0 text-gold" size={17} aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="flex gap-3 hover:text-white">
                <Mail className="shrink-0 text-gold" size={17} aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Biz Aydın Grup Yapı. Tüm hakları saklıdır.</p>
        <p>Güngören merkezli • İstanbul genelinde hizmet</p>
      </div>
    </div>
  </footer>
);

export default Footer;
