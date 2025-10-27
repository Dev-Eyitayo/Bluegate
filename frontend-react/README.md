# Blue Gate — React (Vite) + Tailwind

This folder contains a converted React + Vite + Tailwind skeleton of the original static `frontend` site.

Quick setup:

1. Move/copy the images from the original project `frontend/assets` into `frontend-react/public/assets`.
   - For example: copy `frontend/assets/hero1.png` → `frontend-react/public/assets/hero1.png` and the other images and `bluegate-logo.jpg`.
2. From the `frontend-react` folder run:

```powershell
npm install
npm run dev
```

What I changed:
- Converted the static markup into React components: `Header`, `HeroCarousel`, `Cards`, `Footer`.
- Added Tailwind CSS with a minimal `index.css` that includes Tailwind directives.
- Kept visual intent and interactivity (mobile menu + carousel) implemented in React.

Notes / next steps:
- If you'd like me to copy binary assets into the new folder in this repo, provide them or allow me to read them; I couldn't programmatically copy images in this step.
- I can also run `npm install` here and verify the dev server if you want — tell me to proceed.
