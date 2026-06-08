import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedPipeline } from "@/components/sections/animated-pipeline";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative">
      <div className="container-prose py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="Five stages, every one auditable"
            subtitle="Each stage writes to disk, so an entire run is reproducible — from the shallow clone to the final HTTP check. Build and validate loop back through the LLM when something fails."
          />
        </div>

        <Reveal className="mt-16">
          <div className="glass glass-hi rounded-3xl p-6 sm:p-10">
            <AnimatedPipeline />
          </div>
        </Reveal>

        <Reveal className="mt-8 flex justify-center">
          <p className="glass glass-hi inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs text-fg-muted">
            <Icon name="ScrollText" className="h-4 w-4" />
            every artifact &rarr; output/&lt;run_id&gt;/ (attempts/, usage.json,
            validation.txt)
          </p>
        </Reveal>
      </div>
    </section>
  );
}
