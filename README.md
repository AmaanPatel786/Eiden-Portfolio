# 🎨 EIDEN — Immersive Creative Portfolio

An immersive, single-page creative portfolio website for **EIDEN CREATIVE LAB**, translated directly from a premium Figma design mockup. Built with modern web standards using **Next.js**, **React**, and **CSS Modules**.

---

## 🚀 Key Features

- **Pixel-Precise Figma Translation**: Implements exact layouts, typography proportions, and spacing grids derived from the original design.
- **Dynamic Spacing & Layout Alignment**: Multi-row Campaign Lookbook grids with uniform 24px spacings, fluid `vw`-based sizing, and responsive scaling.
- **Advanced Overlaps & Layering**: Layered sections (such as the Scope of Work overlapping the laptop mockup) configured with self-capping margins to lock layout bounds under high-DPI zoom levels.
- **Smooth Image Cropping**: Campaign cards utilize localized image scaling (`scale(1.05)`) and mask containers (`overflow: hidden`) to hide asset margins while maintaining square coordinates.
- **Premium Background Visuals**: Absolute-positioned pink and blue corner strokes with custom opacity linear-gradient masks, framing content areas without layout shifts.
- **Interactive Product Catalog**: Component-driven category layout showcasing Eiden merchandise (Phone Cases, Hoodies, Graphic Tees, Accessories, Deskmats, Bags, and Socks) with interactive tab triggers.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router layout configuration)
- **Styling**: Vanilla CSS Modules (`*.module.css`) for encapsulated component design tokens
- **Typography**: Outfit, Bebas Neue, Montserrat (Gotham/Helixa fallbacks)
- **Bundling**: Webpack development build configurations to ensure maximum cross-platform runtime reliability

---

## 📂 Project Organization

```bash
├── app/                  # Next.js App Router (global styles, layout template, home page)
├── components/           # Component modular architecture for the 13 portfolio sections
├── styles/               # CSS Modules mapping directly to components for style isolation
└── public/               # Optimized high-resolution image mockups, vectors, and background layers
```

---

## ⚙️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your browser to view the application locally.

### 3. Production Build & Optimization
```bash
npm run build
```
Generates a static-site optimized production bundle inside the `.next` directory.
