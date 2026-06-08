import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { credibility } from "@/lib/data";

export function Credibility() {
  return (
    <section className="border-b border-border">
      <div className="container-prose py-20 sm:py-28">
        <SectionHeading
          eyebrow="Testing evidence"
          title="Built to be trusted, not just demoed"
          subtitle="A real test suite, clean lint and security scans, and a CI matrix across four Python versions — with nine recorded runs as integration evidence."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {credibility.map((c, i) => (
            <Reveal key={c.label} delay={(i % 3) * 70}>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border2 bg-bg">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-semibold leading-tight">
                    {c.value}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-fg-muted">
                    {c.label}
                  </p>
                  <p className="text-xs text-muted">{c.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
