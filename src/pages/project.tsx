import React, { useState } from "react";
import AnimatedSection from "../components/animatedSection";
import { Card } from "../components/ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

/* === IMAGES === */

import park from "../assets/projects/AydınParkEvleri.jpeg";
import park1 from "../assets/projects/aydınparkEvleri2.jpeg";
import kartal from "../assets/projects/KartalProje.jpeg";
import kartal1 from "../assets/projects/kartalProje1.jpeg";
import kartal2 from "../assets/projects/kartalProje2.jpeg";
import güngören from "../assets/projects/güngörenProje.jpeg";
import tekirdag from "../assets/projects/tekirdagProje.jpeg";
import zeytinburnu from "../assets/projects/ZeytinburnuProje.jpeg";

/* === DATA === */
const ourProjects = [
  {
    id: 1,
    title: "Aydın Park Projesi",
    description: "Toplumsal Proje",
    images: [park, park1],
  },
  {
    id: 2,
    title: "İstanbul / Kartal",
    description: "Toplumsal Konut",
    images: [kartal, kartal1, kartal2],
  },
  {
    id: 3,
    title: "İstanbul / Güngören",
    description: "Toplumsal Konut",
    images: [güngören],
  },
  {
    id: 4,
    title: "Tekirdağ Projesi",
    description: "Toplumsal Konut",
    images: [tekirdag],
  },
  {
    id: 5,
    title: "Tekirdağ Projesi",
    description: "Toplumsal Konut",
    images: [zeytinburnu],
  },
];

/* === MODAL === */
const ImageModal: React.FC<{
  src: string;
  alt: string;
  onClose: () => void;
}> = ({ src, alt, onClose }) => (
  <div
    onClick={onClose}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
  >
    <img
      src={src}
      alt={alt}
      className="max-w-5xl max-h-[90vh] rounded-lg shadow-xl"
      onClick={(e) => e.stopPropagation()}
    />
    <button
      onClick={onClose}
      className="absolute top-5 right-5 text-white text-4xl font-bold"
    >
      ×
    </button>
  </div>
);

/* === PAGE === */
const ProjectsPage: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState("");

  const openModal = (src: string, alt: string) => {
    setModalImage(src);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalAlt("");
  };

  const renderProjectCard = (p: {
    id: number;
    title: string;
    description: string;
    images: string[];
  }) => (
    <Card
      key={p.id}
      className="
        w-full
        max-w-sm
        bg-white/10
        backdrop-blur
        rounded-xl
        p-4
        transition
        hover:shadow-2xl
      "
    >
      <Carousel className="relative w-full">
        <CarouselContent>
          {p.images.map((img, idx) => (
            <CarouselItem key={idx}>
              <img
                src={img}
                alt={`${p.title} ${idx + 1}`}
                className="h-56 w-full cursor-pointer rounded-md object-cover"
                onClick={() => openModal(img, `${p.title} ${idx + 1}`)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white" />
      </Carousel>

      <h4 className="mt-3 text-blue-900 text-lg font-bold">{p.title}</h4>
      <p className="text-sm text-black">{p.description}</p>
    </Card>
  );

  return (
    <AnimatedSection className="px-6 py-32 text-white">
      <h2 className="mb-16 text-center text-6xl font-bold bg-gradient-to-r text-blue-900 bg-clip-text">
        Projeler
      </h2>

      {/* OUR PROJECTS */}
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-10 text-center text-2xl font-semibold">
          Projelerimiz
        </h3>

        <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ourProjects.map(renderProjectCard)}
        </div>
      </div>

      {/* MODAL */}
      {modalImage && (
        <ImageModal src={modalImage} alt={modalAlt} onClose={closeModal} />
      )}
    </AnimatedSection>
  );
};

export default ProjectsPage;
