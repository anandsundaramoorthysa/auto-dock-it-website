import { Logo } from "@/components/logo";
import { Icon } from "@/components/ui/icon";
import { contacts, links, site } from "@/lib/site";

export function Footer() {
  const year = 2026;
  return (
    <footer className="relative border-t border-border bg-bg2">
      <div className="container-prose py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">
              {site.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hi inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:border-border2"
              >
                <Icon name="ExternalLink" className="h-4 w-4" /> Live demo
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hi inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:border-border2"
              >
                <Icon name="Github" className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-sm font-semibold">Resources</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-fg-muted">
              <li>
                <a className="transition-colors hover:text-fg" href={links.github}>
                  Documentation
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-fg" href={links.codespaces}>
                  Open in Codespaces
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-fg" href={links.changelog}>
                  Changelog
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-fg" href={links.contributing}>
                  Contributing
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-fg" href={links.license}>
                  License (MIT)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact — Melvin first, then Anand */}
          <div>
            <h2 className="text-sm font-semibold">Contact</h2>
            <ul className="mt-4 space-y-4 text-sm">
              {contacts.map((c) => (
                <li key={c.name}>
                  <p className="font-medium">{c.name}</p>
                  <div className="mt-1.5 flex items-center gap-3 text-fg-muted">
                    <a
                      href={`mailto:${c.email}?subject=Auto-Dock%20It`}
                      aria-label={`Email ${c.name}`}
                      className="transition-colors hover:text-fg"
                    >
                      <Icon name="Mail" className="h-4 w-4" />
                    </a>
                    <a
                      href={c.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${c.name} on GitHub`}
                      className="transition-colors hover:text-fg"
                    >
                      <Icon name="Github" className="h-4 w-4" />
                    </a>
                    <a
                      href={c.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${c.name} on LinkedIn`}
                      className="transition-colors hover:text-fg"
                    >
                      <Icon name="Linkedin" className="h-4 w-4" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-sm text-fg-muted sm:flex-row sm:items-center">
          <p>
            &copy; {year} Melvin Joshua &amp; Anand Sundaramoorthy SA. MIT
            licensed.
          </p>
          <p className="text-xs">
            Auto-Dock It — AI Dockerfile generator for any GitHub repository.
          </p>
        </div>
      </div>
    </footer>
  );
}
