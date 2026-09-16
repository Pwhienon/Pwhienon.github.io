# Petri Jomppanen — Portfolio

Portfolio site built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui primitives.

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` installs dependencies, builds the site, and deploys the generated `dist` directory whenever a change is pushed to `main`.

In the GitHub repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

The current Vite base path is `/`, intended for a user site such as `username.github.io` or a custom domain. For a project site served at `username.github.io/repository-name/`, set `base: '/repository-name/'` in `vite.config.ts`.
