# Bitnex Technologies LLC — Website

React 18 + Vite + Tailwind CSS 3 + React Router.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Company settings (.env)
All company details (name, legal name, emails, phones, addresses, SMS program, form endpoint)
live in `.env`. Edit it and restart `npm run dev` / rebuild. `.env.example` is a copy for reference.

## Telnyx 10DLC
Opt-in form: `/contact`. Legal pages: `/privacy-policy`, `/terms-and-conditions`, `/sms-terms`.
Copy-paste campaign text: `TELNYX-10DLC-SUBMISSION.md`.

## Structure
- `src/pages` — Home, About, Services, Contact, Blog, BlogPost, PrivacyPolicy, Terms, SmsTerms
- `src/components` — Navbar, Footer, PageHero, CTA, Counter, Icon
- `src/data/content.js` — all text (services, FAQs, stats, blog posts, contact info). Edit here.
- `tailwind.config.js` — brand colors (teal `#45BEB3`, graphite `#4A4A4A`, navy `#0A1C2B`)

## Notes
- The contact form POSTs JSON (including the SMS consent record) to `VITE_CONTACT_FORM_ENDPOINT`.
- Stats numbers and skill percentages are placeholders — update them in `content.js`.
- cPanel: `public/.htaccess` (page routing + HTTPS) and `public/contact.php` (form handler) are copied into `dist/` by the build. See DEPLOY-CPANEL.md.
