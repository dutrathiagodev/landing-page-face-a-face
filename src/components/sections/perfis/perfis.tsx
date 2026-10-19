import { perfis } from "@/content/perfis";
import { ProfilePanel } from "./profile-panel";

export function Perfis() {
  return (
    <section
      id="perfis"
      aria-labelledby="perfis-titulo"
      className="grid md:grid-cols-2"
    >
      <h2 id="perfis-titulo" className="sr-only">
        Perfis dos candidatos
      </h2>
      {perfis.map((profile) => (
        <ProfilePanel key={profile.candidate} profile={profile} />
      ))}
    </section>
  );
}
