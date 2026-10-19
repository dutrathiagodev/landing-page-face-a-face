import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero/hero";
import { Manifesto } from "@/components/sections/manifesto/manifesto";
import { LadoALado } from "@/components/sections/lado-a-lado/lado-a-lado";
import { Perfis } from "@/components/sections/perfis/perfis";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Manifesto />
        <Perfis />
        <LadoALado />
        {/* Status jurídico */}
        {/* Perguntas */}
        {/* GoldenRule */}
      </main>
      {/* Footer: components/layout/footer.tsx */}
    </>
  );
}
