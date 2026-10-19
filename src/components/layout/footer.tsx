import { Container } from "@/components/ui/container";
import { footer } from "@/content/footer";

export function Footer() {
  return (
    <footer id="fontes" className="bg-ink py-12 md:py-[72px]">
      <Container className="flex flex-col gap-10">
        <h2 className="text-[28px] font-extrabold leading-[1.2] text-white">
          {footer.title}
        </h2>

        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {footer.groups.map((group) => (
            <section key={group.title} className="flex flex-col gap-3">
              <h3 className="font-mono text-overline font-medium uppercase leading-[1.4] tracking-[2px] text-muted-dark">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3 font-mono text-mono leading-[1.5] text-text-on-dark">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:text-white hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="border-t border-line-dark pt-7">
          <p className="max-w-[760px] text-small leading-[1.5] text-text-on-dark">
            {footer.disclaimer}
          </p>
        </div>
      </Container>
    </footer>
  );
}
