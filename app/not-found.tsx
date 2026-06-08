"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Icon } from "@/components/ui/icon";
import { ButtonLink } from "@/components/ui/button";
import { links } from "@/lib/site";

function TerminalLine({
  icon,
  stage,
  text,
  status,
  tone = "fg-muted",
}: {
  icon: string;
  stage: string;
  text: string;
  status?: { icon: string; label: string };
  tone?: "fg-muted" | "muted";
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-2 gap-y-1 ${
        tone === "muted" ? "text-muted" : "text-fg-muted"
      }`}
    >
      <Icon name={icon} className="h-3.5 w-3.5 shrink-0" />
      <span className="w-20 shrink-0 font-semibold text-fg">{stage}</span>
      <span>{text}</span>
      {status ? (
        <span className="ml-auto inline-flex items-center gap-1 text-fg">
          <Icon name={status.icon} className="h-3.5 w-3.5" />
          {status.label}
        </span>
      ) : null}
    </div>
  );
}

export default function NotFound() {
  const [path, setPath] = useState("/the-page-you-wanted");

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      setPath(window.location.pathname);
    }
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col">
      <div
        aria-hidden="true"
        className="glow-radial pointer-events-none absolute inset-x-0 top-0 h-[480px]"
      />
      <div
        aria-hidden="true"
        className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      {/* Minimal header */}
      <header className="relative border-b border-border">
        <div className="container-prose flex h-16 items-center justify-between">
          <a href="/" aria-label="Auto-Dock It — home">
            <Logo />
          </a>
          <ThemeToggle />
        </div>
      </header>

      <main className="container-prose relative flex flex-1 flex-col items-center justify-center py-16 text-center">
        <span className="glass glass-hi inline-flex h-16 w-16 items-center justify-center rounded-2xl">
          <Icon name="PackageX" className="h-8 w-8" />
        </span>

        <p className="mt-6 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-fg-muted">
          Error 404
        </p>
        <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Container not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-base leading-relaxed text-fg-muted">
          We pointed the pipeline at this page and even tried to self-heal it.
          No luck — this image just isn&apos;t in the registry.
        </p>

        {/* Mock pipeline run */}
        <div className="glass glass-hi mt-10 w-full max-w-xl overflow-hidden rounded-2xl text-left">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full border border-border2" />
              <span className="h-2.5 w-2.5 rounded-full border border-border2" />
              <span className="h-2.5 w-2.5 rounded-full border border-border2" />
            </span>
            <span className="ml-2 font-mono text-xs text-muted">
              autodock — run
            </span>
          </div>

          <div className="space-y-2.5 p-4 font-mono text-xs leading-relaxed sm:text-[0.8rem]">
            <div className="flex items-start gap-2 text-fg">
              <span className="select-none text-fg-muted">$</span>
              <span className="break-all">
                autodock run autodockit.pages.dev
                <span className="text-fg-muted">{path}</span>
              </span>
            </div>
            <TerminalLine
              icon="GitBranch"
              stage="ingest"
              text="cloning page…"
              status={{ icon: "X", label: "404 not in registry" }}
            />
            <TerminalLine
              icon="ScanSearch"
              stage="analyze"
              text="detecting stack…"
              tone="muted"
              status={{ icon: "Minus", label: "skipped" }}
            />
            <TerminalLine
              icon="RefreshCw"
              stage="self-heal"
              text="attempting repair (1/4)…"
              status={{ icon: "X", label: "nothing to patch" }}
            />
            <div className="flex items-center gap-2 border-t border-border pt-2.5 text-fg">
              <Icon name="X" className="h-3.5 w-3.5 shrink-0" />
              <span>pipeline aborted — container never found</span>
              <span className="blink ml-0.5 inline-block h-3.5 w-2 bg-fg align-middle" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            <Icon name="ArrowRight" className="h-4 w-4" />
            Back to safety
          </ButtonLink>
          <ButtonLink href={links.liveDemo} external variant="secondary" size="lg">
            <Icon name="ExternalLink" className="h-4 w-4" />
            Try the live demo
          </ButtonLink>
          <ButtonLink href={links.github} external variant="ghost" size="lg">
            <Icon name="Github" className="h-4 w-4" />
            GitHub
          </ButtonLink>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="container-prose py-6 text-center text-xs text-muted">
          Auto-Dock It — AI Dockerfile generator for any GitHub repository.
        </div>
      </footer>
    </div>
  );
}
