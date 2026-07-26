import park from "../assets/projects/AydınParkEvleri.jpeg";
import park1 from "../assets/projects/aydınparkEvleri2.jpeg";
import park2 from "../assets/projects/aydınParkEvleri4.jpg";
import park3 from "../assets/projects/aydınKartal3.jpg";
import kartal from "../assets/projects/KartalProje.jpeg";
import kartal1 from "../assets/projects/kartalProje1.jpeg";
import kartal2 from "../assets/projects/kartalProje2.jpeg";
import kartal3 from "../assets/projects/kartalProje3.jpeg";
import gungoren from "../assets/projects/güngörenProje.jpeg";
import gungoren1 from "../assets/projects/gungoren-proje.webp";
import tekirdag from "../assets/projects/tekirdagProje.jpeg";
import zeytinburnu from "../assets/projects/ZeytinburnuProje.jpeg";
import bahcelievler from "../assets/projects/bahceliEvler.jpg";
import akincilar1 from "../assets/projects/gungoren-akincilar-1.jpeg";
import akincilar2 from "../assets/projects/gungoren-akincilar-2.jpeg";
import akincilar3 from "../assets/projects/gungoren-akincilar-3.jpeg";
import akincilar4 from "../assets/projects/gungoren-akincilar-4.jpeg";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectRecord {
  slug: string;
  title: string;
  cardTitle: string;
  location: string;
  projectType: string;
  shortDescription: string;
  metaDescription: string;
  intro: string[];
  highlights: string[];
  images: ProjectImage[];
}

export const projectRecords: ProjectRecord[] = [
  {
    slug: "gungoren-akincilar-projesi",
    title: "Güngören Akıncılar Kentsel Dönüşüm Projesi",
    cardTitle: "Güngören Akıncılar Projesi",
    location: "Akıncılar Mahallesi, Güngören / İstanbul",
    projectType: "Kentsel dönüşüm projesi",
    shortDescription:
      "Akıncılar Mahallesi'nde güvenli ve modern yaşam alanları için yürütülen kentsel dönüşüm projesi.",
    metaDescription:
      "Güngören Akıncılar Kentsel Dönüşüm Projesi'nin kontrollü yıkım sürecini, saha çalışmalarını ve Biz Aydın Grup proje yaklaşımını inceleyin.",
    intro: [
      "Güngören Akıncılar Projesi, mevcut yapının güvenli biçimde yenilenmesi ve güncel yaşam ihtiyaçlarına uygun konutların oluşturulması amacıyla yürüttüğümüz kentsel dönüşüm çalışmasıdır.",
      "Saha güvenliği, kontrollü yıkım ve planlı proje yönetimi; uygulamanın her aşamasında öncelik verdiğimiz temel başlıklardır.",
    ],
    highlights: [
      "Kontrollü yıkım ve çevre güvenliği",
      "Kentsel dönüşüm odaklı planlama",
      "Şeffaf ve takip edilebilir saha süreci",
    ],
    images: [
      {
        src: akincilar2,
        alt: "Güngören Akıncılar Projesi kontrollü bina yıkım çalışması",
      },
      {
        src: akincilar3,
        alt: "Akıncılar Mahallesi kentsel dönüşüm proje alanı",
      },
      {
        src: akincilar1,
        alt: "Biz Aydın Grup Güngören Akıncılar şantiye güvenlik alanı",
      },
      {
        src: akincilar4,
        alt: "Güngören Akıncılar kentsel dönüşüm şantiyesi",
      },
    ],
  },
  {
    slug: "aydin-park-evleri-projesi",
    title: "Aydın Park Evleri Konut Projesi",
    cardTitle: "Aydın Park Evleri Projesi",
    location: "İstanbul",
    projectType: "Konut projesi",
    shortDescription:
      "Modern cephe yaklaşımı ve işlevsel yaşam alanlarıyla geliştirilen konut projesi.",
    metaDescription:
      "Aydın Park Evleri Konut Projesi'nin mimari yaklaşımını, uygulama fotoğraflarını ve Biz Aydın Grup'un konut projesi deneyimini inceleyin.",
    intro: [
      "Aydın Park Evleri, şehir yaşamının günlük ihtiyaçlarını karşılayan konforlu ve işlevsel konut yaklaşımımızı yansıtan projelerimizden biridir.",
      "Cephe düzeni, yaşam alanlarının kullanışlılığı ve uygulama kalitesi; proje yaklaşımımızın temel unsurları olarak ele alınmıştır.",
    ],
    highlights: [
      "Konut kullanımına odaklanan işlevsel planlama",
      "Şehir dokusuyla uyumlu cephe yaklaşımı",
      "Planlı uygulama ve saha koordinasyonu",
    ],
    images: [
      { src: park2, alt: "Aydın Park Evleri konut projesi dış cephe görünümü" },
      { src: park3, alt: "Aydın Park Evleri proje girişi ve çevre düzeni" },
      { src: park, alt: "Aydın Park Evleri tamamlanan yapı görünümü" },
      { src: park1, alt: "Aydın Park Evleri konut projesi cephe detayı" },
    ],
  },
  {
    slug: "istanbul-kartal-konut-projesi",
    title: "İstanbul Kartal Konut Projesi",
    cardTitle: "İstanbul Kartal Projesi",
    location: "Kartal / İstanbul",
    projectType: "Konut projesi",
    shortDescription:
      "Kartal'da işlevsel yaşam alanları ve çağdaş cephe anlayışıyla hayata geçirilen konut projesi.",
    metaDescription:
      "İstanbul Kartal Konut Projesi'nin dış cephe ve uygulama fotoğraflarını, proje yaklaşımını ve Biz Aydın Grup yapı deneyimini inceleyin.",
    intro: [
      "İstanbul Kartal Konut Projesi, bölgenin kentsel dokusuna uyum sağlayan ve günlük yaşam konforunu gözeten yapı yaklaşımımızı yansıtır.",
      "Projede cephe bütünlüğü, kullanışlı yaşam alanları ve uygulama sürecinin düzenli ilerlemesi birlikte değerlendirilmiştir.",
    ],
    highlights: [
      "Kartal'ın kentsel dokusuna uyumlu tasarım",
      "İşlevsel ve konforlu konut yaklaşımı",
      "Uygulama ayrıntılarında kalite odağı",
    ],
    images: [
      { src: kartal, alt: "İstanbul Kartal konut projesi dış cephe görünümü" },
      { src: kartal1, alt: "Kartal konut projesi cephe ve balkon detayları" },
      { src: kartal2, alt: "Biz Aydın Grup Kartal projesi yapı görünümü" },
      { src: kartal3, alt: "İstanbul Kartal konut projesi sokak cephesi" },
    ],
  },
  {
    slug: "istanbul-gungoren-konut-projesi",
    title: "İstanbul Güngören Konut Projesi",
    cardTitle: "İstanbul Güngören Projesi",
    location: "Güngören / İstanbul",
    projectType: "Konut projesi",
    shortDescription:
      "Güngören'de şehir yaşamına uyumlu ve kullanışlı konut alanları sunan yapı projesi.",
    metaDescription:
      "İstanbul Güngören Konut Projesi'nin uygulama görsellerini ve Güngören merkezli Biz Aydın Grup'un yapı ve proje deneyimini inceleyin.",
    intro: [
      "Güngören Konut Projesi, ilçenin yoğun şehir dokusu içinde güvenli, kullanışlı ve uzun ömürlü yaşam alanları oluşturma yaklaşımımızı yansıtır.",
      "Yerel saha tecrübemiz; planlama, uygulama koordinasyonu ve yapı detaylarının birlikte yönetilmesini sağlar.",
    ],
    highlights: [
      "Güngören'de yerel saha ve bölge deneyimi",
      "Şehir yaşamına uygun konut planlaması",
      "Uzun ömürlü kullanım için uygulama odağı",
    ],
    images: [
      { src: gungoren, alt: "İstanbul Güngören konut projesi bina cephesi" },
      { src: gungoren1, alt: "Biz Aydın Grup Güngören projesi yapı görünümü" },
    ],
  },
  {
    slug: "tekirdag-konut-projesi",
    title: "Tekirdağ Konut Projesi",
    cardTitle: "Tekirdağ Projesi",
    location: "Tekirdağ",
    projectType: "Konut projesi",
    shortDescription:
      "Dengeli cephe düzeni ve kullanışlı yaşam alanlarıyla geliştirilen konut projesi.",
    metaDescription:
      "Tekirdağ Konut Projesi'nin yapı görünümünü, proje yaklaşımını ve Biz Aydın Grup'un konut uygulamalarındaki deneyimini inceleyin.",
    intro: [
      "Tekirdağ Konut Projesi, çağdaş konut ihtiyaçlarını işlevsel planlama ve dengeli bir cephe yaklaşımıyla buluşturan çalışmalarımızdan biridir.",
      "Yapının kullanım konforu, cephe bütünlüğü ve uygulama sürecinin planlı ilerlemesi proje yaklaşımında birlikte ele alınmıştır.",
    ],
    highlights: [
      "İşlevsel yaşam alanlarına odaklanan planlama",
      "Dengeli cephe ve balkon düzeni",
      "Planlı uygulama süreci",
    ],
    images: [
      { src: tekirdag, alt: "Tekirdağ konut projesi dış cephe görünümü" },
    ],
  },
  {
    slug: "zeytinburnu-konut-projesi",
    title: "İstanbul Zeytinburnu Konut Projesi",
    cardTitle: "Zeytinburnu Projesi",
    location: "Zeytinburnu / İstanbul",
    projectType: "Konut projesi",
    shortDescription:
      "Zeytinburnu'nda modern cephe ve şehir yaşamına uygun konut anlayışıyla geliştirilen proje.",
    metaDescription:
      "İstanbul Zeytinburnu Konut Projesi'nin dış cephe uygulamasını ve Biz Aydın Grup'un İstanbul'daki konut projesi deneyimini inceleyin.",
    intro: [
      "Zeytinburnu Konut Projesi, İstanbul'un merkezi ilçelerinden birinde şehir yaşamının ihtiyaçlarına cevap veren konut yaklaşımımızı yansıtır.",
      "Cephe malzemelerinin dengesi, balkon kullanımı ve zemin kat düzeni; yapının işleviyle birlikte değerlendirilmiştir.",
    ],
    highlights: [
      "Zeytinburnu kent dokusuna uyumlu yaklaşım",
      "Cephe ve balkon düzeninde bütünlük",
      "Konut kullanımına odaklı yapı çözümü",
    ],
    images: [
      {
        src: zeytinburnu,
        alt: "İstanbul Zeytinburnu konut projesi dış cephe görünümü",
      },
    ],
  },
  {
    slug: "istanbul-bahcelievler-konut-projesi",
    title: "İstanbul Bahçelievler Konut Projesi",
    cardTitle: "İstanbul Bahçelievler Projesi",
    location: "Bahçelievler / İstanbul",
    projectType: "Konut projesi",
    shortDescription:
      "Bahçelievler'de konforlu yaşam alanları ve işlevsel cephe düzeniyle geliştirilen konut projesi.",
    metaDescription:
      "İstanbul Bahçelievler Konut Projesi'nin uygulama görselini ve Biz Aydın Grup'un İstanbul genelindeki konut ve yapı deneyimini inceleyin.",
    intro: [
      "Bahçelievler Konut Projesi, ilçenin yerleşik mahalle dokusuna uyum sağlayan ve konut kullanımını öne çıkaran yapı yaklaşımımızı yansıtır.",
      "Pencere, balkon ve cephe oranları; doğal ışık, günlük kullanım ve dış görünüm dengesi gözetilerek ele alınmıştır.",
    ],
    highlights: [
      "Bahçelievler'in mahalle dokusuna uyum",
      "Doğal ışık ve günlük kullanım odağı",
      "Cephe ayrıntılarında bütüncül yaklaşım",
    ],
    images: [
      {
        src: bahcelievler,
        alt: "İstanbul Bahçelievler konut projesi dış cephe görünümü",
      },
    ],
  },
];

export const getProjectBySlug = (slug?: string) =>
  projectRecords.find((project) => project.slug === slug);
