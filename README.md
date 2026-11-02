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
- The contact form saves inquiries through FG API's `POST /public/v1/contact-inquiry`.
  Local development uses `http://localhost:80`, matching `GCS/gomzi-admin`;
  production uses `https://api.fggroup.in`. To override the API origin, copy
  `.env.example` to `.env.local`, set `VITE_API_BASE_URL`, and restart Vite.
  Name, company, email, phone, interest, and message are required. Company and
  interest appear in the inquiry message and are also saved in `details`.
  Inquiries use the GLS subject and Gomzi Lifesciences source supported by the
  admin page at `/nutrition/contact-inquiry/contact`. Refresh that page after
  submitting; its API list cache can take up to 60 seconds to refresh.
- Contact inquiries require email OTP verification: click **Send Enquiry** to email a
  six-digit code and open the verification popup. Enter the code and click **Verify email**;
  when the code is valid, the enquiry is submitted automatically. Use **Resend code** in
  the popup if needed.
  Codes and verification expire after 15 minutes; resend is available after 60 seconds.
  Changing the email requires verification again. The backend uses the existing
  `/public/v1/inquiry-otp/send` and `/verify` routes with purpose
  `gls-formulation-contact`, and checks an email-bound verification token before
  saving the inquiry. After saving, the API sends the GLS inquiry acknowledgment to
  the submitted email. Deploy the matching `GCS/fg-api` changes together with this
  website; that API must have its existing GLS SMTP account configured.
- Update the footer copyright year (`&copy; 2024`) in `src/components/Footer.jsx`.
