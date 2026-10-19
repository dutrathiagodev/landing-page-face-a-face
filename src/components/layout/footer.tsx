import { Container } from "@/components/ui/container";
import { footer } from "@/content/footer";

export function Footer() {
  return (
    <footer id="fontes" className="bg-ink py-12 md:py-[72px]">
      <Container className="flex flex-col gap-7">
        <h2 className="text-[28px] font-extrabold leading-[1.2] text-white">
          {footer.title}
        </h2>

        <ul className="grid gap-x-8 gap-y-3 font-mono text-mono leading-[1.5] text-text-on-dark sm:grid-cols-2 lg:grid-cols-3">
          {footer.sources.map((source) => (
            <li key={source.label}>
              <a
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-white hover:underline"
              >
                {source.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4 border-t border-line-dark pt-7 ">
          <p className="max-w-[760px] text-small leading-[1.5] text-text-on-dark">
            {footer.disclaimer}
          </p>
        </div>
      </Container>
    </footer>
  );
}
