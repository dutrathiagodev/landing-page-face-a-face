import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero/hero";
import { Manifesto } from "@/components/sections/manifesto/manifesto";
import { Perfis } from "@/components/sections/perfis/perfis";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Manifesto />
        <Perfis />
        {/* Lado a lado */}
        {/* Status jurídico */}
        {/* Perguntas */}
        {/* GoldenRule */}
      </main>
      {/* Footer: components/layout/footer.tsx */}
    </>
  );
}
