"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Icon } from "@/components/ui/icon";
import { ButtonLink } from "@/components/ui/button";
import { navLinks, links } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "glass border-b shadow-[0_4px_30px_-12px_var(--glow)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-prose flex h-16 items-center justify-between gap-4"
      >
        <a href="#top" className="shrink-0" aria-label="Auto-Dock It — home">
          <Logo />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star Auto-Dock It on GitHub"
            className="glass glass-hi hidden h-9 items-center gap-2 rounded-xl px-3 text-sm font-medium text-fg transition-colors hover:border-border2 sm:inline-flex"
          >
            <Icon name="Github" className="h-4 w-4" />
            <span className="hidden lg:inline">Star</span>
          </a>
          <ThemeToggle />
          <ButtonLink
            href={links.liveDemo}
            external
            size="md"
            className="hidden sm:inline-flex"
          >
            Try live demo
            <Icon name="ArrowUpRight" className="h-4 w-4" />
          </ButtonLink>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="glass glass-hi inline-flex h-9 w-9 items-center justify-center rounded-full text-fg md:hidden"
          >
            <Icon name={open ? "X" : "Menu"} className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      {open ? (
        <div className="md:hidden">
          <div className="glass container-prose flex flex-col gap-1 border-t pb-6 pt-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-fg-muted transition-colors hover:bg-surface hover:text-fg"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <ButtonLink href={links.liveDemo} external size="lg">
                Try live demo
                <Icon name="ArrowUpRight" className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={links.github}
                external
                variant="secondary"
                size="lg"
              >
                <Icon name="Github" className="h-4 w-4" />
                View on GitHub
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
