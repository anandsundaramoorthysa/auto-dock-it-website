import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { ThemeImage } from "@/components/theme-image";
import { Eyebrow } from "@/components/ui/section-heading";
import { links } from "@/lib/site";
import { trustBadges } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* layered backdrop: grid + radial glow */}
      <div
        aria-hidden="true"
        className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="glow-radial animate-pulse-glow pointer-events-none absolute inset-x-0 top-0 h-[600px]"
      />

      <div className="container-prose relative pb-16 pt-16 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Agentic developer tooling · Open source</Eyebrow>

          <h1 className="text-gradient mt-5 text-balance text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl">
            The AI Dockerfile generator that containerizes any GitHub repo
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted">
            Point Auto-Dock It at a public repository. It detects the stack,
            writes a production-grade Dockerfile, runs the build, and{" "}
            <span className="font-medium text-fg">
              self-heals build and runtime errors
            </span>{" "}
            until your container responds — all driven by an LLM.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={links.liveDemo} external size="lg">
              Try the live demo
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

          <a
            href={links.codespaces}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
          >
            <Icon name="Terminal" className="h-3.5 w-3.5" />
            or run the full self-healing loop in GitHub Codespaces
          </a>

          <ul className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
            {trustBadges.map((b) => (
              <li
                key={b}
                className="glass glass-hi inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-fg-muted"
              >
                <Icon name="Check" className="h-3.5 w-3.5" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero screenshot — glass frame with glow, theme-matched */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            aria-hidden="true"
            className="glow-radial pointer-events-none absolute -inset-x-10 -top-10 bottom-0"
          />
          <div className="glass glass-hi card-hover relative overflow-hidden rounded-2xl p-1.5">
            <div className="overflow-hidden rounded-xl border border-border">
              <ThemeImage
                lightSrc="/screenshots/light-landing.png"
                darkSrc="/screenshots/dark-landing.png"
                alt="Auto-Dock It dashboard generating a production-grade Dockerfile for a GitHub repository, showing the Containerize, Explain and Improve tabs"
                width={1400}
                height={900}
                loading="eager"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
