import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { pipelineStages } from "@/lib/data";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-border">
      <div className="container-prose py-20 sm:py-28">
        <SectionHeading
          eyebrow="How it works"
          title="Five stages, every one auditable"
          subtitle="Each stage writes to disk, so an entire run is reproducible — from the shallow clone to the final HTTP check. The build and validate stages loop back through the LLM when something fails."
        />

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {pipelineStages.map((stage, i) => (
            <Reveal as="li" key={stage.key} delay={i * 70}>
              <div className="group relative flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-border2">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border2 bg-bg">
                    <Icon name={stage.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-muted">
                    0{stage.n}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {stage.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="mt-8 inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 font-mono text-xs text-fg-muted">
            <Icon name="ScrollText" className="h-4 w-4" />
            every artifact &rarr; output/&lt;run_id&gt;/ (attempts/, usage.json,
            validation.txt)
          </p>
        </Reveal>
      </div>
    </section>
  );
}
