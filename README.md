# Neeraj Kumar Singh Portfolio

Modern personal portfolio built with Next.js (App Router) and Tailwind CSS, exported as static files and deployed to GitHub Pages via GitHub Actions.

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- GitHub Actions + GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Project Structure

- `app/` - App Router pages, layout, global styles
- `public/` - static assets (images, resume PDFs)
- `.github/workflows/deploy-pages.yml` - Pages deployment pipeline
- `legacy-bootstrap4/` - archived Bootstrap 4 version and migration artifacts

## Analytics (GA4)

Analytics is optional and enabled only when GA4 ID is configured.

### Local

```bash
cp .env.example .env.local
```

Set in `.env.local`:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Production

Add repository secret:

- Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Value: your GA4 measurement ID (`G-...`)

Path in GitHub UI:
`Settings -> Secrets and variables -> Actions -> New repository secret`

## Deployment (GitHub Pages)

1. Ensure workflow file exists: `.github/workflows/deploy-pages.yml`
2. In GitHub repo settings:
   `Settings -> Pages -> Build and deployment -> Source = GitHub Actions`
3. Push to `master` (or `main`) to trigger deployment.
4. Verify deployment in `Actions` tab (`Deploy Next.js to GitHub Pages`).

## Deployment Verification Checklist

- Site loads on your Pages URL
- Resume download link works (`/resume/llm_genai_engineer_cv.pdf`)
- External profile links work
- If GA4 is configured, outbound click events appear in GA4 DebugView/Realtime

## Notes

- Static export output is generated in `out/` by `npm run build`.
- `next.config.ts` is configured for static export (`output: "export"`) and image compatibility (`images.unoptimized`).
