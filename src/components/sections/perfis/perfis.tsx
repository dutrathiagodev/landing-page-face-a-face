import { perfis } from "@/content/perfis";
import { ProfilePanel } from "./profile-panel";

export function Perfis() {
  return (
    <section id="perfis" className="grid md:grid-cols-2">
      {perfis.map((profile) => (
        <ProfilePanel key={profile.candidate} profile={profile} />
      ))}
    </section>
  );
}
