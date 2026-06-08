import { SectionHeading } from "@/components/ui/section-heading";
import { ThemeImage } from "@/components/theme-image";
import { Reveal } from "@/components/ui/reveal";

const shots = [
  {
    light: "/screenshots/light-landing.png",
    dark: "/screenshots/dark-landing.png",
    title: "Landing & Containerize tab",
    alt: "Auto-Dock It landing page with the Containerize, Explain and Improve tabs and a GitHub repository URL input",
    wide: true,
  },
  {
    light: "/screenshots/light-sample.png",
    dark: "/screenshots/dark-sample.png",
    title: "Sample repo populated",
    alt: "Auto-Dock It with a Flask sample repository selected and the URL validated, ready to containerize",
    wide: false,
  },
  {
    light: "/screenshots/light-explain.png",
    dark: "/screenshots/dark-explain.png",
    title: "Explain any Dockerfile",
    alt: "Auto-Dock It Explain tab giving a line-by-line walkthrough of a generated Dockerfile",
    wide: false,
  },
] as const;

export function Screenshots() {
  return (
    <section className="border-b border-border">
      <div className="container-prose py-20 sm:py-28">
        <SectionHeading
          eyebrow="See it in action"
          title="A clean black-and-white interface, in your theme"
          subtitle="Live captures of the deployed web UI. The shots follow your theme — light when you read in light mode, dark when you read in dark."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {shots.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 80}
              className={s.wide ? "lg:col-span-2" : ""}
            >
              <figure className="overflow-hidden rounded-xl border border-border2 bg-surface">
                <ThemeImage
                  lightSrc={s.light}
                  darkSrc={s.dark}
                  alt={s.alt}
                  width={1400}
                  height={900}
                  className="w-full"
                />
                <figcaption className="border-t border-border px-4 py-3 text-sm font-medium text-fg-muted">
                  {s.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
