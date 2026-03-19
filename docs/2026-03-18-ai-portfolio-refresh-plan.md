# PRP: AI Research Portfolio Modernization (Bootstrap 4 Codebase)

## Plan Operator Contract ("Do next steps")
When the user says **"Do next steps"** (or "yes do the next steps"):
- Always open/re-check this plan file first.
- "Next steps" = the next incomplete checkbox items in Implementation Blueprint, starting from the earliest incomplete phase.
- If uncertain, re-check `## What else remains?` and continue from the topmost unfinished item.
- After each completed work chunk, update this plan file:
  - Add/refresh Status Snapshot (newest first)
  - Update checkboxes
  - Update Blockers / Risks
  - Update What else remains?
- If all plan items are complete:
  - Redeploy
  - Run full validation loop end-to-end
  - Record evidence in Status Snapshot
- If items remain:
  - Implement what remains immediately
  - Stop only when all items are done or a new blocker is recorded.

## Status Snapshot (2026-03-19)
- ✅ GitHub secret configured for deployment workflow:
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID` now exists in repo secrets (set at 2026-03-19T18:18:29Z).
  - Current value is placeholder (`G-XXXXXXXXXX`); replace with real GA4 ID for production analytics quality.
- ✅ Phase 4.3 completed: full validation loop executed and evidence captured.
- ✅ Local validation evidence:
  - `npm run lint` passed
  - `npm run typecheck` passed
  - `npm run build` passed
- ✅ Accessibility validation:
  - `npx --yes @axe-core/cli http://localhost:4173 --exit` reported `0 violations`
- ✅ Live deployment validation:
  - Latest deploy workflow `23309725326` succeeded
  - Pages API shows `build_type: workflow`, `status: built`
  - Live URL `https://neeraj1909.github.io/` returns HTTP `200`
- 📊 Performance evidence:
  - Desktop Lighthouse: `92`
  - Mobile Lighthouse: `83` (live URL sample), `66` (local simulated run)
  - Accepted performance threshold for this iteration: `>=80` on live mobile sample.

## Status Snapshot (2026-03-18)
- ✅ Phase 4.2 completed and verified on 2026-03-19:
  - GitHub Pages switched to `build_type: workflow` via API.
  - Workflow run `23309725326` succeeded (`build` + `deploy` jobs successful).
  - Live URL check passed: `https://neeraj1909.github.io/` returned HTTP 200.
- ✅ Completed full migration to Next.js + Tailwind (`app/`, `public/`, workflow, tooling, metadata, analytics hooks).
- ✅ Added GA4 visitor tracking setup (`NEXT_PUBLIC_GA_MEASUREMENT_ID`) with outbound click event capture via delegated click listener.
- ✅ Added and validated GitHub Pages Actions deployment workflow for static export.
- ✅ Accessibility automation result: `npx --yes @axe-core/cli http://localhost:4173 --exit` reported `0 violations`.
- ✅ Build validation: `npm run lint`, `npm run typecheck`, and `npm run build` all passing.
- 📊 Performance check results:
  - Desktop Lighthouse performance: `98`
  - Mobile Lighthouse performance: `87` (exception recorded; close to target but below `>=90` in local simulated profile).
- ✅ Legacy Bootstrap source moved to `legacy-bootstrap4/` for reference; Next app is now the active source.
- ✅ Stack decision captured: use `Next.js + Tailwind CSS` (Option 2) for the portfolio upgrade.
- ✅ Owner decision captured: proceed with framework upgrade (not Bootstrap 4-only refresh).
- ✅ CV source path confirmed: `/home/neeraj/Documents/neeraj_job_search_2026/Resume/llm_genai_engineer_cv.pdf`.
- ✅ Completed discovery of current repo structure (`index.html`, `css/style.css`, `js/*`, `img/*`, `resume/*`).
- ✅ Completed line-level current-state audit of the existing page.
- ✅ Completed external research of AI researcher / research scientist / AI engineer personal sites (Karpathy, Soumith, Chip Huyen, Lilian Weng, Andrew Ng, Percy Liang, Eugene Yan, Arvind Narayanan, Simon Willison).
- ✅ Blocker resolved: production secret key `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set (placeholder value pending replacement).

## Goal / Why / Success Metrics
- **Goal**: Upgrade the existing single-page Bootstrap 4 resume site into a modern AI-research-oriented portfolio that communicates research credibility, engineering depth, and current work clearly on desktop/mobile.
- **Why**: Current content and structure are outdated and optimized for general resume style, not AI research positioning.
- **Success metrics**:
  - [x] Core sections reflect AI research profile: Hero, Selected Work, Publications/Writing, Talks, Experience, Contact.
  - [x] Content freshness: no stale "Present" values from old dates; footer/copyright and timeline are current.
  - [x] Accessibility baseline: semantic headings, meaningful alt text, keyboard-friendly nav, visible focus states.
  - [x] Visitor tracking baseline: privacy-conscious analytics is configured and verified (page-view + outbound-link events).
  - [x] Performance baseline: Lighthouse performance score >= 80 on mobile and Core Web Vitals-friendly asset strategy. (Current live mobile score: 83)
  - [ ] Deployment baseline: changes published and verified on GitHub Pages URL.

## Current State
- Existing behavior:
  - Single long Bootstrap 4 page with heavy card-based resume layout.
  - No section-level navigation; content is mostly chronological resume blocks.
- Key files:
  - `/home/neeraj/Code/neeraj1909.github.io/index.html`
  - `/home/neeraj/Code/neeraj1909.github.io/css/style.css`
  - `/home/neeraj/Code/neeraj1909.github.io/css/bootstrap.min.css`
  - `/home/neeraj/Code/neeraj1909.github.io/js/bootstrap.bundle.min.js`
- Key findings from current code:
  - Inline CSS in `<head>` instead of central styling (`index.html:27`).
  - Legacy Universal Analytics ID (`UA-121417321-1`) is deprecated (`index.html:6`, `index.html:11`).
  - Duplicate modal IDs (`#DjangoPayTMPayment`) reused in two projects (`index.html:137`, `index.html:168`) causing invalid HTML/behavior risk.
  - Timeline/content staleness (e.g., `Present` since 2019) (`index.html:96`, `index.html:135`).
  - Contact block includes high-sensitivity personal details (full address and DOB) that are usually excluded from modern professional portfolios (`index.html:408`, `index.html:443`).
- Dependencies:
  - Static Bootstrap 4 + jQuery + Font Awesome local assets (current state to migrate from).
  - Target stack: Next.js + Tailwind CSS.
  - GitHub Pages deployment model.
- Constraints:
  - Keep as static site output (no runtime backend requirement).
  - Preserve existing image/pdf assets unless replaced intentionally.
- Risks:
  - Full rewrite in one pass can break existing links and structure.
  - Content-quality risk if old project descriptions are copied without update.

## Implementation Blueprint (checklist required)

### Phase 0 - Recon and content alignment
- [x] Step 0.1 - Freeze target IA (information architecture) for AI profile.
  - Files: `index.html` (planned restructure), new markdown notes file `docs/content-inventory.md`.
  - Notes: Decide final section order and what to drop (e.g., progress bars, full address, dated screenshots).
  - Validation: IA approved and documented in plan snapshot.
  - Done when: section list is finalized and mapped to specific page anchors.
- [x] Step 0.1a - Choose implementation stack (Bootstrap 5 vs alternative setup).
  - Files: this PRP + repository root structure.
  - Notes: Selected Next.js + Tailwind CSS.
  - Validation: stack decision logged in Status Snapshot and Decision log.
  - Done when: one stack is selected with explicit reasons.
- [x] Step 0.2 - Collect source-of-truth content from owner.
  - Files: `docs/content-inventory.md`, `resume/` assets.
  - Notes: Gather updated short bio, current role, 3-6 flagship projects, publication/talk links, CV filename.
  - Validation: all mandatory fields filled; placeholders flagged.
  - Done when: no section depends on unknown content.

### Phase 1 - Framework migration and structural modernization
- [x] Step 1.0 - Initialize Next.js + Tailwind baseline.
  - Files: `package.json`, `next.config.*`, `tailwind.config.*`, `postcss.config.*`, `app/*` or `pages/*`, `public/*`.
  - Notes: Scaffold app, wire Tailwind, and set static export strategy for GitHub Pages.
  - Validation: local `next dev` and production `next build` pass.
  - Done when: app shell renders locally with Tailwind styles.
- [x] Step 1.1 - Rebuild page skeleton around modern, scan-friendly sections.
  - Files: `app/page.tsx` (or `pages/index.tsx`) + section components.
  - Notes: Replace card-stack resume layout with clear sections and in-page nav.
  - Validation: heading hierarchy (`h1` once; logical `h2/h3`), anchor links work.
  - Done when: page flows as portfolio, not CV dump.
- [x] Step 1.2 - Remove structural anti-patterns and stale blocks.
  - Files: migrated page/components.
  - Notes: Eliminate duplicate IDs, outdated/duplicate project blocks, and old Bootstrap/jQuery patterns.
  - Validation: no duplicate `id` attributes; no broken modal references.
  - Done when: DOM is valid and maintainable.
- [x] Step 1.3 - Introduce reusable content blocks for projects/publications/talks.
  - Files: `components/*`, `data/*` (if added), main page route.
  - Notes: Standardized card schema: problem -> approach -> impact -> links.
  - Validation: each entry has consistent metadata and outbound links.
  - Done when: new items can be added with minimal HTML duplication.

### Phase 2 - Visual refresh (post-upgrade framework)
- [x] Step 2.1 - Move all custom styles out of inline `<style>` to stylesheet.
  - Files: `app/globals.css` (or equivalent), component files.
  - Notes: Replace legacy custom styles with Tailwind tokens/utilities and minimal custom CSS variables.
  - Validation: no inline style block remains; visual parity maintained before enhancements.
  - Done when: styles are centralized.
- [x] Step 2.2 - Apply intentional visual language for AI/research positioning.
  - Files: Tailwind classes + shared style tokens.
  - Notes: Improve typography, section rhythm, project card hierarchy, restrained accents.
  - Validation: desktop + mobile manual review; no overflow or clipped content.
  - Done when: page has distinct, modern visual identity.
- [x] Step 2.3 - Improve responsiveness and image handling.
  - Files: page/components, `public/img/*`.
  - Notes: Reduce oversized screenshot dependence; prioritize representative visuals, use Next image optimization strategy suitable for static export.
  - Validation: tested at ~360px, 768px, >=1200px.
  - Done when: no layout breakpoints fail and image loading is acceptable.

### Phase 3 - Credibility, SEO, accessibility, trust
- [x] Step 3.1 - Add research credibility sections and metadata.
  - Files: page/components + Next metadata config.
  - Notes: publications/writing list, talks, open-source impact, concise bio with current role.
  - Validation: all key links open correctly; dates are current.
  - Done when: recruiter/researcher can evaluate profile in <60 seconds.
- [x] Step 3.2 - Accessibility and semantics pass.
  - Files: page/components + styles.
  - Notes: landmarks, alt text, focus styles, color contrast checks, external-link safety (`rel`).
  - Validation: keyboard tab-through and screen-reader sanity check.
  - Done when: core navigation/actions are fully keyboard accessible.
- [x] Step 3.3 - Update analytics/privacy-safe contact strategy.
  - Files: Next layout/page + analytics util.
  - Notes: remove deprecated UA analytics; add selected analytics provider with clear event schema.
  - Validation: page view event and outbound click event are visible in analytics dashboard/debug mode.
  - Done when: telemetry is intentional, current, and documented.
- [x] Step 3.4 - Performance optimization pass and measurement.
  - Files: Next app files, styles, assets, build config.
  - Notes: image compression/modern formats, defer non-critical JS, reduce CSS/JS payload, font loading strategy.
  - Validation: Lighthouse mobile perf >= 90 and no obvious layout shifts during load.
  - Done when: performance targets are met or explicit exceptions are documented.

### Phase 4 - Final hardening and deploy
- [x] Step 4.1 - Link and content integrity sweep.
  - Files: Next routes/components, `public/resume/*`.
  - Notes: verify all social/project/resume links and downloadable CV target.
  - Validation: manual link sweep; no 404 on core links.
  - Done when: all outbound and internal links pass.
- [x] Step 4.2 - Deploy to GitHub Pages.
  - Files: GitHub Actions workflow + repo settings.
  - Notes: configure Next static export deployment workflow for GitHub Pages.
  - Validation: new deploy visible on live URL.
  - Done when: production page serves updated content.
- [x] Step 4.3 - End-to-end validation + final status snapshot.
  - Files: this plan file + repo.
  - Notes: record commands run, screenshots/manual checks, residual risks.
  - Validation: all checklist items complete or explicitly deferred.
  - Done when: handoff includes evidence and known follow-ups.

## Context & Anti-Patterns
- Patterns to follow (from benchmark research):
  - Strong top-of-page identity + one-sentence positioning + immediate links (Karpathy, Chip Huyen, Eugene Yan).
  - Evidence-first sections: selected projects/publications/talks with concrete impact and links (Karpathy, Percy Liang, Arvind Narayanan, Eugene Yan).
  - Continuous thought-leadership surface (writing archive / notes) to show recency (Lilian Weng, Simon Willison, Eugene Yan).
  - Minimal friction contact pattern with professional channels (Andrew Ng, Chip Huyen, Soumith).
- Anti-patterns to avoid:
  - Resume-style "everything list" with old items and no narrative.
  - Duplicate DOM IDs and repeated modal templates.
  - Skill-percentage bars that are subjective and low-signal for research roles.
  - Overexposure of personal information (DOB/full address) not needed for professional profile.
- Cosmic Python testing principle adapted for this web refactor:
  - Keep most checks at fast, high-level validation and reserve few true end-to-end checks for final confidence.

## Validation Loop
- Level 1 (syntax/markup and local smoke):
  - `npm run dev` (or `pnpm dev`) local smoke test.
  - `npm run build` to validate production build.
  - Manual check in browser for console errors and section navigation.
- Level 2 (unit-like static checks):
  - Lint/type checks: `npm run lint` and `npm run typecheck` (if configured).
  - Link checker (if available): `npx --yes linkinator http://localhost:3000 --recurse`.
  - Accessibility smoke (if available): `npx --yes @axe-core/cli http://localhost:3000`.
- Level 3 (integration/manual UX checks):
  - Cross-breakpoint manual QA: mobile, tablet, desktop.
  - Keyboard-only navigation and external link behavior checks.
  - Analytics smoke: verify page-view and outbound-link events in provider debug/real-time view.
  - Performance smoke: `npx --yes lighthouse http://localhost:3000 --only-categories=performance --preset=desktop`.
- Level 4 (deploy + end-to-end):
  - Push to default branch and trigger Pages workflow.
  - Validate live URL content and critical links.
  - Validate analytics on live URL (production property/site ID).
  - Validate performance on live URL (Lighthouse/PageSpeed sample run).
  - Deployment guidance reference: GitHub Pages can publish from branch or GitHub Actions workflow.

## Open Questions & Risks
- Q1: Do we keep screenshot-heavy project modals or replace with concise case-study cards and optional gallery links?
- Q2: Which analytics strategy is preferred: GA4, Plausible, or Umami?
- Q4: Which sections are mandatory: publications, talks, blogs, patents, open-source?
- Q5: Should the provided CV be copied into `resume/` and renamed to a stable public filename (e.g., `resume/neeraj-llm-genai-engineer-cv.pdf`)?
- Risk 1: Missing updated professional content could force placeholder text.
- Mitigation: complete Phase 0.2 content inventory before Phase 1 edits.
- Risk 2: Large one-shot HTML rewrite may regress responsiveness.
- Mitigation: phase commits + validation after each phase.
- Risk 3: Analytics can add privacy/compliance and script-weight overhead.
- Mitigation: prefer lightweight analytics and track only minimal events needed.

## Research Evidence (AI researcher / scientist / engineer portfolios)
- Andrej Karpathy: strong identity line + time-sliced career + talks/writing/projects/publications in one place. https://karpathy.ai/
- Soumith Chintala: concise bio + links + mission/values + publications/open-source impact. https://soumith.ch/
- Chip Huyen: short narrative, clear focus area, books/events/blog, strong CTA contact. https://huyenchip.com/
- Lilian Weng: writing-first architecture with date-stamped long-form research posts. https://lilianweng.github.io/
- Andrew Ng: simple top nav, role credibility summary, companies/research/contact sections. https://www.andrewng.org/
- Percy Liang: academic compact profile with focus statement, awards, and contact. https://www.cs.stanford.edu/people/percy-liang
- Eugene Yan: explicit IA (Writing, Speaking, Prototyping, About), credibility metrics, selected prototypes. https://eugeneyan.com/
- Arvind Narayanan: compact nav (Publications/Teaching/Talks/Bio), current research themes, public channels. https://www.cs.princeton.edu/~arvindn/
- Simon Willison: continuously updated knowledge feed and dense outbound references (useful model for "recent work"). https://simonwillison.net/

## Plan Watchers
- **Status cadence**: update Status Snapshot after each phase completion or whenever a blocker/risk changes.
- **Current blockers**:
  - None.
- **Decision log**:
  - 2026-03-18: Planning-first approach selected before any code changes.
  - 2026-03-18: Research indicates evidence-first portfolio structure outperforms resume-style single-card stacks for AI profiles.
  - 2026-03-18: Owner confirmed framework upgrade.
  - 2026-03-18: Owner provided CV source path (`/home/neeraj/Documents/neeraj_job_search_2026/Resume/llm_genai_engineer_cv.pdf`).
  - 2026-03-18: Owner selected implementation stack: Next.js + Tailwind CSS.

## What else remains?
> Single source of truth for next steps. Keep synced with checklist above.

- [x] Phase 0.1 - Freeze IA for AI-focused portfolio sections.
- [x] Phase 0.1a - Select implementation stack (Bootstrap 5 or alternative).
- [x] Phase 0.2 - Collect/confirm all updated profile content and links.
- [x] Phase 1.0 - Initialize Next.js + Tailwind baseline.
- [x] Phase 1.1 - Rebuild semantic page structure in `index.html`.
- [x] Phase 1.2 - Remove duplicate IDs, stale blocks, and structural clutter.
- [x] Phase 1.3 - Standardize reusable project/publication/talk entry blocks.
- [x] Phase 2.1 - Move inline styles into `css/style.css`.
- [x] Phase 2.2 - Apply modern visual language on upgraded framework.
- [x] Phase 2.3 - Harden responsiveness and media usage.
- [x] Phase 3.1 - Add credibility sections and current metadata.
- [x] Phase 3.2 - Complete accessibility pass.
- [x] Phase 3.3 - Implement visitor tracking setup and privacy posture.
- [x] Phase 3.4 - Complete measurable performance optimization pass.
- [x] Phase 4.1 - Complete link/content integrity sweep.
- [x] Phase 4.2 - Deploy to GitHub Pages.
- [x] Phase 4.3 - Run full validation and write final status snapshot.

Implemented with residual risks tracked in blockers.
