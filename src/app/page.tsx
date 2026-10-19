import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero/hero";
import { Manifesto } from "@/components/sections/manifesto/manifesto";
import { LadoALado } from "@/components/sections/lado-a-lado/lado-a-lado";
import { Perfis } from "@/components/sections/perfis/perfis";
import { Perguntas } from "@/components/sections/perguntas/perguntas";
import { StatusJuridico } from "@/components/sections/status-juridico/status-juridico";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Manifesto />
        <Perfis />
        <LadoALado />
        <StatusJuridico />
        <Perguntas />
        {/* GoldenRule */}
      </main>
      {/* Footer: components/layout/footer.tsx */}
    </>
  );
}
