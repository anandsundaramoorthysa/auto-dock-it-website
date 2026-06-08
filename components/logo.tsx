/**
 * Theme-aware wordmark. Both SVGs are rendered and toggled via CSS `dark:`
 * utilities, so there is no hydration flash — next-themes sets the `.dark`
 * class on <html> before paint.
 */
export function Logo({
  size = 32,
  withWordmark = true,
  className = "",
}: {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Light mode: black gear. Dark mode: white gear. */}
      <img
        src="/logo.svg"
        alt=""
        width={size}
        height={size}
        className="block dark:hidden"
        aria-hidden="true"
      />
      <img
        src="/logo-dark.svg"
        alt=""
        width={size}
        height={size}
        className="hidden dark:block"
        aria-hidden="true"
      />
      {withWordmark ? (
        <span className="text-[1.05rem] font-bold tracking-tight">
          Auto-Dock It
        </span>
      ) : null}
    </span>
  );
}
