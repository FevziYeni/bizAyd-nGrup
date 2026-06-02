import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AnimatedSection from "./animatedSection";
import park from "../assets/projects/AydınParkEvleri.jpeg";
import park1 from "../assets/projects/aydınparkEvleri2.jpeg";
import park2 from "../assets/projects/aydınParkEvleri4.jpg";
import kartal from "../assets/projects/KartalProje.jpeg";
import kartal1 from "../assets/projects/kartalProje1.jpeg";
import kartal2 from "../assets/projects/kartalProje2.jpeg";
import kartal3 from "../assets/projects/kartalProje3.jpeg";
import güngören from "../assets/projects/güngörenProje.jpeg";
import güngören1 from "../assets/projects/güngörenProje.jpg";

import { Card } from "./ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const projects = [
  {
    title: "Aydın Park Evleri Projesi",
    description: "Modern yaşam alanlarıyla tamamlanan konut projesi.",
    images: [park2, park, park1],
  },
  {
    id: 3,
    title: "İstanbul/Kartal Projesi",
    description: "İstanbul’da güvenli ve işlevsel konut uygulaması.",
    date: "2019-01-01",
    images: [kartal, kartal1, kartal2, kartal3],
  },
  {
    id: 1,
    title: "İstanbul/Güngören",
    description: "Kentsel dönüşüm odağında geliştirilen konut projesi.",
    date: "2019-01-01",
    images: [güngören, güngören1],
  },
];

const ProjectCardsSection = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState<string>("");
  const navigate = useNavigate();

  const openModal = (src: string, alt: string) => {
    setModalImage(src);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalAlt("");
  };

  return (
    <AnimatedSection className="bg-white/62 px-6 py-20 backdrop-blur-[1px]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase text-gold">
              Seçili Projeler
            </p>
            <h1 className="mt-3 text-4xl font-extrabold text-blue-950 md:text-5xl">
              Projelerimiz
            </h1>
          </div>
          <p className="max-w-xl text-slate-700">
            Tamamlanan konut ve yapı projelerimizden seçilen çalışmalarla
            kalite, süreç ve uygulama anlayışımızı inceleyebilirsiniz.
          </p>
        </div>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
        {projects.map((project, i) => (
          <Card
            className="group overflow-hidden rounded-lg border border-slate-300 bg-white/95 p-3 shadow-xl shadow-slate-900/10 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/15"
            key={i}
          >
            <Carousel className="w-full relative">
              <CarouselContent>
                {project.images.map((img, idx) => (
                  <CarouselItem key={idx}>
                    <img
                      src={img}
                      alt={`${project.title} Görsel ${
                        idx + 1
                      } - Güngören / İstanbul Kentsel Dönüşüm`}
                      className="h-[300px] w-full cursor-pointer rounded-md object-cover transition duration-500 group-hover:scale-[1.03]"
                      onClick={() =>
                        openModal(
                          img,
                          `${project.title} Görsel ${
                            idx + 1
                          } - Güngören / İstanbul Kentsel Dönüşüm`
                        )
                      }
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-1 text-white hover:bg-opacity-75 transition">
                ‹
              </CarouselPrevious>
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-1 text-white hover:bg-opacity-75 transition">
                ›
              </CarouselNext>
            </Carousel>

            <div className="p-3 text-left">
              <h2 className="text-xl font-bold text-blue-950">
                {project.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {project.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 cursor-pointer"
        >
          <img
            src={modalImage}
            alt={modalAlt}
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-lg cursor-auto"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold cursor-pointer"
            aria-label="Kapat"
          >
            &times;
          </button>
        </div>
      )}

      {/* Projelerimiz Butonu */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => navigate("/projects")}
          aria-label="Güngören / İstanbul Kentsel Dönüşüm Projelerimizi Görüntüle"
          className="inline-flex w-full items-center justify-center rounded-md bg-blue-950 px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-gold hover:text-black md:w-auto"
        >
          Tüm Projeleri Gör
        </button>
      </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectCardsSection;
