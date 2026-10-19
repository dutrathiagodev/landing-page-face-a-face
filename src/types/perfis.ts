import type { Candidate } from "@/types/hero";

export type ProfileItem = {
  title: string;
  text: string;
  ref: string;
};

export type ProfileData = {
  candidate: Candidate;
  name: string;
  bio: string;
  image: { src: string; alt: string };
  strengths: ProfileItem[];
  risks: ProfileItem[];
};
