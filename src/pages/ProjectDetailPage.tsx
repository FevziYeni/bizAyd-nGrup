import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import AnimatedSection from "../components/animatedSection";
import { siteConfig } from "../config/site";
import {
  getProjectBySlug,
  ProjectImage,
  projectRecords,
} from "../data/projects";

const toAbsoluteUrl = (path: string) =>
  path.startsWith("http")
    ? path
    : `${siteConfig.url}${path.startsWith("/") ? "" : "/"}${path}`;

const ProjectDetailPage: React.FC = () => {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const project = getProjectBySlug(projectSlug);
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const canonical = `${siteConfig.url}/projeler/${project.slug}`;
  const absoluteImages = project.images.map((image) =>
    toAbsoluteUrl(image.src)
  );
  const relatedProjects = projectRecords
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${canonical}#project`,
        name: project.title,
        description: project.metaDescription,
        url: canonical,
        mainEntityOfPage: canonical,
        image: absoluteImages,
        inLanguage: "tr-TR",
        about: [
          project.projectType,
          "Konut inşaatı",
          "İstanbul inşaat projeleri",
        ],
        contentLocation: {
          "@type": "Place",
          name: project.location,
          address: {
            "@type": "PostalAddress",
            addressRegion: project.location.includes("İstanbul")
              ? "İstanbul"
              : "Tekirdağ",
            addressCountry: "TR",
          },
        },
        creator: { "@id": `${siteConfig.url}/#business` },
        publisher: { "@id": `${siteConfig.url}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Anasayfa",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projeler",
            item: `${siteConfig.url}/projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.cardTitle,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{`${project.title} | Biz Aydın Grup Yapı`}</title>
        <meta name="description" content={project.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteConfig.brandName} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={absoluteImages[0]} />
        <meta property="og:image:alt" content={project.images[0].alt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={project.title} />
        <meta name="twitter:description" content={project.metaDescription} />
        <meta name="twitter:image" content={absoluteImages[0]} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <main>
        <section className="relative overflow-hidden bg-blue-950 px-6 py-20 text-white md:py-28">
          <div className="absolute inset-0 opacity-20">
            <img
              src={project.images[0].src}
              alt=""
              className="h-full w-full object-cover"
              aria-hidden="true"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/95 to-blue-950/70" />

          <div className="relative mx-auto max-w-7xl">
            <nav className="mb-9 text-sm text-white/70" aria-label="Sayfa yolu">
              <Link to="/" className="hover:text-gold">
                Anasayfa
              </Link>
              <span className="mx-2">/</span>
              <Link to="/projects" className="hover:text-gold">
                Projeler
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{project.cardTitle}</span>
            </nav>

            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/10 px-4 py-2 text-sm font-semibold text-gold">
                    <MapPin size={17} aria-hidden="true" />
                    {project.location}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
                    <Building2 size={17} aria-hidden="true" />
                    {project.projectType}
                  </span>
                </div>

                <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                  {project.shortDescription}
                </p>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 font-black text-blue-950 transition hover:bg-white"
                >
                  Benzer bir proje için görüşün
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>

              <button
                type="button"
                onClick={() => setSelectedImage(project.images[0])}
                className="group overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl"
                aria-label={`${project.images[0].alt} görselini büyüt`}
              >
                <img
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  className="h-[460px] w-full rounded-xl object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </button>
            </div>
          </div>
        </section>

        <AnimatedSection className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
                  Proje hakkında
                </p>
                <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
                  Planlı uygulama, nitelikli yaşam alanı
                </h2>
              </div>
              <div className="space-y-5 text-base leading-8 text-slate-700">
                {project.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>
                  Biz Aydın Grup Yapı olarak konut ve inşaat projelerinde
                  teknik gereklilikleri, kullanıcı ihtiyaçlarını ve saha
                  koordinasyonunu aynı plan içinde yönetiyoruz.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {project.highlights.map((highlight, index) => {
                const Icon =
                  index === 0
                    ? ShieldCheck
                    : index === 1
                    ? Building2
                    : CheckCircle2;

                return (
                  <article
                    key={highlight}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-7"
                  >
                    <Icon className="text-gold" size={30} aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-bold leading-7 text-blue-950">
                      {highlight}
                    </h3>
                  </article>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-slate-100 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
              Proje galerisi
            </p>
            <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
              {project.cardTitle} uygulama görselleri
            </h2>

            <div
              className={`mt-10 grid gap-6 ${
                project.images.length === 1 ? "max-w-3xl" : "sm:grid-cols-2"
              }`}
            >
              {project.images.map((image) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className="group overflow-hidden rounded-xl bg-white p-2 text-left shadow-lg"
                  aria-label={`${image.alt} görselini büyüt`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-[420px] w-full rounded-lg object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
                  Diğer çalışmalarımız
                </p>
                <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
                  İlgili konut ve yapı projeleri
                </h2>
              </div>
              <Link
                to="/projects"
                className="font-bold text-blue-950 underline decoration-gold decoration-2 underline-offset-4"
              >
                Tüm projeleri görüntüleyin
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedProjects.map((item) => (
                <Link
                  key={item.slug}
                  to={`/projeler/${item.slug}`}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
                >
                  <img
                    src={item.images[0].src}
                    alt={item.images[0].alt}
                    loading="lazy"
                    decoding="async"
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold">
                      {item.location}
                    </span>
                    <h3 className="mt-2 text-xl font-black text-blue-950">
                      {item.cardTitle}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-950">
                      Projeyi inceleyin
                      <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Proje görseli"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[90vh] max-w-6xl rounded-lg object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 text-4xl font-bold text-white"
            aria-label="Görseli kapat"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectDetailPage;
