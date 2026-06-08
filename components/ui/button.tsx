import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-fg border border-primary hover:brightness-110 active:translate-y-px",
  secondary:
    "bg-surface text-fg border border-border2 hover:border-fg-muted active:translate-y-px",
  ghost: "bg-transparent text-fg hover:bg-surface border border-transparent",
};

const sizes: Record<Size, string> = {
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  external?: boolean;
  children: ReactNode;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  external,
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const rel = external ? "noopener noreferrer" : undefined;
  const target = external ? "_blank" : undefined;
  return (
    <a
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      rel={rel}
      target={target}
      {...props}
    >
      {children}
    </a>
  );
}
