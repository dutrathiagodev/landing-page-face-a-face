import { Container } from "@/components/ui/container";
import { footer } from "@/content/footer";

function SourceLabel({ label }: { label: string }) {
  const match = label.match(/^(\[\d+\])\s*(.*)$/);
  if (!match) return <>{label}</>;

  return (
    <>
      <span className="mr-2 text-muted-dark">{match[1]}</span>
      {match[2]}
    </>
  );
}

export function Footer() {
  return (
    <footer id="fontes" className="bg-ink py-12 md:py-[72px]">
      <Container className="flex flex-col gap-10">
        <h2 className="text-[28px] font-extrabold leading-[1.2] text-white">
          {footer.title}
        </h2>

        <div className="gap-x-12 md:columns-2 lg:columns-3">
          {footer.groups.map((group) => (
            <section
              key={group.title}
              className="mb-8 break-inside-avoid border-t border-line-dark pt-4"
            >
              <h3 className="font-mono text-caption font-medium uppercase leading-[1.4] tracking-[2px] text-muted-dark">
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-col gap-2 text-caption leading-[1.6] text-text-on-dark">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono underline-offset-4 hover:text-white hover:underline"
                    >
                      <SourceLabel label={link.label} />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="max-w-[760px] text-small leading-[1.5] text-muted-dark">
          {footer.disclaimer}
        </p>
      </Container>
    </footer>
  );
}
