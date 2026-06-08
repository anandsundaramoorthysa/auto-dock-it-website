import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { demos } from "@/lib/data";
import { links } from "@/lib/site";

export function Demos() {
  return (
    <section id="demos" className="border-b border-border bg-surface">
      <div className="container-prose py-20 sm:py-28">
        <SectionHeading
          eyebrow="Receipts"
          title="Nine real runs, captured end to end"
          subtitle="Each demo folder ships every attempted Dockerfile, the build error, the LLM's repair, and the final HTTP validation — proof the self-healing loop fires on real failures."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((d, i) => (
            <Reveal key={d.name} delay={(i % 3) * 70}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-bg p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-mono text-sm font-semibold">{d.name}</h3>
                  <span className="inline-flex items-center gap-1 rounded-md border border-border2 px-2 py-0.5 text-[0.7rem] font-medium text-fg-muted">
                    <Icon name="CircleCheck" className="h-3 w-3" />
                    200
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  {d.stack}
                </p>
                <dl className="mt-4 space-y-1.5 border-t border-border pt-4 text-xs text-fg-muted">
                  <div className="flex gap-2">
                    <dt className="font-medium">Self-healing:</dt>
                    <dd>{d.healing}</dd>
                  </div>
                  <p className="leading-relaxed">{d.outcome}</p>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a
            href={`${links.github}/tree/main/demos`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-fg underline-offset-4 hover:underline"
          >
            Browse all captured runs in the repo
            <Icon name="ArrowUpRight" className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
