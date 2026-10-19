import type { Candidate } from "@/types/hero";

export type QuestionListData = {
  candidate: Candidate;
  questions: string[];
};

export type ThemeData = {
  title: string;
  text: string;
};

export type PerguntasContent = {
  eyebrow: string;
  title: string;
  lead: string;
  lists: [QuestionListData, QuestionListData];
  themes: ThemeData[];
};
