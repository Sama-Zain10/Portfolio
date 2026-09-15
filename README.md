# Sama Sayed Zain — Portfolio

A dark, glassmorphic developer portfolio built from Sama's CV.

## Stack
React 19 + TypeScript + Vite + Tailwind CSS + Framer Motion + lucide-react

## Structure
```
src/
  components/   UI sections (Hero, About, Skills, Experience, Projects, ...)
  data/         portfolio.ts — all CV content lives here, separate from UI
  hooks/        useActiveSection (scroll-spy for the navbar)
  types/        shared TypeScript interfaces
public/         favicon, downloadable CV
```

## Run locally
```
npm install
npm run dev       # http://localhost:5173
npm run build     # type-checks then builds to dist/
npm run preview   # preview the production build
```

## Source of truth
All content in `src/data/portfolio.ts` comes from the CV you provided
(`Sama_Sayed_Zain_Resume.pdf`) plus the ITI AI training you mentioned in chat.
LinkedIn (linkedin.com/in/sama-sayed-801189386) could not be fetched
automatically — it's login-gated — so it was not used. If your LinkedIn has
extra details, add them to `src/data/portfolio.ts` directly.

## TODOs to replace before publishing
- `public/Sama_Sayed_Zain_Resume.pdf` — currently your uploaded CV; replace if you update it.
- `src/data/portfolio.ts` → `projects` → SkillBridge `githubPlaceholder` — add the real GitHub repo link if one exists.
- `src/data/portfolio.ts` → `certifications` → ITIDA & EYouth entry — the exact date wasn't in the CV; add it.
- `public/TODO-og-image.txt` — add a real 1200×630 Open Graph preview image (`og-image.png`) and remove this file.
- Contact form (`src/components/Contact.tsx`) currently opens the visitor's email client (`mailto:`) instead of sending directly. Connect a real form backend (e.g. Formspree, Resend) if you want in-page submission.
- No profile photo was in the CV, so the hero uses a code panel instead of a headshot. Add one to `src/components/Hero.tsx` if you'd like.

## Deploying
Any static host works (Vercel, Netlify, GitHub Pages) — build with `npm run build` and deploy the `dist/` folder.
"# Portfolio" 
