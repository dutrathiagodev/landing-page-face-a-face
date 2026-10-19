"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { navbar } from "@/content/navbar";

export function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      const passedHero = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      setVisible(passedHero);
      if (!passedHero) setOpen(false);
    });

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      inert={!visible}
      className={`fixed inset-x-0 top-0 z-50 bg-ink text-text-on-dark transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <a href="#" className="flex items-baseline gap-2" aria-label="Face a Face">
          <span className="font-lula text-[22px] leading-none tracking-[0.5px] text-lula-accent">
            FACE
          </span>
          <span className="font-mono text-mono text-muted-dark">a</span>
          <span className="font-flavio text-[22px] font-black italic leading-none tracking-[-1px] text-flavio-accent">
            FACE
          </span>
          <span className="ml-1 hidden font-mono text-caption text-muted-dark sm:inline">
            {navbar.tagline}
          </span>
        </a>

        <nav aria-label="Seções" className="hidden md:block">
          <ul className="flex items-center gap-5">
            {navbar.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-mono transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="font-mono text-mono md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </Container>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Seções"
          className="border-t border-line-dark md:hidden"
        >
          <ul className="flex flex-col px-6 py-2">
            {navbar.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono text-mono"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
