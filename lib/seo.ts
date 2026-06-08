import type { Metadata } from "next";
import { site, SITE_URL } from "./site";

/**
 * Base metadata for the whole site. Keyword-seeded (AI Dockerfile generator,
 * containerize GitHub repo, self-healing Docker build) but written for humans —
 * no stuffing. Per-page overrides extend this via Next's Metadata API.
 */
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Auto-Dock It — AI Dockerfile Generator that Containerizes Any GitHub Repo",
    template: "%s · Auto-Dock It",
  },
  description: site.description,
  applicationName: site.name,
  authors: [
    { name: "Melvin Joshua" },
    { name: "Anand Sundaramoorthy SA" },
  ],
  creator: site.author,
  publisher: site.author,
  keywords: [
    "AI Dockerfile generator",
    "automatically generate Dockerfile",
    "containerize GitHub repository",
    "Dockerfile generator from repo",
    "self-healing Docker build",
    "LLM Dockerfile",
    "agentic AI developer tool",
    "docker compose generator",
    "Nixpacks alternative",
    "Buildpacks alternative",
    "dockerize a project automatically",
    "Auto-Dock It",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: site.name,
    title:
      "Auto-Dock It — AI Dockerfile Generator that Containerizes Any GitHub Repo",
    description: site.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Auto-Dock It — agentic AI tool that writes a Dockerfile for any GitHub repository and self-heals the build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Auto-Dock It — AI Dockerfile Generator for Any GitHub Repo",
    description: site.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
};
