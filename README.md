# Neeraj Kumar Singh Portfolio (Next.js + Tailwind)

This repository now runs as a static-exportable Next.js portfolio styled with Tailwind CSS and deployed via GitHub Pages Actions.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Visitor tracking (GA4, optional)

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
3. Restart `npm run dev`.

```bash
cp .env.example .env.local
```

For production, set repository secret `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

## Deploy (GitHub Pages)

- Workflow: `.github/workflows/deploy-pages.yml`
- In repository settings, set Pages source to **GitHub Actions**.

## Legacy bootstrap site

The old Bootstrap 4 source is preserved in `legacy-bootstrap4/`.
