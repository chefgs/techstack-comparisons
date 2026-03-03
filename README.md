# ⚡ TechStack Comparisons

> A comprehensive, user-friendly reference website comparing backend technologies and UI frameworks — with real-world use-case recommendations, advanced UI/UX patterns, and security guidance.

[![Deploy to GitHub Pages](https://github.com/chefgs/techstack-comparisons/actions/workflows/deploy.yml/badge.svg)](https://github.com/chefgs/techstack-comparisons/actions/workflows/deploy.yml)

🌐 **Live Site:** [https://chefgs.github.io/techstack-comparisons](https://chefgs.github.io/techstack-comparisons)

> **Forking this repo?** Update the badge URL and live site link above to use your GitHub username instead of `chefgs`.

---

## 📚 What's Inside

| Section | Topics Covered |
|---|---|
| 🔧 **Backend** | Go vs Python vs Rust — performance benchmarks, concurrency models, security profiles, and use-case recommendations |
| 🎨 **UI Frameworks** | React, Vue, Angular, Svelte, Next.js, Nuxt, Astro, HTMX, Alpine.js, Laravel/Blade, Django templates, Streamlit, Dash, Gradio, Reflex, NiceGUI |
| ✨ **Advanced UI/UX** | Performance (code splitting, caching, virtual lists), animations (Framer Motion, GSAP, View Transitions), real-time (WebSockets, SSE), accessibility (WCAG 2.2, ARIA), design systems, architecture patterns (Islands, RSC, PWA, Edge) |
| 🔒 **Security** | Memory safety scores, dependency ecosystem risk, XSS/CSRF prevention, SAST/DAST tooling, supply-chain security checklist |

---

## 🗂️ Repository Structure

```
techstack-comparisons/
├── index.html                  # Single-page app — all content lives here
├── css/
│   └── styles.css              # Dark-themed, responsive stylesheet (CSS variables, animations)
├── js/
│   └── main.js                 # Tab navigation, score-bar animations, hash routing
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions — CI validation + GitHub Pages deployment
└── README.md
```

---

## 🚀 Deploying to GitHub Pages

### Option A — Automatic (recommended)

The included GitHub Actions workflow deploys the site automatically on every push to `main`/`master`.

**One-time setup (do this once):**

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Click **Save**

That's it. The next push to `main` will trigger the workflow and publish the site at:

```
https://<your-username>.github.io/<repo-name>/
```

> **Example:** `https://chefgs.github.io/techstack-comparisons`

### Option B — Manual trigger

You can also trigger a deployment manually at any time:

1. Go to **Actions** → **Deploy to GitHub Pages**
2. Click **Run workflow** → **Run workflow**

### Checking deployment status

```
Repository → Actions tab → "Deploy to GitHub Pages" workflow
```

Each run shows two jobs:
- **Build Site** — validates files, checks asset references, uploads artifact
- **Deploy to Pages** — publishes to GitHub Pages and outputs the live URL

---

## 🖥️ Running Locally

The site is pure static HTML/CSS/JS — no build step required.

### Quickstart (any method works)

```bash
# Python (built-in)
python3 -m http.server 8080

# Node.js
npx serve .

# Node.js (alternative)
npx http-server . -p 8080

# PHP
php -S localhost:8080
```

Then open **http://localhost:8080** in your browser.

> ⚠️ Open via a local server (not `file://`) so that Google Fonts loads correctly over `https://`.

---

## 🧪 CI Validation

The `deploy.yml` workflow includes an automated validation step that runs on every push:

| Check | What it does |
|---|---|
| **File existence** | Verifies `index.html`, `css/styles.css`, and `js/main.js` are present |
| **Asset references** | Scans `index.html` for local `href`/`src` values and confirms each file exists |

If either check fails, the deployment is blocked and the workflow exits with a non-zero code.

---

## 🤝 Contributing

This repo is designed to grow — pull requests adding new tech stack comparisons are very welcome!

### Adding a new comparison

1. Fork the repository and create a branch (`git checkout -b feat/add-bun-comparison`)
2. Edit `index.html` — add a new `<section>` or extend an existing one
3. Add corresponding styles in `css/styles.css` if needed
4. Open a Pull Request — the CI workflow will validate your changes automatically

### Suggested future additions

- [ ] Bun vs Node.js vs Deno runtime comparison
- [ ] Database comparisons (PostgreSQL vs MySQL vs SQLite vs MongoDB)
- [ ] Container & orchestration (Docker vs Podman, Kubernetes vs Nomad)
- [ ] Cloud provider comparison (AWS vs GCP vs Azure)
- [ ] Mobile frameworks (React Native vs Flutter vs Expo)
- [ ] Testing framework comparisons

---

## 📄 License

MIT — free to use, modify, and share.
