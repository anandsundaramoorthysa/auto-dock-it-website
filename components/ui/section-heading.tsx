import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="glass glass-hi inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-fg-muted">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}) {
  // Phone view: always centered. From `sm` up: respect the requested align
  // (left by default, centered when align="center").
  const alignment =
    align === "center"
      ? "text-center mx-auto"
      : "text-center mx-auto sm:text-left sm:mx-0";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Tag className="mt-3 text-balance text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
        {title}
      </Tag>
      {subtitle ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
