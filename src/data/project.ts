// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

export const ourProjects: Project[] = [
  {
    id: 1,
    title: "Aydın Park Evleri",
    description: "İstanbul’da tamamlanan modern konut projesi.",
    date: "2024-06-15",
    image: "/projects/aydin-park-evleri.jpg",
  },
  {
    id: 2,
    title: "İstanbul / Kartal Projesi",
    description: "Güvenli ve işlevsel yaşam alanlarıyla konut projesi.",
    date: "2019-01-01",
    image: "/projects/kartal-projesi.jpg",
  },
  {
    id: 3,
    title: "İstanbul / Güngören Projesi",
    description: "Kentsel dönüşüm odağında geliştirilen konut projesi.",
    date: "2019-01-01",
    image: "/projects/gungoren-projesi.jpg",
  },
];

export const partnerProjects: Project[] = [
  {
    id: 1,
    title: "Tekirdağ Projesi",
    description: "Konut projesi.",
    date: "2022-01-01",
    image: "/projects/tekirdag-projesi.jpg",
  },
  {
    id: 2,
    title: "Zeytinburnu Projesi",
    description: "Konut projesi.",
    date: "2021-01-01",
    image: "/projects/zeytinburnu-projesi.jpg",
  },
  {
    id: 3,
    title: "İstanbul / Bahçelievler",
    description: "Konut projesi.",
    date: "2020-01-01",
    image: "/projects/bahcelievler-projesi.jpg",
  },
];
