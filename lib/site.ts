/**
 * Central site configuration — single source of truth for URLs, copy fragments,
 * and external links used across metadata, structured data, and components.
 */

export const SITE_URL = "https://autodockit.pages.dev";

export const site = {
  name: "Auto-Dock It",
  shortName: "Auto-Dock It",
  url: SITE_URL,
  // Primary one-liner — keyword-seeded but human-first.
  tagline:
    "Point it at any public GitHub repository — it figures out the stack, writes a production-grade Dockerfile, builds it, and self-heals through failures, all driven by an LLM.",
  description:
    "Auto-Dock It is an open-source AI Dockerfile generator. Give it a GitHub repo URL and it detects the stack, writes a production-grade Dockerfile, runs the build, and self-heals build and runtime errors automatically.",
  author: "Melvin Joshua & Anand Sundaramoorthy SA",
  locale: "en",
  ogImage: `${SITE_URL}/og.png`,
} as const;

export const links = {
  liveDemo: "https://autodockit.streamlit.app",
  github: "https://github.com/MelvinJoshua1375/auto-dock-it",
  githubIssues: "https://github.com/MelvinJoshua1375/auto-dock-it/issues",
  githubStars: "https://github.com/MelvinJoshua1375/auto-dock-it/stargazers",
  codespaces: "https://codespaces.new/MelvinJoshua1375/auto-dock-it",
  license: "https://github.com/MelvinJoshua1375/auto-dock-it/blob/main/LICENSE",
  changelog:
    "https://github.com/MelvinJoshua1375/auto-dock-it/blob/main/CHANGELOG.md",
  contributing:
    "https://github.com/MelvinJoshua1375/auto-dock-it/blob/main/CONTRIBUTING.md",
} as const;

export const contacts = [
  {
    name: "Melvin Joshua",
    email: "melvinjoshua1001@gmail.com",
    github: "https://github.com/MelvinJoshua1375",
    githubHandle: "@MelvinJoshua1375",
    linkedin: "https://www.linkedin.com/in/melvin-joshua/",
  },
  {
    name: "Anand Sundaramoorthy SA",
    email: "sanand03072005@gmail.com",
    github: "https://github.com/anandsundaramoorthysa",
    githubHandle: "@anandsundaramoorthysa",
    linkedin:
      "https://www.linkedin.com/in/anand-sundaramoorthy-sa-90002a306",
  },
] as const;

/** Anchor targets used by the nav and section IDs. */
export const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Compare", href: "#compare" },
  { label: "Demos", href: "#demos" },
  { label: "FAQ", href: "#faq" },
] as const;
