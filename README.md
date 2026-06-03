# 🎨 EIDEN CREATIVE PORTFOLIO

An immersive, single-page creative portfolio website for **EIDEN CREATIVE LAB**, translated directly from a premium 1920px Figma layout and built using Next.js, React, and CSS Modules.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (configured with custom React rendering blocks)
- **Styling**: Vanilla CSS Modules (`*.module.css`) for fine-grained layout control and custom page variables
- **Typography**: 
  - **Outfit** (Primary Sans-serif)
  - **Bebas Neue** (Heavy Header Accent Font)
  - **Gotham** (Clean Gothic Sans-serif)
- **Assets**: Structured high-resolution Figma campaign images and mockups

---

## 📂 Directory Structure

```bash
├── app/                  # Next.js Router App directory (globals.css, layout, page.js)
├── components/           # Custom React component files for the 13 layout sections
├── styles/               # CSS Modules mapping directly to components
├── public/               # Static assets (Eiden 1.png to Eiden 69.png, strokes, and logo SVGs)
└── package.json          # Dependency configurations and script commands
```

---

## 🧱 Component Breakdown (Top to Bottom)

1. **[Hero](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/Hero.js)**: Full-width heavy typography section featuring the main Eyon Illustration Banner (`Eiden 1.png`) and centered brand messages.
2. **[ProductIntro](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/ProductIntro.js)**: Neon green stroke-themed brand description wrapper.
3. **[FruitOneFrames](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/FruitOneFrames.js)**: The First Fruit section featuring a two-column split layout for graphic art frames.
4. **[GalleryShowcase](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/GalleryShowcase.js)**: Immersive vertical scrolling gallery banner layout featuring soft-gradient transitions.
5. **[FruitTwoTees](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/FruitTwoTees.js)**: The Second Fruit section highlighting graphic tees.
6. **[Lookbook](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/Lookbook.js)**: A complex 8-row image collage displaying campaign models, shirts, and landscape banners with uniform 24px spacing grids.
7. **[FruitThreeStickers](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/FruitThreeStickers.js)**: The Third Fruit section rendering the pre-stylized sticker pack banner.
8. **[OurProcess](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/OurProcess.js)**: Creative process timeline block featuring a centered laptop mockup banner and dynamic overlapping sticker cards.
9. **[ScopeOfWork](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/ScopeOfWork.js)**: Visual card list highlighting typography, poster art, illustration, and print designs.
10. **[MoodBoardProducts](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/MoodBoardProducts.js)**: Tilted polaroid card row showcasing physical product prints.
11. **[MixedReality](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/MixedReality.js)**: Mixed Reality illustration card highlighting interactive experiences.
12. **[TeamSection](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/TeamSection.js)**: Section highlighting design collaboration and studio crew profiles.
13. **[ContactFooter](file:///c:/Users/Amaan/Downloads/Eiden%20Portfolio/components/ContactFooter.js)**: Immersive dark footer section with gradient SVG arcs and interactive social pills.

---

## 🎨 Premium Layout Features

### 1. Self-Capping Overlaps
- Overlapping elements (like the `.stickersRow` underneath the `.bannerContainer` in the process section) use percentage-based margins (`margin-top: -5.5%`) relative to the page width.
- Because the page body wrapper caps at a maximum width of `1920px`, the overlap margin automatically stops growing on very large screen widths, capping cleanly at `-103px` and preventing "out-of-bounds" rendering on zoom out.

2. **Aspect Ratio Equalization**:
   - Sticker cards (`Eiden 23` & `24`) are equalized to an aspect ratio of `1920 / 2146` (the mathematical average of their raw files) combined with `object-fit: cover`. This ensures they align perfectly with no bottom layout unevenness.
   
3. **Smart Image Zoom (Crop Utilities)**:
   - Some models cards (such as the white shirts in rows 14 & 15 of Lookbook) scale up by 5% (`transform: scale(1.05)`) inside overflow-hidden frames to crop out native image black padding while preserving a strict square grid aspect ratio.

4. **Layering & Transparency Masking**:
   - Banner layers (like `Eiden 22.png`) utilize native transparent corners with `filter: drop-shadow` in CSS rather than browser box-shadow outlines. This allows background elements to seamlessly show through their rounded corners.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
To bypass the Windows Turbopack Hot Module Replacement (HMR) bug, the webpack bundler script is configured for development:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Compile and Build
To verify the layout and bundle optimization:
```bash
npm run build
```
