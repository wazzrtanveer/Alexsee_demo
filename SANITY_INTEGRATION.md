# AlexSEE — Sanity CMS Full Integration Guide
> **Handoff document for the next agent.** Read this fully before touching any file.


> **SANITY PROJECT ID: `4bz7y7k4`** | Dataset: `production`

---

## 🗺️ Project Overview

| Key | Value |
|-----|-------|
| **Site Name** | AlexSEE — Opticien Créateur Paris 20e |
| **Framework** | Astro v6 (100% native Astro, no React) |
| **Deployment** | Cloudflare Pages via GitHub auto-deploy |
| **GitHub Repo** | `https://github.com/Apo-tanveer/alexis-shop.git` (branch: `main`) |
| **Local Path** | `/home/tanveer/Desktop/practise 2/alexsee-astro/` |
| **Node Version** | `>=22.12.0` |

---

## 📐 Architecture Decision

- **Sanity Studio** embedded at `/studio` inside Astro via `@sanity/astro` integration
- **Content fetched at build time** via GROQ queries (SSG — required for Cloudflare Pages free tier)
- All data in `src/data/mockData.js` must be replaced with live Sanity fetches

---

## 🏗️ Current State

### ✅ Already Done (Do NOT redo)

1. **Sanity schemas** in `sanity-schemas/`:
   - `frame.js` — brand, model, slug, type, gender, material, color, description, designerPhilosophy, price, images×2, isNew, isFeatured, availability, specs
   - `service.js` — number, title, slug, description, details[], image, unconfirmedNote
   - `settings.js` — singleton: name, address, phone, email, instagram, hours[], heroHeadline, heroSubtext, boutiqueImages[], heroImage, metaTitle, metaDescription
   - `schema.js` — barrel export

2. **Sanity client + GROQ queries** in `src/lib/sanity.js`:
   - `sanityClient`, `urlFor()`, `FRAMES_QUERY`, `SERVICES_QUERY`, `SETTINGS_QUERY` (extended with hero fields)

3. **`sanity.config.js`** — updated with structureTool and project ID `4bz7y7k4`

4. **`.env` and `.env.example`** — created with `PUBLIC_SANITY_PROJECT_ID=4bz7y7k4`

5. **NPM packages installed** — `@sanity/astro`, `@sanity/client`, `@sanity/image-url`, `sanity`, `@sanity/vision`, `@astrojs/react`, `react`, and `react-dom` (React is required for Sanity Studio routing and component rendering)

6. **All website pages wired to Sanity with robust fallback to local mockData** so the site never crashes even if Sanity is empty/offline:
   - `index.astro`, `services.astro`, `boutique.astro`, `contact.astro`, `collections/index.astro`, `frame/[id].astro`

### ❌ NOT Done Yet (Work remaining)

- [ ] Set env vars on Cloudflare Pages (Dashboard settings)
- [ ] Add CORS origins in Sanity project settings (sanity.io/manage)
- [ ] Seed content into Sanity Studio (accessible at `/studio` route)
- [ ] Verify deployment on push to GitHub

---

## 📦 NPM Packages to Install

```bash
cd "/home/tanveer/Desktop/practise 2/alexsee-astro"
npm install @sanity/astro @sanity/client @sanity/image-url sanity
```

---

## ⚙️ File Changes Required

### 1. `astro.config.mjs`

```js
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';

export default defineConfig({
  integrations: [
    sanity({
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
      studioBasePath: '/studio',
    }),
  ],
  output: 'static',
});
```

### 2. `.env` (create, never commit)

```env
PUBLIC_SANITY_PROJECT_ID=4bz7y7k4
PUBLIC_SANITY_DATASET=production
```

### 3. `src/lib/sanity.js` — Extend SETTINGS_QUERY

Add missing fields to the existing query:

```js
export const SETTINGS_QUERY = `*[_type == "settings"][0] {
  name, address, postalCode, city, metro,
  phone, instagram, email,
  hours[] { days, hours },
  unconfirmedNote, boutiqueImages,
  heroHeadline, heroSubtext, heroImage,
  metaTitle, metaDescription
}`;
```

### 4. `sanity.config.js` — Fix plugin import + add real ID

```js
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'   // NOTE: deskTool renamed
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity-schemas/schema'

export default defineConfig({
  name: 'alexsee',
  title: 'AlexSEE — Studio CMS',
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || '4bz7y7k4',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
})
```

### 5. Each Astro page — Replace mockData with Sanity fetch

**Pattern to apply to every page:**

```js
// REMOVE this line:
import { frames, services, settings, boutiqueImages } from '../data/mockData.js';

// ADD these lines:
import { sanityClient, FRAMES_QUERY, SERVICES_QUERY, SETTINGS_QUERY, urlFor } from '../lib/sanity.js';
const frames = await sanityClient.fetch(FRAMES_QUERY);
const services = await sanityClient.fetch(SERVICES_QUERY);
const settings = await sanityClient.fetch(SETTINGS_QUERY);
const boutiqueImages = settings?.boutiqueImages || [];
```

Then wrap ALL image references in `urlFor()`:
- `frame.images[0]` → `urlFor(frame.images[0])`
- `service.image` → `urlFor(service.image)`
- `settings.heroImage` → `urlFor(settings.heroImage)`
- `boutiqueImages[i]` → `urlFor(boutiqueImages[i])`

**Pages to update:**
- `src/pages/index.astro` — frames, services, settings, boutiqueImages
- `src/pages/services.astro` — services only
- `src/pages/boutique.astro` — settings + boutiqueImages
- `src/pages/contact.astro` — settings only
- `src/pages/collections/index.astro` — frames only (adjust import path: `../../lib/sanity.js`)

### 6. `src/pages/frame/[id].astro` — Dynamic route from Sanity

```js
import { sanityClient, urlFor } from '../../lib/sanity.js';

export async function getStaticPaths() {
  const frames = await sanityClient.fetch(`*[_type == "frame"] { "id": slug.current }`);
  return frames.map(frame => ({ params: { id: frame.id } }));
}

const { id } = Astro.params;

const frame = await sanityClient.fetch(
  `*[_type == "frame" && slug.current == $id][0] {
    "id": slug.current, brand, model, type, gender, material, color,
    description, designerPhilosophy, price, images,
    isNew, isFeatured, availability, specs
  }`,
  { id }
);

const relatedFrames = await sanityClient.fetch(
  `*[_type == "frame" && slug.current != $id && type == $type][0..2] {
    "id": slug.current, brand, model, price, images, type
  }`,
  { id, type: frame.type }
);
```

### 7. `.gitignore` — Add .env

```bash
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
```

---

## 🚀 Step-by-Step Execution Order

1. **User manually** creates Sanity project at https://sanity.io/manage → copies projectId
2. Agent creates `.env` with real projectId
3. `npm install @sanity/astro @sanity/client @sanity/image-url sanity`
4. Update `astro.config.mjs` (add @sanity/astro integration)
5. Update `sanity.config.js` (structureTool + real ID)
6. Extend `SETTINGS_QUERY` in `src/lib/sanity.js`
7. Wire all 6 pages to Sanity (replace mockData)
8. Update `.gitignore`
9. `npm run dev` → test Studio at http://localhost:4321/studio
10. Seed content manually via Studio (use data from `src/data/mockData.js` as reference)
11. `npm run build` → verify 0 errors
12. In Cloudflare Pages dashboard → Settings → Environment Variables → add both vars
13. In Sanity project → API → CORS Origins → add Cloudflare domain + localhost
14. `git add -A && git commit -m "feat: full Sanity CMS integration" && git push origin main`
15. Verify live site loads content from Sanity

---

## ☁️ Cloudflare Pages Settings

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `22` (set `NODE_VERSION=22` in env vars) |
| Environment Variable | `PUBLIC_SANITY_PROJECT_ID` = your real ID |
| Environment Variable | `PUBLIC_SANITY_DATASET` = `production` |

---

## ⚠️ Known Gotchas

| Issue | Fix |
|-------|-----|
| `deskTool` import error | Use `structureTool` from `sanity/structure` |
| Images return empty string | Always wrap in `urlFor()` |
| Build fails on Cloudflare | Check env vars are set in CF Pages dashboard |
| `getStaticPaths` returns 0 paths | Seed content into Sanity first |
| CORS error in browser | Add domain in Sanity project CORS settings |
| `sanityClient` uses placeholder ID | `.env` not created or not loaded |

---

## 📁 Final File Tree (After Integration)

```
alexsee-astro/
├── .env                         ← NEW (gitignored)
├── .env.example                 ← Keep as reference
├── .gitignore                   ← Updated
├── astro.config.mjs             ← Updated with @sanity/astro
├── sanity.config.js             ← Updated (structureTool + real ID)
├── sanity-schemas/              ← ✅ All 4 files already complete
├── src/
│   ├── lib/sanity.js            ← Updated (SETTINGS_QUERY extended)
│   ├── data/mockData.js         ← Keep as reference (don't delete)
│   └── pages/
│       ├── index.astro          ← Updated — Sanity fetch
│       ├── services.astro       ← Updated — Sanity fetch
│       ├── boutique.astro       ← Updated — Sanity fetch
│       ├── contact.astro        ← Updated — Sanity fetch
│       ├── studio/[...slug].astro ← Auto-created by @sanity/astro
│       ├── collections/index.astro ← Updated — Sanity fetch
│       └── frame/[id].astro    ← Updated — getStaticPaths from Sanity
└── package.json                 ← Updated with sanity deps
```

---

## ✅ Completion Checklist

- [x] Sanity project created → projectId obtained
- [x] `.env` created with real credentials
- [x] npm packages installed
- [x] `astro.config.mjs` updated
- [x] `sanity.config.js` updated
- [x] `src/lib/sanity.js` SETTINGS_QUERY extended
- [x] `index.astro` wired to Sanity
- [x] `services.astro` wired to Sanity
- [x] `boutique.astro` wired to Sanity
- [x] `contact.astro` wired to Sanity
- [x] `collections/index.astro` wired to Sanity
- [x] `frame/[id].astro` getStaticPaths + single query
- [x] `.gitignore` updated
- [x] `npm run build` passes 0 errors
- [ ] Content seeded via /studio
- [ ] Cloudflare Pages env vars set
- [ ] CORS origins added in Sanity
- [ ] Pushed to GitHub → deployed on Cloudflare
- [ ] Live site verified loading from Sanity

---

*Last updated: 2026-06-19 | Created by Antigravity agent for agent handoff*
