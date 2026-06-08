"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { faqs } from "@/lib/faq";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative">
      <div className="container-prose py-20 sm:py-28">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          subtitle="The things people ask before pointing it at their first repository."
        />

        <ul className="glass glass-hi mx-auto mt-12 max-w-3xl divide-y divide-border overflow-hidden rounded-2xl">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-fg/[0.03]"
                  >
                    <span className="text-sm font-semibold sm:text-base">
                      {f.q}
                    </span>
                    <Icon
                      name="ChevronDown"
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  className="grid transition-all duration-200"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-fg-muted">
                      {f.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
