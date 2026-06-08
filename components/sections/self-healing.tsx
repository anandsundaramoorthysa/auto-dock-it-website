import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";

const loops = [
  {
    icon: "Hammer",
    title: "Build self-healing",
    trigger: "docker build exits non-zero",
    budget: "Up to 4 retries",
    detail:
      "The truncated build error and the current Dockerfile go back to the LLM, which returns a patch. The build is retried until it succeeds or the budget runs out.",
    example:
      "broken-flask: the LLM sed-patched a flsk typo in requirements.txt at build time.",
  },
  {
    icon: "Activity",
    title: "Runtime repair",
    trigger: "container starts but the app never responds",
    budget: "Up to 2 cycles",
    detail:
      "Container logs are fed back to the LLM, which diagnoses why the app failed to come up and patches the Dockerfile accordingly.",
    example:
      "runtime-loop-fired: the LLM read a FileNotFoundError and added apt-get install -y pandoc.",
  },
] as const;

export function SelfHealing() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-prose py-20 sm:py-28">
        <SectionHeading
          eyebrow="The differentiator"
          title="It doesn't just generate — it self-heals"
          subtitle="One-shot tools hand you a Dockerfile and wish you luck. Auto-Dock It runs a closed observe → decide → act loop: it reads the failure, patches, and retries until the container actually responds."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {loops.map((loop, i) => (
            <Reveal key={loop.title} delay={i * 90}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-bg p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border2 bg-surface">
                    <Icon name={loop.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{loop.title}</h3>
                    <p className="text-xs text-muted">{loop.budget}</p>
                  </div>
                </div>

                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium text-fg-muted">
                      Trigger:
                    </dt>
                    <dd className="font-mono text-xs leading-relaxed text-fg-muted">
                      {loop.trigger}
                    </dd>
                  </div>
                  <p className="leading-relaxed text-fg-muted">{loop.detail}</p>
                </dl>

                <p className="mt-auto flex items-start gap-2 border-t border-border pt-4 text-xs leading-relaxed text-fg-muted">
                  <Icon
                    name="CircleCheck"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0"
                  />
                  <span>{loop.example}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Nested-loop highlight */}
        <Reveal>
          <div className="mt-6 flex flex-col gap-4 rounded-xl border border-border bg-bg p-6 sm:flex-row sm:items-center">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border2 bg-surface">
              <Icon name="Workflow" className="h-5 w-5" />
            </span>
            <p className="text-sm leading-relaxed text-fg-muted">
              <span className="font-semibold text-fg">
                Both loops in one run:
              </span>{" "}
              in <span className="font-mono text-xs">jenkins-demo</span>, the
              runtime loop patched a bind-port mismatch (Flask on 8501,{" "}
              <span className="font-mono text-xs">EXPOSE</span> said 8000), the
              inner build loop fixed a <span className="font-mono text-xs">USER</span>
              -ordering bug the first repair introduced, and the second build
              came back HTTP&nbsp;200.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
