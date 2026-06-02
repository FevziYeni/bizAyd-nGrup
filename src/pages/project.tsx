import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "../components/animatedSection";
import { Card } from "../components/ui/Card";
import { siteConfig } from "../config/site";
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
import park2 from "../assets/projects/aydınParkEvleri4.jpg";
import park3 from "../assets/projects/aydınKartal3.jpg";

import kartal from "../assets/projects/KartalProje.jpeg";
import kartal1 from "../assets/projects/kartalProje1.jpeg";
import kartal2 from "../assets/projects/kartalProje2.jpeg";
import kartal3 from "../assets/projects/kartalProje3.jpeg";
import güngören from "../assets/projects/güngörenProje.jpeg";
import güngören1 from "../assets/projects/güngörenProje.jpg";
import tekirdag from "../assets/projects/tekirdagProje.jpeg";
import zeytinburnu from "../assets/projects/ZeytinburnuProje.jpeg";
import bahcelievler from "../assets/projects/bahceliEvler.jpg";

/* === DATA === */
const ourProjects = [
  {
    id: 1,
    title: "Aydın Park Projesi",
    description: "Konut projesi",
    images: [park2, park3, park, park1],
  },
  {
    id: 2,
    title: "İstanbul / Kartal",
    description: "Konut projesi",
    images: [kartal, kartal1, kartal2, kartal3],
  },
  {
    id: 3,
    title: "İstanbul / Güngören",
    description: "Konut projesi",
    images: [güngören, güngören1],
  },
  {
    id: 4,
    title: "Tekirdağ Projesi",
    description: "Konut projesi",
    images: [tekirdag],
  },
  {
    id: 5,
    title: "Zeytinburnu Projesi",
    description: "Konut projesi",
    images: [zeytinburnu],
  },
  {
    id: 6,
    title: "İstanbul / Bahçelievler",
    description: "Konut projesi",
    images: [bahcelievler],
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
      aria-label="Görseli kapat"
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
        bg-white
        rounded-xl
        p-4
        shadow-xl
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
    <>
      <Helmet>
        <title>Projelerimiz | Biz Aydın Grup</title>
        <meta
          name="description"
          content="Biz Aydın Grup tarafından tamamlanan İstanbul, Tekirdağ, Kartal, Güngören, Zeytinburnu ve Bahçelievler konut projelerini inceleyin."
        />
        <link rel="canonical" href={`${siteConfig.url}/projects`} />
      </Helmet>

      <AnimatedSection className="px-6 py-32 text-white">
        <h2 className="mb-16 text-center text-6xl font-bold bg-gradient-to-r text-blue-900 bg-clip-text">
          Projeler
        </h2>

        <div className="mx-auto max-w-7xl">
          <h3 className="mb-10 text-center text-2xl font-semibold text-blue-950">
            Projelerimiz
          </h3>

          <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ourProjects.map(renderProjectCard)}
          </div>
        </div>

        {modalImage && (
          <ImageModal src={modalImage} alt={modalAlt} onClose={closeModal} />
        )}
      </AnimatedSection>
    </>
  );
};

export default ProjectsPage;
