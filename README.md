# 🎨 EIDEN — Immersive Creative Portfolio

An immersive, single-page creative portfolio website for **EIDEN CREATIVE LAB**, translated directly from a premium Figma design mockup. Built with modern web standards using [Next.js](https://nextjs.org/) (App Router), React, and vanilla CSS Modules.

---

## ✨ Design System & Aesthetic Theme

This portfolio is built on a bold, premium **Neo-Brutalist** aesthetic combined with high-impact street-style elements:
- **Curated Figma Color Tokens**: Highly saturated, vibrant accent colors including Pink (`#FF005C`), Yellow (`#FFE600`), Cyan (`#00F0FF`), Purple (`#9E00FF`), and Lime (`#B7FF1F`) set against a Pitch Black (`#010101`) background.
- **Retro Grain Overlay**: A custom fixed SVG noise filter overlaying the viewport (`.noise-overlay`) to give a tactile, analog-print texture.
- **Dynamic Background Visuals**: Responsive absolute-positioned corner strokes and curves featuring linear-gradient transparency masks, preventing layout shifts.
- **Fluid Layout Scaling**: Multi-row Lookbook grids with uniform `24px` spacing using dynamic `vw`-based sizing.
- **Robust Layout Overlaps**: Overlapping elements (e.g., product showcase grids) configured with self-capping margins to lock layout bounds under high-DPI zoom levels.
- **Smooth Hover States**: Localized image scaling (`scale(1.05)`) and mask containers (`overflow: hidden`) to crop asset boundaries smoothly on user interaction.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router layout configuration)
- **React version**: `v19.2.4`
- **Styling**: Vanilla CSS Modules (`*.module.css`) for complete style encapsulation and CSS custom properties for token reuse.
- **Typography**: Outfit, Bebas Neue, Montserrat (with Gotham/Helixa fallbacks)
- **Bundler**: Webpack development configuration with fallback support to ensure cross-platform runtime reliability.

---

## 📂 Project Organization

Key directories and configuration files:

- 📂 [app/](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/app) — Core App Router layout, page configuration, and global stylesheets
  - 📄 [layout.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/app/layout.js) — HTML template, global metadata, font configurations, and grain/noise overlay
  - 📄 [page.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/app/page.js) — Main page entry rendering the 13 active section components
  - 📄 [globals.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/app/globals.css) — Custom theme styling variables, base typography resets, and utility classes
- 📂 [components/](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components) — Modular UI components (includes both active and legacy elements)
- 📂 [styles/](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles) — Component-specific CSS module stylesheets
- 📂 [public/](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/public) — Asset repository containing high-resolution optimized WebP images, vector icons, and layout graphics
- 📄 [package.json](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/package.json) — Project dependencies and scripts
- 📄 [next.config.mjs](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/next.config.mjs) — Next.js configuration containing allowed dev origins
- 📄 [eslint.config.mjs](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/eslint.config.mjs) — Flat ESLint config with customized rules overriding default Next.js vitals ignores

---

## 🧩 Component Directory

The portfolio divides its component architecture into **Active Layout Sections** (rendered sequentially on the main page) and **Legacy/Alternative Components** (available for layout experiments or modular enhancements):

### 1. Active Page Components (Rendered on main page)

| Component | Style Module | Purpose & Features |
| :--- | :--- | :--- |
| [Hero.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/Hero.js) | [Hero.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/Hero.module.css) | Above-the-fold introductory banner with custom yoni mudra graphic and brand taglines. |
| [ProductIntro.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/ProductIntro.js) | [ProductIntro.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/ProductIntro.module.css) | Neon-framed floating preview showcasing the brand's product lineup with overlapping borders. |
| [FruitOneFrames.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/FruitOneFrames.js) | [FruitOneFrames.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/FruitOneFrames.module.css) | "The First Fruit" showcase page dedicated to Graphic Art Frames (such as John Wick art prints). |
| [GalleryShowcase.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/GalleryShowcase.js) | [GalleryShowcase.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/GalleryShowcase.module.css) | Flex layout featuring highlights of key portfolio illustration mockups. |
| [FruitTwoTees.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/FruitTwoTees.js) | [FruitTwoTees.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/FruitTwoTees.module.css) | "The Second Fruit" showcase illustrating heavy-weight Graphic Tees worn by models. |
| [Lookbook.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/Lookbook.js) | [Lookbook.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/Lookbook.module.css) | Massive campaign collage layout featuring multi-column image grids with aspect ratio styling. |
| [FruitThreeStickers.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/FruitThreeStickers.js) | [FruitThreeStickers.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/FruitThreeStickers.module.css) | "The Third Fruit" full-bleed graphic strip featuring custom sticker pack designs. |
| [OurProcess.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/OurProcess.js) | [OurProcess.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/OurProcess.module.css) | Timeline breakdown describing Ideation, Creation, Testing, and Production phases. |
| [ScopeOfWork.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/ScopeOfWork.js) | [ScopeOfWork.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/ScopeOfWork.module.css) | Full-width illustrative banner detailing customization collaboration options ("Eiden x You"). |
| [MoodBoardProducts.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/MoodBoardProducts.js) | [MoodBoardProducts.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/MoodBoardProducts.module.css) | Curation grids organized by merch category (Phone Cases, Hoodies, Tees, Desk Mats, Bags, Socks). |
| [MixedReality.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/MixedReality.js) | [MixedReality.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/MixedReality.module.css) | Section detailing Spark AR Instagram integrations with live YouTube Shorts links. |
| [TeamSection.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/TeamSection.js) | [TeamSection.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/TeamSection.module.css) | Grid showcasing the team categorized into "The Creatives" and "The Execs". |
| [ContactFooter.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/ContactFooter.js) | [ContactFooter.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/ContactFooter.module.css) | Call-to-action block framing interactive links for WhatsApp and Instagram with decorative corner strokes. |

### 2. Legacy / Alternative Components (Not rendered on main page)

| Component | Style Module | Purpose & Features |
| :--- | :--- | :--- |
| [About.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/About.js) | [About.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/About.module.css) | Generic bio/creator profile card containing location, influence tags, and placeholder avatar emoji. |
| [ArtBanner.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/ArtBanner.js) | [ArtBanner.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/ArtBanner.module.css) | Horizontal marquee banner containing looping streetwear tags. |
| [Contact.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/Contact.js) | [Contact.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/Contact.module.css) | Generic message submission form layout. |
| [ExhibitionGallery.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/ExhibitionGallery.js) | [ExhibitionGallery.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/ExhibitionGallery.module.css) | Interactive filter-based gallery categorizing streetwear/pixel/illustration mockups with tab triggers. |
| [FeaturedShowcase.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/FeaturedShowcase.js) | [FeaturedShowcase.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/FeaturedShowcase.module.css) | Grid displaying book cover/volume design variations. |
| [MerchandiseGrid.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/MerchandiseGrid.js) | [MerchandiseGrid.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/MerchandiseGrid.module.css) | Shop layout showcasing modular placeholder products with checkout buttons. |
| [Navbar.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/Navbar.js) | [Navbar.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/Navbar.module.css) | Sticky navigation bar containing scroll anchor links. |
| [Skills.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/Skills.js) | [Skills.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/Skills.module.css) | List demonstrating design and illustration skills using stylized neo-brutalist cards. |
| [TeamCollab.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/TeamCollab.js) | [TeamCollab.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/TeamCollab.module.css) | Modular partnership description section featuring list cards. |
| [Testimonials.js](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/Testimonials.js) | [Testimonials.module.css](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/styles/Testimonials.module.css) | Star review cards layout displaying mock client feedback. |

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
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build & Production Compilation
To compile the site statically and optimize bundles:
```bash
npm run build
```
This generates a highly optimized static build located under the `.next` directory.

### 4. Code Quality / Linting
To run the ESLint validation checks:
```bash
npm run lint
```
