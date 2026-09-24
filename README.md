# Vertex Lab — Chemistry Lab Website

A modern, dark-themed chemistry lab landing page built with React + Vite.
Palette: deep navy/black background, electric blue accent, hazard-red accent.
Icons are hand-drawn inline SVGs (flask, beaker, atom, DNA, microscope, droplet, hazard) — no external image dependencies.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

```
index.html
src/
  main.jsx
  App.jsx / App.css
  index.css        # color tokens + base styles
  components/
    Icons.jsx       # inline SVG icon set
    Header.jsx
    Hero.jsx
    Capabilities.jsx
    Protocol.jsx    # instruments strip + process timeline
    Footer.jsx
```

Edit `src/index.css` `:root` block to retheme colors, or swap copy/content directly in the component files.
