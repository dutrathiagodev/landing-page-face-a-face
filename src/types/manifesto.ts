type ManifestoCta = {
  label: string;
  href: string;
  variant: "primary" | "outline";
};

export type ManifestoContent = {
  eyebrow: string;
  title: string;
  lead: string;
  note: string;
  ctas: ManifestoCta[];
};
