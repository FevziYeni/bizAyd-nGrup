const fs = require("fs");
const path = require("path");

const buildDirectory = path.resolve(__dirname, "..", "build");
const templatePath = path.join(buildDirectory, "index.html");
const siteUrl = "https://xn--bizaydngrup-4zb.com";

const routes = [
  {
    path: "istanbul-kentsel-donusum",
    title: "Aydın İnşaat | İstanbul Kentsel Dönüşüm Hizmetleri",
    description:
      "Aydın İnşaat ve Biz Aydın Grup Yapı ile İstanbul'un 39 ilçesinde kentsel dönüşüm, kat karşılığı inşaat, konut ve anahtar teslim proje hizmetleri.",
  },
  {
    path: "projects",
    title: "Aydın İnşaat Projeleri | İstanbul Konut ve Dönüşüm",
    description:
      "Aydın İnşaat ve Biz Aydın Grup Yapı'nın Güngören, Kartal, Zeytinburnu, Bahçelievler ve İstanbul genelindeki konut ve dönüşüm projelerini inceleyin.",
  },
  {
    path: "projeler/gungoren-akincilar-projesi",
    title: "Güngören Akıncılar Kentsel Dönüşüm | Biz Aydın",
    description:
      "Güngören Akıncılar Kentsel Dönüşüm Projesi'nin kontrollü yıkım sürecini, saha çalışmalarını ve Biz Aydın Grup proje yaklaşımını inceleyin.",
    image: "/gungoren-akincilar-og.jpg",
  },
  {
    path: "projeler/aydin-park-evleri-projesi",
    title: "Aydın Park Evleri Konut Projesi | Biz Aydın Grup Yapı",
    description:
      "Aydın Park Evleri Konut Projesi'nin mimari yaklaşımını, uygulama fotoğraflarını ve Biz Aydın Grup'un konut projesi deneyimini inceleyin.",
  },
  {
    path: "projeler/istanbul-kartal-konut-projesi",
    title: "İstanbul Kartal Konut Projesi | Biz Aydın Grup Yapı",
    description:
      "İstanbul Kartal Konut Projesi'nin dış cephe ve uygulama fotoğraflarını, proje yaklaşımını ve Biz Aydın Grup yapı deneyimini inceleyin.",
  },
  {
    path: "projeler/istanbul-gungoren-konut-projesi",
    title: "İstanbul Güngören Konut Projesi | Biz Aydın Grup Yapı",
    description:
      "İstanbul Güngören Konut Projesi'nin uygulama görsellerini ve Güngören merkezli Biz Aydın Grup'un yapı ve proje deneyimini inceleyin.",
  },
  {
    path: "projeler/tekirdag-konut-projesi",
    title: "Tekirdağ Konut Projesi | Biz Aydın Grup Yapı",
    description:
      "Tekirdağ Konut Projesi'nin yapı görünümünü, proje yaklaşımını ve Biz Aydın Grup'un konut uygulamalarındaki deneyimini inceleyin.",
  },
  {
    path: "projeler/zeytinburnu-konut-projesi",
    title: "İstanbul Zeytinburnu Konut Projesi | Biz Aydın Grup Yapı",
    description:
      "İstanbul Zeytinburnu Konut Projesi'nin dış cephe uygulamasını ve Biz Aydın Grup'un İstanbul'daki konut projesi deneyimini inceleyin.",
  },
  {
    path: "projeler/istanbul-bahcelievler-konut-projesi",
    title: "İstanbul Bahçelievler Konut Projesi | Biz Aydın Grup Yapı",
    description:
      "İstanbul Bahçelievler Konut Projesi'nin uygulama görselini ve Biz Aydın Grup'un İstanbul genelindeki konut ve yapı deneyimini inceleyin.",
  },
  {
    path: "sikca-sorulan-sorular",
    title: "Aydın İnşaat SSS | Kentsel Dönüşüm ve İnşaat",
    description:
      "Aydın İnşaat hizmetleri, İstanbul kentsel dönüşüm, kat karşılığı inşaat, bina yenileme, proje süresi ve teklif süreci hakkında sıkça sorulan sorular.",
  },
  {
    path: "about",
    title: "Aydın İnşaat Hakkımızda | Biz Aydın Grup İstanbul",
    description:
      "Aydın İnşaat ve Biz Aydın Grup Yapı; 40+ yıllık tecrübesiyle İstanbul'da kentsel dönüşüm, kat karşılığı inşaat ve konut projeleri geliştirir.",
  },
  {
    path: "contact",
    title: "Aydın İnşaat İletişim | İstanbul | Biz Aydın Grup",
    description:
      "Aydın İnşaat ve Güngören merkezli Biz Aydın Grup ile iletişime geçin. İstanbul kentsel dönüşüm, kat karşılığı ve konut projeniz için görüşün.",
  },
];

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const replaceTitle = (html, title) =>
  html.replace(
    /<title data-rh="true">.*?<\/title>/i,
    `<title data-rh="true">${escapeHtml(title)}</title>`
  );

const replaceMeta = (html, attribute, key, content) => {
  const pattern = new RegExp(
    `<meta(?=[^>]*data-rh="true")(?=[^>]*${attribute}="${key}")[^>]*>`,
    "i"
  );
  const tag = `<meta data-rh="true" ${attribute}="${key}" content="${escapeHtml(
    content
  )}"/>`;

  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `${tag}</head>`);
};

const replaceCanonical = (html, canonical) => {
  const pattern =
    /<link(?=[^>]*data-rh="true")(?=[^>]*rel="canonical")[^>]*>/i;
  const tag = `<link data-rh="true" rel="canonical" href="${escapeHtml(
    canonical
  )}"/>`;

  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `${tag}</head>`);
};

if (!fs.existsSync(templatePath)) {
  throw new Error("Build index.html bulunamadı. Önce üretim derlemesini çalıştırın.");
}

const template = fs.readFileSync(templatePath, "utf8");

routes.forEach((route) => {
  const canonical = `${siteUrl}/${route.path}`;
  const image = `${siteUrl}${route.image || "/og.jpg"}`;
  let html = replaceTitle(template, route.title);

  html = replaceMeta(html, "name", "description", route.description);
  html = replaceCanonical(html, canonical);
  html = replaceMeta(html, "property", "og:title", route.title);
  html = replaceMeta(html, "property", "og:description", route.description);
  html = replaceMeta(html, "property", "og:url", canonical);
  html = replaceMeta(html, "property", "og:image", image);
  html = replaceMeta(html, "name", "twitter:title", route.title);
  html = replaceMeta(html, "name", "twitter:description", route.description);
  html = replaceMeta(html, "name", "twitter:image", image);

  const outputDirectory = path.join(buildDirectory, ...route.path.split("/"));
  fs.mkdirSync(outputDirectory, { recursive: true });
  fs.writeFileSync(path.join(outputDirectory, "index.html"), html, "utf8");
});

console.log(`${routes.length} rota için benzersiz SEO giriş sayfası oluşturuldu.`);
