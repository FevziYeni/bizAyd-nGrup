import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Yeni from "../assets/görsel.jpeg";
import Insaat from "../assets/insaat.jpg";
import ürgüpLü from "../assets/projects/ürgüplü.jpg";
import AnimatedSection from "./animatedSection";
import güngören from "../assets/projects/güngörenProje.jpeg";
import image2 from "../assets/projects/iskom2.jpg";
import image3 from "../assets/projects/iskom3.jpg";
import image4 from "../assets/projects/iskom4.jpg";
import image5 from "../assets/projects/iskom5.jpg";
import kartal from "../assets/projects/KartalProje.jpeg";
import kagıthane1 from "../assets/projects/kagıthane1.jpg";
import kagıthane2 from "../assets/projects/kagıthane2.jpg";
import park from "../assets/projects/AydınParkEvleri.jpeg";
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
    description: "",
    images: [park],
  },
  {
    id: 3,
    title: "Kağıthane Yaşam Evleri",
    description: "",
    date: "2019-01-01",
    images: [kartal],
  },
  {
    id: 1,
    title: "İstanbul/Güngören",
    description: "",
    date: "2019-01-01",
    images: [güngören],
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
    <AnimatedSection className="p-8 py-20">
      {/* Başlık */}
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-950 to-white bg-clip-text text-transparent text-center pb-8">
        Projelerimiz
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        {projects.map((project, i) => (
          <Card className="rounded-lg" key={i}>
            <Carousel className="w-full relative">
              <CarouselContent>
                {project.images.map((img, idx) => (
                  <CarouselItem key={idx}>
                    <img
                      src={img}
                      alt={`${project.title} Görsel ${
                        idx + 1
                      } - Güngören / İstanbul Kentsel Dönüşüm`}
                      className="w-full h-[300px] object-cover rounded-lg cursor-pointer"
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

            <div className="pt-4 text-left">
              <h2 className="text-lg font-semibold  text-blue-900">
                {project.title}
              </h2>
              <p className="text-base text-black">{project.description}</p>
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
      <div className="flex justify-center mt-4">
        <button
          onClick={() => navigate("/projects")}
          aria-label="Güngören / İstanbul Kentsel Dönüşüm Projelerimizi Görüntüle"
          className="inline-block py-4 bg-black text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-colors duration-300 shadow-lg w-full md:w-2/3 text-center"
        >
          Projelerimiz
        </button>
      </div>
    </AnimatedSection>
  );
};

export default ProjectCardsSection;
