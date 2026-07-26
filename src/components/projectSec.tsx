import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./animatedSection";
import { Card } from "./ui/Card";
import { projectRecords } from "../data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const selectedProjectSlugs = [
  "aydin-park-evleri-projesi",
  "istanbul-kartal-konut-projesi",
  "istanbul-gungoren-konut-projesi",
];

const projects = selectedProjectSlugs
  .map((slug) => projectRecords.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

const ProjectCardsSection: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState("");

  return (
    <AnimatedSection className="bg-white/62 px-6 py-20 backdrop-blur-[1px]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase text-gold">
              Seçili projeler
            </p>
            <h2 className="mt-3 text-4xl font-extrabold text-blue-950 md:text-5xl">
              İstanbul inşaat projelerimiz
            </h2>
          </div>
          <p className="max-w-xl text-slate-700">
            Tamamlanan konut ve yapı projelerimizden seçilen çalışmalarla
            kalite, süreç ve uygulama anlayışımızı inceleyebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {projects.map((project) => (
            <Card
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-300 bg-white/95 p-3 shadow-xl shadow-slate-900/10 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/15"
              key={project.slug}
            >
              <Carousel className="relative w-full">
                <CarouselContent>
                  {project.images.map((image) => (
                    <CarouselItem key={image.src}>
                      <button
                        type="button"
                        className="block w-full"
                        onClick={() => {
                          setModalImage(image.src);
                          setModalAlt(image.alt);
                        }}
                        aria-label={`${image.alt} görselini büyüt`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-[300px] w-full rounded-md object-cover transition duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                          decoding="async"
                        />
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white" />
              </Carousel>

              <div className="flex flex-1 flex-col p-3 text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-gold">
                  {project.location}
                </span>
                <h3 className="mt-2 text-xl font-bold text-blue-950">
                  {project.cardTitle}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {project.shortDescription}
                </p>
                <Link
                  to={`/projeler/${project.slug}`}
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-blue-950 underline decoration-gold decoration-2 underline-offset-4"
                >
                  Proje detaylarını inceleyin
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {modalImage && (
          <div
            onClick={() => setModalImage(null)}
            className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/75 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Proje görseli"
          >
            <img
              src={modalImage}
              alt={modalAlt}
              className="max-h-[90vh] max-w-4xl cursor-auto rounded-lg object-contain shadow-lg"
              onClick={(event) => event.stopPropagation()}
            />
            <button
              type="button"
              onClick={() => setModalImage(null)}
              className="absolute right-5 top-5 text-3xl font-bold text-white"
              aria-label="Görseli kapat"
            >
              ×
            </button>
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-950 px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-gold hover:text-black md:w-auto"
          >
            Tüm projeleri görün
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectCardsSection;
