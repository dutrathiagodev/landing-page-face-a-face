import Image from "next/image";
import { asset } from "@/lib/asset";
import type { ProfileData, ProfileItem } from "@/types/perfis";

const styles = {
  lula: {
    panel: "bg-lula text-lula-tint",
    pad: "md:pl-[104px] md:pr-12",
    plate:
      "bg-lula left-0 justify-end font-lula text-[clamp(44px,8vw,96px)] leading-none tracking-[0.5px]",
    heading: "font-lula text-[38px] leading-none tracking-[0.5px] text-white",
    card: "bg-lula-dark",
    divider: "border-lula-line",
    rule: "border-white border-b",
    ref: "text-lula-line",
  },
  flavio: {
    panel: "bg-flavio text-flavio-tint",
    pad: "md:pl-12 md:pr-[104px]",
    plate:
      "bg-flavio right-0 justify-start font-flavio text-[clamp(54px,9.8vw,118px)] font-black italic leading-none tracking-[-1px]",
    heading:
      "font-flavio text-[30px] font-black italic leading-none tracking-[-1px] text-white",
    card: "bg-flavio-dark",
    divider: "border-flavio-line",
    rule: "border-flavio-accent border-b-2",
    ref: "text-flavio-accent",
  },
};

function Ref({ value, className }: { value: string; className: string }) {
  const numbers = value.match(/\[\d+\]/g);
  if (!numbers) return null;

  return (
    <p className={`mt-2 font-mono text-caption leading-[1.5] ${className}`}>
      {numbers.map((number) => (
        <a
          key={number}
          href="#fontes"
          className="border-b border-current/40 hover:border-current"
        >
          {number}
        </a>
      ))}
    </p>
  );
}

function Card({
  item,
  tone,
}: {
  item: ProfileItem;
  tone: (typeof styles)["lula"];
}) {
  return (
    <li className={`flex min-h-[196px] flex-col p-[22px] ${tone.card}`}>
      <h4 className="text-card font-extrabold leading-[1.3] text-white">
        {item.title}
      </h4>
      <p className="mt-2 text-small leading-[1.5]">{item.text}</p>
      <Ref value={item.ref} className={tone.ref} />
    </li>
  );
}

export function ProfilePanel({ profile }: { profile: ProfileData }) {
  const tone = styles[profile.candidate];
  const isFlavio = profile.candidate === "flavio";

  return (
    <article className={`flex flex-col ${tone.panel}`}>
      <div className="relative h-[360px] overflow-hidden md:h-[clamp(440px,44vw,680px)]">
        <Image
          src={asset(profile.image.src)}
          alt={profile.image.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-center grayscale contrast-[1.1]"
        />
        <h3
          className={`absolute bottom-0 flex h-[clamp(84px,12vw,150px)] w-[88%] items-center whitespace-nowrap px-6 uppercase text-white md:w-3/4 md:px-8 ${tone.plate}`}
        >
          <span className="relative inline-block">
            {profile.name}
            {isFlavio && (
              <span className="absolute -bottom-3 left-0 h-[6px] w-full bg-flavio-accent" />
            )}
          </span>
        </h3>
      </div>

      <div className={`flex flex-col px-6 pb-12 ${tone.pad}`}>
        <p className="mt-8 text-body leading-[1.55]">{profile.bio}</p>

        <h3 className={`mt-12 uppercase ${tone.heading}`}>Pontos fortes</h3>
        <ul className="mt-4 grid gap-[10px] sm:grid-cols-2">
          {profile.strengths.map((item) => (
            <Card key={item.title} item={item} tone={tone} />
          ))}
        </ul>

        <h3 className={`mt-12 pb-3 uppercase ${tone.heading} ${tone.rule}`}>
          Riscos e críticas
        </h3>
        <ul>
          {profile.risks.map((item) => (
            <li key={item.title} className={`border-b py-4 ${tone.divider}`}>
              <h4 className="text-body font-bold leading-[1.5] text-white">
                {item.title}
              </h4>
              <p className="mt-1 text-small leading-[1.5]">{item.text}</p>
              <Ref value={item.ref} className={tone.ref} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
