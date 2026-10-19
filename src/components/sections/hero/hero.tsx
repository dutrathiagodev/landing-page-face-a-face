import Image from "next/image";
import { hero } from "@/content/hero";
import { getToday } from "@/lib/today";
import { NamePlate } from "./name-plate";

export async function Hero() {
  const [lula, flavio] = hero.candidates;
  const today = await getToday();

  return (
    <section id="hero" className="relative h-[600px] md:h-[clamp(420px,56vw,820px)] w-full overflow-hidden bg-pink">
      <h1 className="sr-only">Lula x Flávio — Face a Face</h1>
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />

      <div className="absolute left-1/2 top-8 flex -translate-x-1/2 flex-col items-center gap-2 md:top-14">
        <p className="bg-pink px-2 py-1 font-mono text-overline font-medium uppercase leading-[1.4] tracking-[2px] text-ink">
          {today}
        </p>
        <span
          aria-hidden="true"
          className="text-[clamp(72px,12.5vw,180px)] font-extrabold leading-[0.8] tracking-[-1px] text-ink"
        >
          ×
        </span>
      </div>

      <div className="absolute inset-x-4 bottom-6 flex flex-col gap-4 md:contents">
        <div className="self-start md:absolute md:bottom-10 md:left-12">
          <NamePlate {...lula} />
        </div>
        <div className="self-end md:absolute md:bottom-10 md:right-12">
          <NamePlate {...flavio} />
        </div>
      </div>
    </section>
  );
}
