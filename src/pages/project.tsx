import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import AnimatedSection from "../components/animatedSection";
import { Card } from "../components/ui/Card";
import { siteConfig } from "../config/site";
import { ProjectRecord, projectRecords } from "../data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const ImageModal: React.FC<{
  src: string;
  alt: string;
  onClose: () => void;
}> = ({ src, alt, onClose }) => (
  <div
    onClick={onClose}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    role="dialog"
    aria-modal="true"
    aria-label="Proje görseli"
  >
    <img
      src={src}
      alt={alt}
      className="max-h-[90vh] max-w-5xl rounded-lg object-contain shadow-xl"
      onClick={(event) => event.stopPropagation()}
    />
    <button
      type="button"
      onClick={onClose}
      className="absolute right-5 top-5 text-4xl font-bold text-white"
      aria-label="Görseli kapat"
    >
      ×
    </button>
  </div>
);

const ProjectsPage: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState("");
  const canonical = `${siteConfig.url}/projects`;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${canonical}#project-list`,
    name: "Biz Aydın Grup Yapı Projeleri",
    url: canonical,
    numberOfItems: projectRecords.length,
    itemListElement: projectRecords.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: `${siteConfig.url}/projeler/${project.slug}`,
    })),
  };

  const renderProjectCard = (project: ProjectRecord) => (
    <Card
      key={project.slug}
      className="flex h-full min-h-[430px] w-full max-w-sm flex-col rounded-xl bg-white p-4 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
    >
      <Carousel className="relative w-full">
        <CarouselContent>
          {project.images.map((image) => (
            <CarouselItem key={image.src}>
              <button
                type="button"
                onClick={() => {
                  setModalImage(image.src);
                  setModalAlt(image.alt);
                }}
                className="block w-full"
                aria-label={`${image.alt} görselini büyüt`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-56 w-full rounded-md object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white" />
      </Carousel>

      <div className="flex flex-1 flex-col pt-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold">
          <MapPin size={14} aria-hidden="true" />
          {project.location}
        </span>
        <h2 className="mt-2 text-lg font-black text-blue-950">
          {project.cardTitle}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          {project.shortDescription}
        </p>
        <Link
          to={`/projeler/${project.slug}`}
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-md bg-blue-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-gold hover:text-blue-950"
          aria-label={`${project.cardTitle} detaylarını incele`}
        >
          Projeyi İncele
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );

  return (
    <>
      <Helmet>
        <title>Aydın İnşaat Projeleri | İstanbul Konut ve Dönüşüm</title>
        <meta
          name="description"
          content="Aydın İnşaat ve Biz Aydın Grup Yapı'nın Güngören, Kartal, Zeytinburnu, Bahçelievler ve İstanbul genelindeki konut ve dönüşüm projelerini inceleyin."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteConfig.brandName} />
        <meta
          property="og:title"
          content="Aydın İnşaat Projeleri | Biz Aydın Grup Yapı"
        />
        <meta
          property="og:description"
          content="İstanbul'daki kentsel dönüşüm, konut ve yapı projelerimizin fotoğraflarını ve proje ayrıntılarını inceleyin."
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${siteConfig.url}/og.jpg`} />
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
      </Helmet>

      <AnimatedSection className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
              Yapı tecrübemiz
            </p>
            <h1 className="mt-4 text-4xl font-black text-blue-950 md:text-6xl">
              Aydın İnşaat projeleri
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              İstanbul'da tamamladığımız ve yürüttüğümüz konut, yapı ve kentsel
              dönüşüm çalışmalarını ayrı proje sayfalarında inceleyin.
            </p>
          </div>

          <div className="grid auto-rows-fr grid-cols-1 items-stretch justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projectRecords.map(renderProjectCard)}
          </div>
        </div>

        {modalImage && (
          <ImageModal
            src={modalImage}
            alt={modalAlt}
            onClose={() => {
              setModalImage(null);
              setModalAlt("");
            }}
          />
        )}
      </AnimatedSection>
    </>
  );
};

export default ProjectsPage;
