import type { HeroContent } from "@/types/hero";

export const hero: HeroContent = {
  image: {
    src: "/images/hero-face-a-face.jpg",
    alt: "Lula e Flávio frente a frente",
  },
  candidates: [
    { candidate: "lula", party: "Partido dos Trabalhadores · 13", name: "Lula" },
    { candidate: "flavio", party: "Partido Liberal · 22", name: "Flávio" },
  ],
};
