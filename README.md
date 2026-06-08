<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)"  srcset="public/logo-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="public/logo.svg">
    <img src="public/logo.svg" alt="Auto-Dock It" width="96" />
  </picture>
</p>

<h1 align="center">Auto-Dock It — Website</h1>

<p align="center">
  Marketing site for <a href="https://github.com/MelvinJoshua1375/auto-dock-it">Auto-Dock It</a>,
  the agentic AI tool that containerizes any GitHub repository.
  <br />
  Live at <a href="https://autodockit.pages.dev">autodockit.pages.dev</a>.
</p>

---

## Tech stack

- **[Next.js](https://nextjs.org/) (App Router)** with `output: "export"` — static HTML, no server at runtime.
- **TypeScript** + **[Tailwind CSS v4](https://tailwindcss.com/)** with brand tokens ported verbatim from the product.
- **[lucide-react](https://lucide.dev/)** for all icons (no emoji anywhere).
- **[next-themes](https://github.com/pacocoursey/next-themes)** for the dark/light toggle (defaults to dark, like the app).
- Deployed to **Cloudflare Pages** via GitHub Actions.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build    # static export → ./out
npm run serve    # preview the exported site locally
```

The export emits `out/404.html`, which Cloudflare Pages serves automatically for
unknown routes (the custom 404 page).

## Deployment (CI/CD)

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
static export and deploys it to Cloudflare Pages with `wrangler pages deploy`.

Required GitHub repository secrets:

| Secret | Description |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with the **Cloudflare Pages: Edit** permission |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID |

Pages project name: **`autodockit`** (→ `autodockit.pages.dev`).

## Structure

```
app/            routes, layout, global styles, SEO routes (sitemap, robots, manifest)
components/     nav, footer, theme toggle, UI primitives, and page sections
lib/            site config, SEO metadata, structured data, FAQ + content data
public/         logos, favicon, OG image, theme-matched screenshots
.github/        Cloudflare Pages deploy workflow
```

## Assets

Logos and screenshots are sourced from the product. Screenshots are theme-matched:
light-mode captures render in light mode, dark-mode captures in dark mode.

## Contact

**Melvin Joshua**
- Email: [melvinjoshua1001@gmail.com](mailto:melvinjoshua1001@gmail.com?subject=Auto-Dock%20It)
- GitHub: [@MelvinJoshua1375](https://github.com/MelvinJoshua1375)
- LinkedIn: [melvin-joshua](https://www.linkedin.com/in/melvin-joshua/)

**Anand Sundaramoorthy SA**
- Email: [sanand03072005@gmail.com](mailto:sanand03072005@gmail.com?subject=Auto-Dock%20It)
- GitHub: [@anandsundaramoorthysa](https://github.com/anandsundaramoorthysa)
- LinkedIn: [anand-sundaramoorthy-sa](https://www.linkedin.com/in/anand-sundaramoorthy-sa-90002a306)

## License

Released under the **MIT License** — see [LICENSE](LICENSE) for the full text.
Copyright (c) 2026 Melvin Joshua and Anand Sundaramoorthy SA.
