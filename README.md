# 🏎️ Portfolio International Circuit

Personal portfolio built as a **retro arcade racing dashboard**, featuring pixel-perfect typography, animated skill bars, and interactive project modals — all with zero frameworks and zero dependencies.

> *"If everything seems under control, you're not going fast enough."* — Mario Andretti

###

## 🎯 Highlights

- **Arcade-themed UI** — Press Start 2P & Share Tech Mono fonts, neon accents, blinking status indicators, and a dark-mode-first color palette.
- **Animated Skill Bars** — "Fuel tank" progress bars that fill on load to visualize tech proficiency.
- **Project Detail Modals** — Click any project card to open a full-featured modal with image gallery (swipe-enabled on mobile), tech stack pills, progress bar, and direct links to the repo/live app.
- **Fully Responsive** — Mobile-first layout that gracefully adapts from phones to ultrawide monitors; modal switches between full-screen (mobile) and centered overlay (desktop).
- **Lightweight & Fast** — Pure HTML + CSS + JS, no build step, no bundler, no runtime dependencies.

###

## 🛠️ Tech Stack

| Layer     | Technologies                       |
| --------- | ---------------------------------- |
| Structure | HTML5 (semantic, accessible)       |
| Styling   | Vanilla CSS (tokens, BEM, modular) |
| Logic     | Vanilla JavaScript (ES Modules)    |
| Fonts     | Google Fonts (Press Start 2P, Share Tech Mono) |
| Hosting   | Static — deploy anywhere           |

###

## 📂 Project Structure

```
portfolio/
├── index.html               # Single-page entry point
├── css/
│   ├── main.css              # Style entry point (imports all partials)
│   ├── animations.css        # Keyframes & animation utilities
│   ├── base/
│   │   ├── tokens.css        # Design tokens (colors, spacing, fonts)
│   │   ├── reset.css         # CSS reset
│   │   └── base.css          # Global base styles
│   ├── layout/
│   │   ├── layout.css        # Grid & page structure
│   │   ├── hero.css          # Hero / title section
│   │   └── footer.css        # Footer styles
│   └── components/
│       ├── index.css          # Component imports
│       ├── info-card.css      # Player stats cards
│       ├── stack-bars.css     # Fuel tank skill bars
│       ├── project-card.css   # Project cards in the grid
│       ├── project-modal.css  # Project detail modal
│       ├── contact-card.css   # Contact section
│       └── git-stats-card.css # GitHub stats card
├── js/
│   ├── main.js               # JS entry point (initializes modules)
│   ├── fuel-bars.js           # Skill bar fill animations
│   ├── lap-cards.js           # Project card interactions
│   └── project-modal.js      # Modal logic, gallery & project data
└── assets/
    ├── fonts/                 # Local font files
    └── images/                # Project screenshots & media
```

###

## 🏁 Featured Projects

| Project       | Stack                                         | Status   |
| ------------- | --------------------------------------------- | -------- |
| **CBM-SE LOG**| Vue.js · TypeScript · Supabase                | Finished |
| **CuidAgro**  | Java · SpringBoot · React · TypeScript · PostgreSQL | Finished |

###

## 📄 License

This project is for personal use. Feel free to use it as inspiration for your own portfolio.

---

<p align="center">
  <sub>Designed & built by <strong>Artur Alencar</strong> — Aracaju, Brazil 🇧🇷</sub>
</p>
