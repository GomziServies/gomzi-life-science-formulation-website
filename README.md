# Gomzi Lifesciences — React + Vite

The Gomzi Lifesciences website (gomzilifesciences.in) rewritten as a React single-page app, converted 1:1 from the original multi-page HTML site. Same pages, same content, same design (the original `styles.css` is used unmodified).

Rebranding changes on top of the original MSC Nutra content: the brand name is Gomzi Lifesciences throughout (with Gomzi contact details — `info@gomzilifesciences.in`, Surat address), the header/favicon use the Gomzi logo image, and the color scheme is a green primary (`#99c229`) with black accents instead of the original blue/red.

## Getting started

```bash
npm install
npm run dev      # start dev server → http://localhost:5173
```

## Build & deploy

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

Deploy the `dist/` folder to any static host. `public/_redirects` is included for
Netlify; for Vercel add `"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`
or use a `vercel.json`. Alternatively, swap `BrowserRouter` for `HashRouter` in
`src/main.jsx` to work on hosts without SPA rewrites.

## Project structure

```
public/              # images served as-is (logo, hero, page photos)
src/
├── index.css        # original styles.css (unmodified + contact grid rule)
├── main.jsx         # entry: React root + BrowserRouter
├── App.jsx          # routes for all 6 pages
├── components/
│   ├── Header.jsx       # nav + mobile menu + scrolled state (was script.js)
│   ├── Footer.jsx
│   ├── Reveal.jsx       # scroll-in animations via IntersectionObserver
│   └── ScrollToTop.jsx  # scroll restoration + smooth hash scrolling (#clinical)
├── hooks/
│   └── usePageMeta.js   # per-page <title>/<meta description>
└── pages/
    ├── Home.jsx         # index.html
    ├── About.jsx        # about.html
    ├── Ingredients.jsx  # ingredients.html (search + category filters in React state)
    ├── RDFormulation.jsx# rd-formulation.html
    ├── Applications.jsx # applications.html
    └── Contact.jsx      # contact.html (enquiry form + validation)
```

## Notes

- Per-page titles & descriptions are set client-side via `usePageMeta`.
- The enquiry form validates like the original and is ready to wire to
  Formspree/your backend — see the comment in `src/pages/Contact.jsx`.
- Update the footer copyright year (`&copy; 2024`) in `src/components/Footer.jsx`.
