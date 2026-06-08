import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { comparison } from "@/lib/data";

function Cell({ value }: { value: string }) {
  if (value === "yes")
    return (
      <span className="inline-flex items-center justify-center text-fg">
        <Icon name="Check" className="h-4 w-4" aria-hidden={false} />
        <span className="sr-only">Yes</span>
      </span>
    );
  if (value === "no")
    return (
      <span className="inline-flex items-center justify-center text-muted">
        <Icon name="Minus" className="h-4 w-4" />
        <span className="sr-only">No</span>
      </span>
    );
  if (value === "partial")
    return (
      <span className="inline-flex items-center justify-center text-fg-muted">
        <Icon name="CircleDashed" className="h-4 w-4" />
        <span className="sr-only">Partial</span>
      </span>
    );
  return <span className="text-xs text-muted">n/a</span>;
}

export function Comparison() {
  const lastIdx = comparison.tools.length - 1;
  return (
    <section id="compare" className="border-b border-border bg-surface">
      <div className="container-prose py-20 sm:py-28">
        <SectionHeading
          eyebrow="Compare"
          title="How it stacks up against the alternatives"
          subtitle="Nixpacks, Buildpacks and repo2docker automate the happy path. Auto-Dock It keeps going when the build breaks."
        />

        <div className="mt-12 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <caption className="sr-only">
              Capability comparison between Nixpacks, Buildpacks, repo2docker, a
              one-shot LLM, and Auto-Dock It.
            </caption>
            <thead>
              <tr className="border-b border-border bg-bg">
                <th
                  scope="col"
                  className="px-4 py-4 text-left font-semibold"
                >
                  Capability
                </th>
                {comparison.tools.map((tool, i) => (
                  <th
                    scope="col"
                    key={tool}
                    className={`px-4 py-4 text-center font-semibold ${
                      i === lastIdx ? "text-fg" : "text-fg-muted"
                    }`}
                  >
                    {tool}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-border last:border-0"
                >
                  <th
                    scope="row"
                    className="px-4 py-3.5 text-left font-medium text-fg-muted"
                  >
                    {row.label}
                  </th>
                  {row.values.map((v, i) => (
                    <td
                      key={i}
                      className={`px-4 py-3.5 text-center ${
                        i === lastIdx ? "bg-bg" : ""
                      }`}
                    >
                      <Cell value={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
