import React from "react";
import AnimatedSection from "./animatedSection";
import { BriefcaseBusiness, Building2, Users } from "lucide-react";

const stats = [
  {
    icon: Building2,
    label: "İstanbul Kentsel Dönüşüm Projesi",
    value: "15+",
  },
  {
    icon: BriefcaseBusiness,
    label: "Güvenli İnşaat Tecrübesi",
    value: "40+ Yıl",
  },
  {
    icon: Users,
    label: "Saha ve Proje Ekibi",
    value: "56",
  },
];

const ProjectsSection: React.FC = () => (
  <AnimatedSection className="bg-white px-6 py-14">
    <section
      className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5"
      aria-label="Biz Aydın Grup proje istatistikleri"
    >
      <div className="grid grid-cols-1 divide-y divide-slate-200 text-center md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center p-8"
          >
            <Icon className="mb-3 text-gold" size={30} aria-hidden="true" />
            <span className="mb-2 text-sm font-semibold text-slate-600">
              {label}
            </span>
            <strong className="text-4xl font-black text-blue-950 md:text-5xl">
              {value}
            </strong>
          </div>
        ))}
      </div>
    </section>
  </AnimatedSection>
);

export default ProjectsSection;
