# AlexSEE — Astro v6 + Sanity CMS

A pixel-perfect clone of the AlexSEE opticien boutique website, built with **Astro v6**, **Tailwind CSS v4**, and **Sanity CMS** for full content management.

## 🏗️ Project Stack

| Technology | Purpose |
|---|---|
| [Astro v6](https://astro.build) | Static site framework (SSG) with native `.astro` templates |
| [Tailwind CSS v4](https://tailwindcss.com) | Modern utility-first styling |
| [Sanity CMS](https://sanity.io) | Headless CMS for content management (frames, services, settings) |
| [Sanity Studio](https://sanity.io/studio) | Embedded dashboard at `/admin` using React 19 |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Official integration to automatically generate sitemaps |

---

## 📁 Project Structure

```
alexsee-astro/
├── sanity-schemas/            # Sanity schema definitions
│   ├── schema.js              # Barrel schema export
│   ├── seo.js                 # Reusable SEO fields schema (Meta Title, Description, Social Image)
│   ├── frame.js               # Eyeglasses frame document type
│   ├── service.js             # Optician service document type
│   └── settings.js            # Boutique settings document type (singleton)
├── src/
│   ├── components/            # Astro components
│   │   ├── CustomCursor.astro # Animated custom lens cursor
│   │   ├── Preloader.astro    # Loading transition screen
│   │   ├── Header.astro       # Sticky navigation bar
│   │   ├── Footer.astro       # Footnote, location & hours links
│   │   └── Logo.astro         # SVG brand logo
│   ├── layouts/
│   │   └── Layout.astro       # Primary HTML skeleton, metadata headers, and visual editing handler
│   ├── pages/                 # Routing pages (native Astro files)
│   │   ├── index.astro        # Homepage
│   │   ├── boutique.astro     # Location details, opening hours, interactive map
│   │   ├── services.astro     # Savoir-faire accordion layout
│   │   ├── contact.astro      # Appointment booking form
│   │   ├── 404.astro          # Custom 404 error page
│   │   ├── collections/
│   │   │   └── index.astro    # Filterable catalog lookbook
│   │   └── frame/
│   │       └── [id].astro     # Dynamic route for single frame detailed view
│   ├── data/
│   │   └── mockData.js        # Fallback local data (frames, services, settings)
│   ├── lib/
│   │   └── sanity.js          # Sanity Client config & GROQ page queries
│   └── styles/
│       └── global.css         # Global stylesheets + Tailwind CSS v4 imports
├── public/
│   ├── assets/                # Local static images (such as default social share image)
│   ├── favicon.svg            # Site favicon
│   ├── robots.txt             # Static robots.txt pointing to the XML sitemap index
│   └── static/                # Static configuration files
├── astro.config.mjs           # Astro configuration (Vite, React, Sanity, Sitemap integrations)
├── sanity.config.js           # Sanity Studio workspace settings
└── .env.example               # Reference template for credentials
```

---

## ⚡ Key Features

- ⚙️ **Fully Dynamic CMS Integration:** Fully integrated with Sanity. Content can be edited at `/admin` and is fetched dynamically using custom GROQ queries.
- 🔍 **SEO Controls:** A custom `seo` schema configuration provides Meta Title, Meta Description, and Social Share Image fields for every page and product detail page, with validation rules.
- 🛡️ **Robust Fallback Strategy:** If a document or specific SEO fields are left empty in Sanity, the layout falls back automatically to default props, global singleton settings, or a local public image asset (`/assets/alexsee_hero_man_1781887423927-Daa6PeCv.jpg`).
- 🗺️ **Sitemap & Robots.txt:** Automatic sitemap index generation via `@astrojs/sitemap` matching the production URL (`https://alexsee-demo.pages.dev`), backed by a custom `robots.txt`.
- 🎨 **Visual Effects:** Custom animated lens cursor, smooth CSS magnifier hover effects, image swapping, and smooth Framer Motion transitions.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file at the root by copying the template:

```bash
cp .env.example .env
```

Add your Sanity project credentials:

```env
PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
PUBLIC_SANITY_DATASET=production
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to check the site preview. You can access the embedded Sanity Studio at [http://localhost:4321/admin](http://localhost:4321/admin) to manage content.

### 4. Build for Production

To test the production build and verify sitemap generation:

```bash
npm run build
```
This generates the build folder `dist/` containing `sitemap-index.xml` and all compiled static files.
