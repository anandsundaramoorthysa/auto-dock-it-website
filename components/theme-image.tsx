/**
 * Renders a light and a dark screenshot and swaps them with CSS `dark:`
 * utilities, so the light theme shows light-mode captures and the dark theme
 * shows dark-mode captures — no JS, no hydration flash.
 *
 * `alt` is shared (keyword-seeded, descriptive — not stuffed) and applied to
 * the visible image only; the hidden one is aria-hidden to avoid duplicate
 * announcements for screen readers.
 */
export function ThemeImage({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  className = "",
  loading = "lazy",
}: {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: "lazy" | "eager";
}) {
  return (
    <>
      <img
        src={lightSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        className={`block dark:hidden ${className}`}
      />
      <img
        src={darkSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        aria-hidden="true"
        className={`hidden dark:block ${className}`}
      />
    </>
  );
}
