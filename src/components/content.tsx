import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "./animatedSection";
import { BriefcaseBusiness, Building2, Users } from "lucide-react";

const ProjectsSection = () => {
  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);
  const [team, setTeam] = useState(0);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;

    const animateCount = (
      target: number,
      setter: React.Dispatch<React.SetStateAction<number>>,
      duration = 1500
    ) => {
      const fps = 60;
      const totalSteps = Math.floor((duration / 1000) * fps);
      const increment = target / totalSteps;
      let current = 0;
      let step = 0;

      const interval = setInterval(() => {
        step++;
        current += increment;
        if (step >= totalSteps) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(Math.floor(current));
        }
      }, 1000 / fps);
    };

    animateCount(15, setProjects);
    animateCount(40, setExperience);
    animateCount(56, setTeam);
  }, [inView]);

  return (
    <AnimatedSection className="bg-white/45 px-6 py-14 backdrop-blur-[1px]">
      <section
        ref={ref}
        className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-slate-300 bg-white/95 shadow-xl shadow-slate-900/10"
        aria-label="Güngören / İstanbul Kentsel Dönüşüm Projeleri İstatistikleri"
      >
        <div className="grid grid-cols-1 divide-y divide-slate-200 text-center md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="flex flex-col items-center justify-center p-8">
            <Building2 className="mb-3 text-gold" size={30} aria-hidden="true" />
            <h3
              className="mb-2 text-sm font-semibold text-slate-600"
              aria-label="Toplam İstanbul kentsel dönüşüm projesi sayısı"
            >
              İstanbul Kentsel Dönüşüm Projesi
            </h3>
            <h2 className="text-5xl font-extrabold text-blue-950">{projects}+</h2>
          </div>

          <div className="flex flex-col items-center justify-center p-8">
            <BriefcaseBusiness
              className="mb-3 text-gold"
              size={30}
              aria-hidden="true"
            />
            <h3
              className="mb-2 text-sm font-semibold text-slate-600"
              aria-label="Biz Aydın Grup tecrübe yılı"
            >
              Güvenli İnşaat Tecrübesi
            </h3>
            <h2 className="text-5xl font-extrabold text-blue-950">
              {experience} Yıl
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center p-8">
            <Users className="mb-3 text-gold" size={30} aria-hidden="true" />
            <h3
              className="mb-2 text-sm font-semibold text-slate-600"
              aria-label="Güngören / İstanbul kentsel dönüşüm ekibi"
            >
              Kat Karşılığı ve Kentsel Dönüşüm Ekibi
            </h3>
            <h2 className="text-5xl font-extrabold text-blue-950">{team}</h2>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ProjectsSection;
