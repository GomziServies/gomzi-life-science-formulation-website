# Project: gomzi-formula-react R&D & Formulation Category Grid

## Architecture
- **Target Component**: `src/pages/Home.jsx` lines 195–218 (R&D & Formulation section).
- **Target Stylesheet**: `src/index.css` (defining `.rd-formats-grid`, `.rd-format-card`, responsive breakpoints, and removing the 1-column collapse at `<=1024px` from `.formats-grid`).
- **Asset Directory**: `public/categories/` hosting the 9 category images referenced via root-relative paths (`/categories/<category>.webp` or `.png`).
- **Data Model**:
  Refactor `FORMATS` in `src/pages/Home.jsx` from `string[]` to an array of objects:
  ```javascript
  const FORMATS = [
    { name: 'Powders', badge: 'Solid Dose', image: '/categories/powders.webp', alt: 'Powder formulation and blending' },
    { name: 'Sachets', badge: 'Unit Dose', image: '/categories/sachets.webp', alt: 'Sachet packaging and delivery' },
    { name: 'Capsules', badge: 'Encapsulated', image: '/categories/capsules.webp', alt: 'Nutraceutical capsules' },
    { name: 'Tablets', badge: 'Compressed', image: '/categories/tablets.webp', alt: 'Compressed tablets' },
    { name: 'Liquids', badge: 'Oral Solution', image: '/categories/liquids.webp', alt: 'Liquid formulations and syrups' },
    { name: 'Gels', badge: 'Semi-Solid', image: '/categories/gels.webp', alt: 'Nutritional gels' },
    { name: 'Jellies', badge: 'Nutra Confection', image: '/categories/jellies.webp', alt: 'Functional jellies' },
    { name: 'Gummies', badge: 'Functional Chew', image: '/categories/gummies.webp', alt: 'Nutraceutical gummy vitamins' },
    { name: 'Functional Beverages', badge: 'Ready-to-Drink', image: '/categories/functional-beverages.png', alt: 'Functional beverages and drinks' },
  ];
  ```
- **Grid Layout**:
  - Desktop ($\ge 1024\text{px}$): Symmetrical 3-column $\times$ 3-row grid (`repeat(3, 1fr)`).
  - Tablet ($600\text{px} - 1023\text{px}$): 2 columns (`repeat(2, 1fr)`) with 9th item (`Functional Beverages`) spanning full width (`grid-column: 1 / -1`) to eliminate orphaned grid gaps.
  - Mobile ($< 600\text{px}$): 1 column (`1fr`) with fluid card width and minimum $48\text{px}$ touch targets.
- **Card Aesthetics**:
  - Elevated crisp white container (`#ffffff`) with subtle border (`#e5e7f0`) and $12\text{px}$ radius.
  - Image frame with 16:10 aspect ratio ($210\text{px}$ height) and smooth hover zoom (`scale(1.06)`).
  - Frosted glass pill badge with category classification.
  - High-contrast typography adhering to WCAG AAA contrast rules.
  - Section heading `<h2>R&D & Formulation</h2>`, subtitle, and CTA button `<Link to="/rd-formulation" className="btn btn-red btn-lg">Explore R&D & Formulation →</Link>` remain strictly intact.
  - No changes to any other sections of the website.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Official Category Images | Source and store images for all 9 categories in public/categories/ | M1 | Survey (Explorer 2) |
| 2 | Component Data & Markup Refactor | Upgrade FORMATS array to rich objects and render image cards in Home.jsx | M1 | Survey (Explorer 1) |
| 3 | Responsive CSS Grid & Micro-interactions | Implement 3-column desktop, 2-column tablet, 1-column mobile styles in index.css | M1 | Survey (Explorer 3) |
| 4 | Content & Scope Preservation | Keep heading, subtitle, and CTA button intact; isolate edits to Home.jsx & index.css | M1 | Survey (Explorer 1) |
| 5 | Build & Visual Verification | Ensure npm run build exits 0 and all viewports render without overflow | M1 | Survey (All) |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | R&D Formulation Grid Implementation | Image asset integration, Home.jsx refactoring, index.css responsive styling | none | DONE |

## Interface Contracts
### Home.jsx ↔ index.css
- `.rd-formats-grid`: CSS Grid container, 3 columns on desktop, 2 on tablet, 1 on mobile.
- `.rd-format-card`: Card container with white surface, border, and elevation.
- `.rd-format-card-img-wrap`: Image container with `aspect-ratio: 16 / 10`, `overflow: hidden`.
- `.rd-format-card-img`: `width: 100%; height: 100%; object-fit: cover; transition: transform 0.35s ease;`
- `.rd-format-badge`: Frosted glass classification pill positioned absolute top-right.
- `.rd-format-card-title`: Category name rendered in `var(--color-text)`, transition to brand green on hover.

## Code Layout
- `src/pages/Home.jsx`: Lines 5–15 (`FORMATS`), Lines 195–218 (R&D & Formulation `<section>`).
- `src/index.css`: Add `.rd-formats-grid` and card styles; update line 955 to prevent `.formats-grid` / `.rd-formats-grid` single-column collapse on tablets.
- `public/categories/`: Destination directory for 9 image assets.
