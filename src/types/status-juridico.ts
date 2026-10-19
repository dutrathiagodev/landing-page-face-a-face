export type LegalCardData = {
  title: string;
  tone: "lula" | "flavio";
  text: string;
  source: string;
};

export type StatusJuridicoContent = {
  eyebrow: string;
  title: string;
  lead: string;
  cards: [LegalCardData, LegalCardData];
};
