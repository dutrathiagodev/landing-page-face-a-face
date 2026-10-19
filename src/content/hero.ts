import type { HeroContent } from "@/types/hero";

export const hero: HeroContent = {
  image: {
    src: "/images/hero-face-a-face.jpg",
    alt: "Lula e Flávio Bolsonaro de perfil, frente a frente, em preto e branco sobre fundo rosa",
  },
  candidates: [
    { candidate: "lula", party: "Partido dos Trabalhadores · 13", name: "Lula" },
    { candidate: "flavio", party: "Partido Liberal · 22", name: "Flávio" },
  ],
};
