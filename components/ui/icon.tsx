import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Check,
  CheckCheck,
  ChevronDown,
  CircleCheck,
  CircleDashed,
  Container,
  ExternalLink,
  FileCode2,
  FlaskConical,
  GitBranch,
  Github,
  GitPullRequest,
  Hammer,
  KeyRound,
  Layers,
  Lightbulb,
  Linkedin,
  Mail,
  Menu,
  Minus,
  Moon,
  Package,
  PackageX,
  RefreshCw,
  ScanSearch,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Terminal,
  Workflow,
  Wrench,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

/** Curated Lucide icon registry — referenced by name from data files. */
const registry: Record<string, LucideIcon> = {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Check,
  CheckCheck,
  ChevronDown,
  CircleCheck,
  CircleDashed,
  Container,
  ExternalLink,
  FileCode2,
  FlaskConical,
  GitBranch,
  Github,
  GitPullRequest,
  Hammer,
  KeyRound,
  Layers,
  Lightbulb,
  Linkedin,
  Mail,
  Menu,
  Minus,
  Moon,
  Package,
  PackageX,
  RefreshCw,
  ScanSearch,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Terminal,
  Workflow,
  Wrench,
  X,
  Zap,
};

export type IconKey = keyof typeof registry;

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
  "aria-hidden": ariaHidden = true,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
  "aria-hidden"?: boolean;
}) {
  const Cmp = registry[name];
  if (!Cmp) return null;
  return (
    <Cmp className={className} strokeWidth={strokeWidth} aria-hidden={ariaHidden} />
  );
}
