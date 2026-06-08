/**
 * Static content for the landing page: pipeline stages, features, comparison
 * matrix, and captured demo runs. Sourced from the Auto-Dock It README so the
 * site stays factually aligned with the product.
 */

export type IconName = string;

export const pipelineStages = [
  {
    n: 1,
    key: "ingest",
    title: "Ingest",
    icon: "GitBranch",
    desc: "Shallow-clones the repo (depth 1, 200 MB cap). Validates the URL against github.com before any network call.",
  },
  {
    n: 2,
    key: "analyze",
    title: "Analyze",
    icon: "ScanSearch",
    desc: "Reads manifests, tree, README and entrypoints, then asks the LLM for a structured RepoProfile. Cached per commit SHA.",
  },
  {
    n: 3,
    key: "generate",
    title: "Generate",
    icon: "FileCode2",
    desc: "Writes a production-grade Dockerfile from the profile — plus a docker-compose.yml when multiple services are detected.",
  },
  {
    n: 4,
    key: "build",
    title: "Build",
    icon: "Hammer",
    desc: "Runs docker build. On failure the error is sent back to the LLM, which returns a patch; the build retries (up to 4 times).",
  },
  {
    n: 5,
    key: "validate",
    title: "Validate",
    icon: "ShieldCheck",
    desc: "Starts the container and polls the exposed port for HTTP 2xx/3xx. Bad logs trigger up to two runtime-repair cycles.",
  },
] as const;

export const features = [
  {
    icon: "RefreshCw",
    title: "Self-healing build loop",
    desc: "Failed docker build output is fed back to the LLM for an automated patch and retry — non-standard repos included.",
  },
  {
    icon: "Activity",
    title: "Runtime-repair loop",
    desc: "If the container starts but the app doesn't respond, container logs drive a second LLM repair cycle.",
  },
  {
    icon: "Boxes",
    title: "Docker Compose support",
    desc: "Auto-generates docker-compose.yml for multi-service repos, with host-port discovery via docker compose port.",
  },
  {
    icon: "KeyRound",
    title: "Bring your own key",
    desc: "Paste a Gemini or Groq key in the UI to use your own quota and bypass shared rate limits.",
  },
  {
    icon: "ScrollText",
    title: "Full audit trail",
    desc: "Every attempt, the error that triggered the repair, and the patch are saved under output/<run_id>/attempts/.",
  },
  {
    icon: "Sparkles",
    title: "Explain & Improve",
    desc: "Get a line-by-line walkthrough of any Dockerfile and prioritised improvement suggestions with diffs.",
  },
  {
    icon: "GitPullRequest",
    title: "PR back to upstream",
    desc: "After a successful run, autodock pr forks the repo and opens a pull request with the generated artifacts.",
  },
  {
    icon: "ShieldCheck",
    title: "Security-hardened",
    desc: "Symlink traversal guards, Dockerfile and Compose safety scans, prompt-injection guards, optional no-network builds.",
  },
] as const;

export const comparison = {
  tools: ["Nixpacks", "Buildpacks", "repo2docker", "One-shot LLM", "Auto-Dock It"],
  rows: [
    { label: "Handles unusual / non-standard repos", values: ["partial", "partial", "no", "partial", "yes"] },
    { label: "Self-heals build errors", values: ["no", "no", "no", "no", "yes"] },
    { label: "Self-heals runtime errors", values: ["no", "no", "no", "no", "yes"] },
    { label: "Multi-service (Docker Compose)", values: ["no", "no", "no", "partial", "yes"] },
    { label: "Full audit trail of every attempt", values: ["no", "no", "no", "no", "yes"] },
    { label: "Bring-your-own LLM key (BYOK)", values: ["n/a", "n/a", "n/a", "n/a", "yes"] },
    { label: "Open source", values: ["yes", "yes", "yes", "varies", "yes"] },
  ],
} as const;

export const demos = [
  { name: "jenkins-demo", stack: "Flask; bind-port mismatch (8501 vs EXPOSE 8000)", healing: "1 build + 2 repairs (1 nested)", outcome: "HTTP 200 — sed patched port, inner loop fixed USER ordering" },
  { name: "flask", stack: "Python + Flask + gunicorn", healing: "1 build repair", outcome: "HTTP 200" },
  { name: "nodejs", stack: "Node + Express", healing: "1 build repair", outcome: "HTTP 200" },
  { name: "broken-flask", stack: "Flask with a flsk typo in requirements.txt", healing: "3 build repairs", outcome: "HTTP 200 — LLM sed-patched the typo at build time" },
  { name: "flask-redis", stack: "Flask + Redis multi-service", healing: "None needed", outcome: "HTTP 200 — auto-generated docker-compose.yml" },
  { name: "flask-postgres", stack: "Flask + Postgres with psycopg", healing: "None needed", outcome: "HTTP 200 — compose with postgres:16 sidecar" },
  { name: "env-required-flask", stack: "Flask requiring an undeclared env var", healing: "1 build repair", outcome: "HTTP 200 — grep found REQUIRED_SECRET, LLM added ENV" },
  { name: "crashing-route-flask", stack: "Flask route reading a hardcoded /etc path", healing: "None needed", outcome: "HTTP 200 — LLM spotted the path, added RUN mkdir" },
  { name: "runtime-loop-fired", stack: "Flask shelling out to pandoc", healing: "1 build + 1 runtime repair", outcome: "HTTP 200 — LLM read FileNotFoundError, added apt-get install pandoc" },
] as const;

export const credibility = [
  { icon: "FlaskConical", label: "Unit & integration tests", value: "112 passing", note: "in under 3 seconds" },
  { icon: "CheckCheck", label: "Lint", value: "Clean", note: "ruff check" },
  { icon: "ShieldCheck", label: "Static security", value: "Clean", note: "bandit -r" },
  { icon: "Boxes", label: "Captured demo runs", value: "9 recorded", note: "with full attempt history" },
  { icon: "Layers", label: "Python matrix", value: "3.10 – 3.13", note: "GitHub Actions CI" },
  { icon: "Workflow", label: "Nested self-heal", value: "Recorded", note: "jenkins-demo run" },
] as const;

export const trustBadges = [
  "MIT licensed",
  "Python 3.10+",
  "112 tests passing",
  "ruff + bandit clean",
  "Free-tier friendly",
] as const;
