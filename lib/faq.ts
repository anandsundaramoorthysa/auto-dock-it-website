/**
 * FAQ content — surfaced both in the FAQ section UI and as FAQPage JSON-LD.
 * Questions are phrased the way real users search (long-tail intent), so the
 * page can rank for "how do I…" queries without keyword stuffing.
 */
export const faqs = [
  {
    q: "How do I automatically generate a Dockerfile from a GitHub repository?",
    a: "Give Auto-Dock It a public GitHub URL. It shallow-clones the repo, uses an LLM to detect the stack from manifests and source, writes a production-grade Dockerfile, runs the build, and self-heals errors until the container responds — no manual Dockerfile writing required.",
  },
  {
    q: "What makes Auto-Dock It different from Nixpacks or Buildpacks?",
    a: "Nixpacks and Buildpacks automate only the happy path. Auto-Dock It runs an agentic loop: when a build or runtime fails, the error is fed back to the LLM, which patches the Dockerfile and retries. It handles non-standard repos, multi-service Docker Compose setups, and keeps a full audit trail of every attempt.",
  },
  {
    q: "Is Auto-Dock It free and open source?",
    a: "Yes. Auto-Dock It is MIT-licensed and open source. It works with free-tier LLM keys from Google Gemini or Groq, and you can bring your own key (BYOK) to bypass shared rate limits.",
  },
  {
    q: "Which programming languages and frameworks are supported?",
    a: "The analyzer reads manifests and source for Python, Node.js, Go, Java, Ruby, and PHP, including package.json, requirements.txt, pom.xml and more. Because generation is LLM-driven, it adapts to non-standard project layouts too.",
  },
  {
    q: "Does it handle multi-service apps with Docker Compose?",
    a: "Yes. When multiple services are detected, Auto-Dock It also generates a docker-compose.yml and discovers host ports via docker compose port — for example a Flask app with a Postgres or Redis sidecar.",
  },
  {
    q: "What does 'self-healing build' mean?",
    a: "If docker build fails, the truncated error and the current Dockerfile are sent back to the LLM, which returns a patch; the build is retried (up to four times by default). A second runtime-repair loop feeds container logs back to the LLM if the app starts but does not respond.",
  },
  {
    q: "Is it safe to run on untrusted repositories?",
    a: "Auto-Dock It includes symlink path-traversal protection, an LLM-output Dockerfile and Compose safety scanner, prompt-injection guards, multi-user key isolation, and an optional network-isolated build mode. Still, building any repo runs its code, so prefer trusted sources or a throwaway environment.",
  },
  {
    q: "Can I use it from the command line as well as the web UI?",
    a: "Yes. There is a Typer-based CLI (autodock run, explain, improve, pr, list, doctor) and a Streamlit web UI with live log streaming. The hosted demo runs in preview mode; run locally or in a Codespace for the full self-healing loop.",
  },
] as const;
