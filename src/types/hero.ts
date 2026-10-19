export type Candidate = "lula" | "flavio";

export type NamePlateData = {
  candidate: Candidate;
  party: string;
  name: string;
};

export type HeroContent = {
  image: { src: string; alt: string };
  candidates: [NamePlateData, NamePlateData];
};
