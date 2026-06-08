import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { credibility } from "@/lib/data";

/** Render a value, animating a leading integer if present (e.g. "112 passing"). */
function StatValue({ value }: { value: string }) {
  const m = value.match(/^(\d+)(.*)$/);
  if (m) {
    return (
      <>
        <Counter value={parseInt(m[1], 10)} />
        <span>{m[2]}</span>
      </>
    );
  }
  return <>{value}</>;
}

export function Credibility() {
  return (
    <section className="relative">
      <div className="container-prose py-20 sm:py-28">
        <SectionHeading
          eyebrow="Testing evidence"
          title="Built to be trusted, not just demoed"
          subtitle="A real test suite, clean lint and security scans, and a CI matrix across four Python versions — with nine recorded runs as integration evidence."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {credibility.map((c, i) => (
            <Reveal key={c.label} delay={(i % 3) * 70}>
              <div className="glass glass-hi card-hover flex items-start gap-4 rounded-2xl p-5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border2 bg-surface">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xl font-bold leading-tight tracking-tight">
                    <StatValue value={c.value} />
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
