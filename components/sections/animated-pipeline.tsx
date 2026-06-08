"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/icon";
import { pipelineStages } from "@/lib/data";

/**
 * Animated 5-stage pipeline. A glowing "active" marker advances through the
 * stages on a loop (Ingest → Analyze → Generate → Build → Validate), pausing on
 * Build to suggest the self-healing retry. Horizontal on desktop, vertical on
 * mobile. Pure CSS/JS, respects reduced-motion (the loop simply settles).
 */
export function AnimatedPipeline() {
  const [active, setActive] = useState(0);
  const [done, setDone] = useState<number[]>([]);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const running = useRef(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let timer: ReturnType<typeof setTimeout>;
    const n = pipelineStages.length;

    const step = (i: number) => {
      setActive(i);
      setDone(Array.from({ length: i }, (_, k) => k));
      // Build stage (index 3) lingers to imply retries.
      const dwell = i === 3 ? 1900 : 1200;
      timer = setTimeout(() => {
        if (i + 1 < n) step(i + 1);
        else {
          setDone(Array.from({ length: n }, (_, k) => k));
          timer = setTimeout(() => step(0), 2200);
        }
      }, dwell);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !running.current) {
          running.current = true;
          if (reduce) {
            setActive(n - 1);
            setDone(Array.from({ length: n }, (_, k) => k));
          } else {
            step(0);
          }
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <ol className="relative flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
        {pipelineStages.map((stage, i) => {
          const isActive = active === i;
          const isDone = done.includes(i);
          return (
            <li key={stage.key} className="relative flex-1">
              {/* connector (desktop) */}
              {i < pipelineStages.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-[calc(50%+28px)] right-[-28px] top-9 hidden h-px lg:block"
                  style={{
                    background:
                      isDone || isActive
                        ? "var(--adi-text)"
                        : "var(--adi-border2)",
                    opacity: isDone || isActive ? 0.9 : 1,
                    transition: "background .4s ease",
                  }}
                />
              ) : null}

              <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:px-3 lg:text-center">
                <span
                  className={`relative z-10 inline-flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-transparent bg-primary text-primary-fg scale-105"
                      : isDone
                        ? "border-border2 bg-surface text-fg"
                        : "border-border bg-surface text-fg-muted"
                  }`}
                  style={
                    isActive
                      ? { boxShadow: "0 0 0 6px var(--glow), 0 10px 40px -8px var(--glow)" }
                      : undefined
                  }
                >
                  <Icon name={stage.icon} className="h-7 w-7" />
                  {isActive ? (
                    <span className="absolute inset-0 rounded-2xl ring-2 ring-fg/20 animate-pulse-glow" />
                  ) : null}
                </span>

                <div className="lg:mt-4">
                  <div className="flex items-center gap-2 lg:justify-center">
                    <span className="font-mono text-[0.7rem] text-muted">
                      0{stage.n}
                    </span>
                    <h3 className="text-sm font-semibold">{stage.title}</h3>
                    {stage.key === "build" ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-border2 px-1.5 py-0.5 text-[0.6rem] font-medium text-fg-muted">
                        <Icon name="RefreshCw" className="h-2.5 w-2.5" />
                        self-heal
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1.5 max-w-[15rem] text-xs leading-relaxed text-fg-muted">
                    {stage.desc}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
