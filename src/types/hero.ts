export type Candidate = "lula" | "flavio";

export type NamePlateData = {
  candidate: Candidate;
  party: string;
  name: string;
};

export type HeroContent = {
  date: string;
  image: { src: string; alt: string };
  candidates: [NamePlateData, NamePlateData];
};
