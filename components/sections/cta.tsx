import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { links } from "@/lib/site";

export function Cta() {
  return (
    <section className="border-b border-border">
      <div className="container-prose py-20 sm:py-28">
        <div className="relative overflow-hidden rounded-2xl border border-border2 bg-surface px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--adi-border) 1px, transparent 1px), linear-gradient(to bottom, var(--adi-border) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Containerize your next repo in minutes
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
              Try the hosted demo, or spin up the full self-healing pipeline in a
              free GitHub Codespace. No credit card, free-tier LLM keys welcome.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={links.liveDemo} external size="lg">
                Try the live demo
                <Icon name="ArrowUpRight" className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={links.codespaces}
                external
                variant="secondary"
                size="lg"
              >
                <Icon name="Terminal" className="h-4 w-4" />
                Open in Codespaces
              </ButtonLink>
              <ButtonLink
                href={links.github}
                external
                variant="ghost"
                size="lg"
              >
                <Icon name="Star" className="h-4 w-4" />
                Star on GitHub
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
