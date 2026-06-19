# AlexSEE Website Clone - Progress Log

This log is maintained for continuity across session changes and different AI models.

## 📌 Project Overview
- **Goal:** Clone the website `https://alexsee-opticien-140928628408.europe-west2.run.app/` using Astro + Tailwind CSS v4.
- **Project Folder:** `alexsee-astro/`
- **GitHub:** `https://github.com/Apo-tanveer/alexis-shop.git` (branch: `main`)

---

## ✅ COMPLETED — Full Design & Layout Refinement (2026-06-19)

### Build Status
- **Build:** ✅ 0 errors, 0 warnings, **11 pages** generated in 3.8s
- **Astro Components:** 100% native Astro pages and components
- **Layout & Structure:** Exact match with the original minified React code blocks (`sN`, `lN`, `oN`, `rN`, `cN`, `uN`, `fN`, `dN`, and `nN` / `xf`).

---

## 🏗️ Layout Adjustments & Fixes Implemented

### 1. Header & Navigation Menu (`Header.astro`)
- **Bug:** The menu bar button was only visible on mobile (hidden on desktop) and the fullscreen menu was simplified and did not match the original.
- **Fix:** Redesigned to match the original `nN` React component:
  - Enabled the black-box `MENU`/`FERMER` button on **all screen sizes** (desktop, tablet, mobile).
  - Built the exact fullscreen menu overlay overlaying a 4-column light border vertical grid.
  - Implemented client-side hover functionality: hovering links on the left updates the image preview container on the right (translating, fading, scaling, and blurring dynamically).
  - Integrated the complete footer block (Address, metro, open hours, and Instagram contacts) inside the fullscreen overlay.

### 2. Home Page (`index.astro`)
- **Bug:** Multiple sections from the original landing page (`sN.js`) were completely missing, and the CTA strip was wrong.
- **Fix:**
  - Added the `#intro-philosophy-section` (Notre Philosophie).
  - Adjusted the `#featured-eyewear-section` grids (applying the `md:translate-y-12` and `md:translate-y-6` offsets to cards).
  - Added the `#manifesto-section` (Manifeste containing the lens border pulse animation).
  - Added the `#services-highlight` (collapsible grid slice of the top 3 prestations).
  - Added the `#boutique-vibe-section` (containing the workshop image and contact info table).
  - Replaced the simple CTA card with the correct `#cta-end-section`.
  - Implemented the complete `#homepage-footer` block at the bottom of the page (giant background AlexSEE text, multiple columns, and copyright).

### 3. Boutique Page (`boutique.astro`)
- **Bug:** The slideshow layout was rendering as a side-by-side split, breaking the original design.
- **Fix:**
  - Re-structured to match `cN.js` exactly: the slideshow now displays as a huge top banner spanning `50vh`/`65vh` with the floating inner text overlay (`[ 28 RUE D’AVRON ]` and `AlexSEE Atelier`).
  - Corrected the layout of the access columns below, utilizing a clean CSS representation of the neighborhood map showing метро Buzenval.

### 4. Services Page (`services.astro`)
- **Bug:** Subheadings, descriptions, and accordion behavior were misaligned.
- **Fix:**
  - Standardized all subheadings and descriptive text to match the values in `rN.js`.
  - Configured client-side JavaScript to open/close accordion lists on click and update the sticky right-column image preview on hover or click.
  - Added the direct art direction note text at the bottom.

### 5. Product Detail Page (`frame/[id].astro`)
- **Bug:** Related items list header was styled as a generic `h2`, and image toggling had small bugs.
- **Fix:**
  - Changed the header to `[ Modèles d’art apparentés ]` in monospaced font.
  - Standardized related cards to show materials and correct prices.
  - Corrected image toggling to use vanilla CSS classes to fade smoothly.

### 6. Appointment Form (`contact.astro`)
- **Bug:** Success viewport was simplified, and right-column contact info had missing details.
- **Fix:**
  - Embedded the full success screens layout containing correct bindings and note logs.
  - Aligned the right-column cards with `Contact Alternatif` and `Accès & Localisation`.

### 7. 404 Page (`404.astro`)
- **Bug:** Layout didn't resemble `fN.js` (missing refractive circle and outline text).
- **Fix:**
  - Overwrote the page to show the giant transparent `404` outline, refractive lens overlay, correct SVGs, and specific headings (`Point focal hors-champ`).

### 8. Custom Cursor Engine (`CustomCursor.astro`)
- **Bug:** The mouse cursor felt sluggish (using simple linear LERP), had incorrect sizing on hover vs idle state, and the cursor label appeared inside the circle with cobalt blue text instead of floating to the right as a premium black box with white text.
- **Fix:** 
  - Re-implemented the original Framer Motion spring physics equations (`damping: 40, stiffness: 450, mass: 0.5`) in vanilla JS with sub-stepping (8 iterations per frame) for performance and numerical stability.
  - Configured accurate default scale (`0.6` of 32px = 19.2px) and hover scale (`1.5` of 32px = 48px), with smooth background-color transition to `rgba(10, 59, 255, 0.08)`.
  - Redesigned the label container to float to the right (`absolute left-10`) with exact styles (`bg-optical-black text-ivory text-[9px] tracking-widest font-mono py-1 px-2.5 border border-stone-grey/20 rounded-none shadow-xl`) and smooth scale/fade entry animation.
  - Configured high-performance event delegation on `document` (via `mouseover` and `mouseout`) to dynamically manage cursor states on all present and future layout additions.
  - Patched `src/pages/collections/index.astro` image hover overlay to have `pointer-events-none` to ensure hover triggers on the card are not intercepted.

### 9. Custom Preloader & Intro Transition (`Preloader.astro`)
- **Bug:** The preloader was locally scoped inside `index.astro`, bypassing the intro sequence on direct entry of other routes. Storing status in `sessionStorage` blocked preloading on F5 hard refresh. Furthermore, client-side route transitions caused a momentary black flash, and layout order/animations did not match the original React components (slogan was below the logo and animations lacked the original Framer Motion curves).
- **Fix:** 
  - Moved `<Preloader />` to the global shell layout `Layout.astro` to cover all entrypoints.
  - Switched state tracking to a global window variable (`window['__preloaderPlayed']`) to preserve state on ClientRouter routing but reset it on full reloads.
  - Configured the preloader with `display: none` by default in HTML and added a synchronous `<script is:inline>` to check state and toggle `display: flex` immediately. This completely eliminates any black screen flash during page transition navigation.
  - Resolved stacking context and initialization bugs (product images appearing on top of preloader, preloader missing on direct landing page load):
    1. The HTML default style is set to `display: none` with `z-index: 99999` and background color `#0a0a0a`.
    2. A synchronous inline script (`is:inline`) checks state and toggles `display: flex` synchronously during parsing, rendering the overlay before other page elements are drawn.
    3. Changed the bundled script to execute `runPreloader()` immediately upon script loading instead of waiting for `astro:page-load` (which registers too late on initial page load), ensuring it handles fade-out and scroll unlock on first paint.
  - Corrected the layout hierarchy: the tagline (slogan) is now placed *above* the logo container to mirror the exact React SPA hierarchy.
  - Re-implemented the custom keyframe animations in CSS to precisely emulate the Framer Motion animation values (the lens scaling `0.6 -> 1.1 -> 1.0`, opacity `0 -> 0.4 -> 0.15`, and blur filter `15px -> 4px -> 20px` over 1.8s; along with the sliding undetermined loading bar).

---

## 🗂️ Project Structure

```
alexsee-astro/
├── src/
│   ├── components/
│   │   ├── CustomCursor.astro   ← Smooth cursor
│   │   ├── Header.astro         ← Complete sticky nav + full overlay menu
│   │   ├── Logo.astro           ← SVG logo
│   │   └── Preloader.astro      ← Loading intro
│   ├── data/
│   │   └── mockData.js          ← Frames, services, settings, and slides
│   ├── layouts/
│   │   └── Layout.astro         ← HTML wrapper + noise-overlay
│   ├── pages/
│   │   ├── index.astro          ← Refined Home (Hero, philosophy, manifesto, footer)
│   │   ├── services.astro       ← Refined Services (Accordion, photo column)
│   │   ├── boutique.astro       ← Refined Boutique (Top banner slide, directions, map)
│   │   ├── contact.astro        ← Refined Appointment (Form, success view)
│   │   ├── 404.astro            ← Refined 404 (Axe de réfraction)
│   │   └── collections/
│   │       └── index.astro      ← Collections lookbook grid
│   └── styles/
│       └── global.css           ← Tailwinds CSS
```

### Run Locally:
```bash
cd "alexsee-astro"
npm run dev
# Open http://localhost:4321
```
