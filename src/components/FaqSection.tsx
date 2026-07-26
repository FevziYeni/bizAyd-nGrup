import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import { faqs } from "../data/faqs";

interface FaqSectionProps {
  compact?: boolean;
}

const FaqSection: React.FC<FaqSectionProps> = ({ compact = false }) => {
  const visibleFaqs = compact ? faqs.slice(0, 6) : faqs;

  return (
    <section className="bg-[#f8f7f3] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
            <HelpCircle size={26} aria-hidden="true" />
          </div>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Sıkça sorulan sorular
          </p>
          <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-5xl">
            İnşaat ve kentsel dönüşüm hakkında merak edilenler
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-700">
            İstanbul'da kentsel dönüşüm, kat karşılığı inşaat ve anahtar
            teslim proje sürecine başlamadan önce en çok sorulan soruları
            anlaşılır biçimde yanıtladık.
          </p>
        </div>

        <div className="space-y-4">
          {visibleFaqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-slate-200 bg-white px-6 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left font-bold text-blue-950">
                <span>{faq.question}</span>
                <span
                  className="text-2xl font-light text-gold transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="border-t border-slate-100 pb-6 pt-4 leading-8 text-slate-700">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        {compact && (
          <div className="mt-9 text-center">
            <Link
              to="/sikca-sorulan-sorular"
              className="inline-flex items-center gap-2 rounded-full bg-blue-950 px-6 py-3.5 font-bold text-white transition hover:bg-gold hover:text-blue-950"
            >
              Tüm soruları inceleyin
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FaqSection;
