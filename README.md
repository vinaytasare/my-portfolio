# Vinay Tasare — Portfolio (React + Vite)

## Structure
```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
index.html
package.json
vite.config.js
```

## Run locally
```bash
npm install
npm run dev
```
Opens at http://localhost:5173

## Build for production
```bash
npm run build
```
Outputs static files to `dist/` — deploy that folder to Netlify, Vercel, or GitHub Pages.

## Deploy quickly
- **Vercel**: `npx vercel` in this folder, or connect the GitHub repo at vercel.com
- **Netlify**: drag the `dist/` folder (after `npm run build`) into app.netlify.com/drop
- **GitHub Pages**: push this folder to a repo, then use the `gh-pages` package or GitHub Actions to deploy `dist/`

## Editing content
Each section's text/data lives at the top of its component file as plain JS arrays/objects
(e.g. `skillGroups` in `Skills.jsx`, `projects` in `Projects.jsx`) — edit those instead of
digging through JSX markup.
