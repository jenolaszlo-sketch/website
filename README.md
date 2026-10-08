# Penghou website

The public website for **Penghou**, an independent open-source engineering
project building reliable infrastructure for AI-assisted and agentic software
systems.

This repository is the marketing-and-documentation site only. It contains no
runtime services, no database, no CMS, and no authentication. The production
build is a set of static HTML, CSS, and minimal JavaScript assets.

The site exists to make Penghou understandable as a coherent ecosystem and to
make its engineering evidence discoverable.

---

## Prerequisites

- **Node.js LTS** (20 or newer) and npm.
- No other runtime is required. The site must build and run locally with no
  Cloudflare dependency.

## Local setup

```bash
npm install
npm run dev
```

Open the URL printed by Astro (typically <http://localhost:4321>).

`npm install` generates `package-lock.json`. **Commit that file** — CI uses
`npm ci`, which requires it.

## Commands

| Command           | Purpose                                              |
| ----------------- | ---------------------------------------------------- |
| `npm install`     | Install dependencies and create the lockfile.        |
| `npm run dev`     | Start the local development server.                  |
| `npm run build`   | Produce the full static production site in `dist/`.  |
| `npm run preview` | Preview the production build locally.                |
| `npm run check`   | Run Astro and TypeScript diagnostics.                |

## Project structure

```text
website/
├── .github/workflows/      CI
├── public/                 Static assets copied as-is (favicon, images)
├── src/
│   ├── components/         Reusable Astro components
│   ├── layouts/            Page layouts
│   ├── pages/              Routes (file-based)
│   ├── styles/             Design tokens and global CSS
│   ├── lib/                Site configuration and helpers
│   └── content/            Markdown content collections
│       ├── projects/
│       ├── journal/
│       ├── milestones/
│       ├── philosophy/
│       └── evidence/
├── astro.config.mjs
├── package.json
└── README.md
```

Content is separated from presentation. Routine updates should require editing
or adding Markdown files, not changing components.

## Content collections

Schemas are defined in `src/content.config.ts`. Required frontmatter must match
the schema or the build will fail.

### Add a project

Create `src/content/projects/<slug>.md`:

```yaml
---
name: Zhinu
slug: zhinu
summary: Durable workflow execution for adaptive AI-assisted systems.
status: preview # experiment | prototype | preview | active | stable | parked | archived
category: workflow # workflow | authority | sandboxing | models | memory | evidence | dev-infrastructure
repository: https://github.com/jenolaszlo-sketch/penghou-zhinu
package: Penghou.Zhinu
featured: true
order: 20
draft: false
---

## Purpose

...
```

The page is served at `/projects/<slug>/` and appears automatically in the
projects index, and on the home page when `featured: true`.

### Add a journal entry

Create `src/content/journal/<slug>.md`. The file name becomes the URL:
`/journal/<slug>/`.

```yaml
---
title: Why activities, not agents
description: A short summary used in listings and metadata.
date: 2026-10-04
projects: [zhinu, hufu]
tags: [workflow, recovery]
evidence:
  - label: Repository
    url: https://github.com/jenolaszlo-sketch/penghou-zhinu
---

## Problem
...
```

### Add a milestone

Create `src/content/milestones/YYYY-MM-DD-title.md`:

```yaml
---
date: 2026-10-04
title: Cross-platform sandbox qualification completed
projects: [gagamba, hufu]
category: qualification
summary: One sentence shown in listings.
evidence:
  - label: GitHub
    url: https://github.com/jenolaszlo-sketch/gagamba
---
```

Milestones are curated by hand and shown in reverse-chronological order. They
are **not** generated from commits.

### Philosophy and evidence

- `src/content/philosophy/*.md` — principles shown on the home and philosophy
  pages. Fields: `title`, `summary`, `order`.
- `src/content/evidence/*.md` — evidence case studies shown on `/evidence/`.
  Fields: `title`, `category`, `summary`, `projects`, `links`, `order`.

### Mark content as draft

Add `draft: true` to any entry's frontmatter. Draft entries are excluded from
listings, pages, and the sitemap in production builds.

## Build

```bash
npm run build
```

`dist/` contains the complete static production site. `npm run preview` serves
it locally.

## Continuous integration

`.github/workflows/ci.yml` runs on pull requests and pushes to `main`:

1. checkout;
2. install Node (`lts/*`);
3. `npm ci`;
4. `npm run check` (Astro + TypeScript);
5. `npm run build`.

CI requires a committed `package-lock.json`.

## Deployment (Cloudflare Pages)

The site is a static build and needs no adapter. Configure Cloudflare Pages:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** LTS (set `NODE_VERSION` if needed)

The site also runs entirely locally with no Cloudflare dependency. A domain is
not required for an initial deployment; a temporary `*.pages.dev` hostname is
fine.

## Canonical URL and base path

The canonical site URL is configurable and **not assumed in code**. It is read
from the `SITE_URL` environment variable at build time (see
`astro.config.mjs`), and is used for canonical links, Open Graph URLs, and the
sitemap.

```bash
SITE_URL=https://example.org npm run build
```

Sub-path deployments are supported through the optional `BASE_PATH` variable
(default `/`). Internal links and assets are prefixed at render time, so no
sub-path literal appears in content. For a GitHub project site:

```bash
SITE_URL=https://<user>.github.io BASE_PATH=/website npm run build
```

Set these in the Cloudflare Pages / GitHub Actions build environment. The
default fallback is `https://penghou.pages.dev`. See `.env.example`.

## Design and accessibility

- Design tokens live in `src/styles/tokens.css` (paper / ink / vermilion
  palette, spacing, typography, motion). Avoid hard-coded values in components.
- The site must remain usable without JavaScript and respects
  `prefers-reduced-motion`.
- Accessibility is a release requirement: semantic HTML, heading hierarchy,
  keyboard navigation, visible focus, sufficient contrast, and descriptive
  link text.

## Scope

V1 is static and content-driven. It deliberately excludes a CMS, accounts,
comments, tracking, search backends, chatbots, databases, and live GitHub API
calls. Evidence is recorded as explicit links in Markdown so builds do not
depend on GitHub availability.

## License

Code in this repository is licensed under Apache-2.0.
