# AlexSEE — Astro + Sanity CMS

A pixel-perfect clone of the AlexSEE opticien boutique website, rebuilt with **Astro**, **React**, **Framer Motion**, and **Sanity CMS** for full content management.

## 🏗️ Project Stack

| Technology | Purpose |
|---|---|
| [Astro](https://astro.build) | Static site framework + island architecture |
| [React](https://reactjs.org) | Interactive UI components |
| [Framer Motion](https://framer.com/motion) | Animations, page transitions, spring physics |
| [Sanity CMS](https://sanity.io) | Content management (frames, services, settings) |
| [Lucide React](https://lucide.dev) | Icons |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Sanity CMS (optional — site runs with mock data by default)

**a)** Create a free Sanity project at [https://sanity.io/manage](https://sanity.io/manage)

**b)** Copy the environment file:
```bash
cp .env.example .env
```

**c)** Fill in your Sanity credentials in `.env`:
```env
PUBLIC_SANITY_PROJECT_ID=your_project_id_here
PUBLIC_SANITY_DATASET=production
```

**d)** Deploy the Sanity schema:
```bash
npx sanity@latest deploy
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

## 📁 Project Structure

```
alexsee-astro/
├── src/
│   ├── components/            # React components
│   │   ├── AlexSeeApp.jsx     # Main app router + state
│   │   ├── Logo.jsx           # AlexSEE SVG logo
│   │   ├── CustomCursor.jsx   # Lens-shaped custom cursor
│   │   ├── Preloader.jsx      # Animated intro overlay
│   │   ├── Header.jsx         # Sticky navigation
│   │   ├── HomePage.jsx       # Hero + featured frames
│   │   ├── CollectionsPage.jsx # Lookbook grid with filters
│   │   ├── FrameDetailPage.jsx # Single frame detail
│   │   ├── ServicesPage.jsx   # Services accordion
│   │   ├── BoutiquePage.jsx   # Location + hours
│   │   ├── AppointmentPage.jsx # Contact form
│   │   └── NotFoundPage.jsx   # 404 page
│   ├── data/
│   │   └── mockData.js        # Fallback data (frames, services, settings)
│   ├── lib/
│   │   └── sanity.js          # Sanity client + GROQ queries
│   ├── pages/
│   │   └── index.astro        # Main Astro page (shell)
│   └── styles/
│       └── global.css         # Global styles + Tailwind v4
├── sanity-schemas/
│   ├── schema.js              # Schema exports
│   ├── frame.js               # Eyeglasses frame schema
│   ├── service.js             # Optician service schema
│   └── settings.js            # Boutique settings schema (singleton)
├── sanity.config.js           # Sanity Studio config
├── astro.config.mjs           # Astro config with React integration
└── .env.example               # Environment variable template
```

## 🎨 Design System

**Colors:**
- `ivory` = `#f5f2ed` — Background
- `optical-black` = `#0a0a0a` — Primary text
- `stone-grey` = `#8e8e8e` — Secondary text
- `stone-light` = `#e1dbd2` — Borders, surfaces
- `cobalt` = `#2e5bff` — Accent/brand color

**Fonts:**
- `Inter` — UI text (sans)
- `Playfair Display` — Headlines, product names (display)
- `JetBrains Mono` — Labels, badges, code (mono)

## 📝 Content Management (Sanity)

The Sanity CMS manages three content types:

### 👓 Montures (Frames)
- Brand, Model, Type, Gender, Material, Color
- Description + designer philosophy quote
- Two product images
- Price, specs (lens/bridge/temple measurements)
- Availability status, isNew, isFeatured flags

### 🔬 Prestations (Services)
- Service number, title, description
- Up to 6 bullet point details
- Illustrative photo

### ⚙️ Paramètres Boutique (Settings)
- Name, address, phone, email, Instagram
- Weekly opening hours table
- Hero headline + subtext
- Boutique slideshow images

## 🔌 How Sanity + Fallback Data Work

The site is designed to work in **two modes**:

1. **Without Sanity** (development/demo): Uses `src/data/mockData.js` as fallback. All content is hardcoded and the site works out of the box.

2. **With Sanity** (production): Set your `PUBLIC_SANITY_PROJECT_ID` in `.env`. Data is fetched at build time from Sanity using GROQ queries defined in `src/lib/sanity.js`.

To switch to Sanity data, update `AlexSeeApp.jsx` to fetch from Sanity using `useEffect`.

## ✨ Features

- 🎬 **Animated intro preloader** with loading bar and skip button
- 🔍 **Custom lens-shaped cursor** with spring physics and label tooltips
- 🖼️ **Hover magnifier effect** on hero portrait image
- 📦 **Collection filtering** by type, gender, brand
- 🎠 **Second-image swap** on collection card hover
- 📖 **Service accordion** with animated image panel
- 🗺️ **Decorative CSS map** of the boutique neighborhood
- 📅 **Appointment form** with validation + pre-selected frame model
- 🌟 **Page transitions** with Framer Motion AnimatePresence
- 📱 **Fully responsive** — mobile-first design
- ♿ **Respects prefers-reduced-motion**
