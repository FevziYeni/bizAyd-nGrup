import { useEffect, useState } from "react";

import LOGO from "../assets/LOGOK.jpg";
import { Progress } from "./ui/progress";

const PageLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 70) return prev + 8;
        if (prev < 90) return prev + 3;
        return Math.min(prev + 1, 96);
      });
    }, 160);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#f7f7f2] px-6 text-slate-950"
      role="status"
      aria-live="polite"
      aria-label="Sayfa yükleniyor"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gold" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.08),rgba(255,255,255,0)_42%,rgba(183,150,69,0.16))]" />

      <div className="relative flex w-full max-w-md flex-col items-center text-center">
        <div className="mb-7 flex h-44 w-44 items-center justify-center rounded-full border border-gold/30 bg-white shadow-2xl shadow-slate-900/10 sm:h-52 sm:w-52">
          <img
            src={LOGO}
            alt="Biz Aydın Grup Yapı"
            className="h-36 w-36 object-contain sm:h-44 sm:w-44"
          />
        </div>

        <p className="text-xs font-bold uppercase tracking-[0.26em] text-gold">
          Biz Aydın Grup
        </p>
        <h1 className="mt-3 text-2xl font-extrabold text-blue-950 sm:text-3xl">
          Sayfa hazırlanıyor
        </h1>
        <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
          Görseller ve proje içerikleri yüklenirken kısa bir an bekleyin.
        </p>

        <div className="mt-8 w-full max-w-xs">
          <Progress
            value={progress}
            aria-label="Yüklenme ilerlemesi"
            className="h-2.5 bg-slate-200 shadow-inner"
          />
          <div className="mt-3 flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Yükleniyor</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
