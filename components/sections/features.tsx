import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { features } from "@/lib/data";

export function Features() {
  return (
    <section id="features" className="relative">
      <div className="container-prose py-20 sm:py-28">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to dockerize with confidence"
          subtitle="From multi-service Compose generation to a full audit trail of every repair attempt — Auto-Dock It is built for real, messy repositories."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 70}>
              <div className="glass glass-hi card-hover flex h-full flex-col items-center rounded-2xl p-5 text-center sm:items-start sm:text-left">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border2 bg-surface">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
