import type { Candidate } from "@/types/hero";

export type ComparisonRowData = {
  dimension: string;
  lula: string;
  flavio: string;
};

export type StatData = {
  candidate: Candidate;
  value: string;
  label: string;
  source: string;
};

export type LadoALadoContent = {
  eyebrow: string;
  title: string;
  lead: string;
  rows: ComparisonRowData[];
  stats: StatData[];
  note: string;
};
