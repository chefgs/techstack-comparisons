# ⚡ TechStack Comparisons

> A comprehensive, user-friendly reference website comparing backend technologies and UI frameworks — with real-world use-case recommendations, advanced UI/UX patterns, security guidance, enterprise documentation, and an engineering blog.

[![Deploy to GitHub Pages](https://github.com/chefgs/techstack-comparisons/actions/workflows/deploy.yml/badge.svg)](https://github.com/chefgs/techstack-comparisons/actions/workflows/deploy.yml)

🌐 **Live Site:** [https://chefgs.github.io/techstack-comparisons](https://chefgs.github.io/techstack-comparisons)

> **Forking this repo?** Update the badge URL and live site link above to use your GitHub username instead of `chefgs`.

---

## 📚 What's Inside

| Page | Description |
|---|---|
| 🏠 **[Home (index.html)](index.html)** | Interactive comparison of backend languages and UI frameworks with scoring tables, benchmark charts, and use-case guides |
| 📖 **[Documentation (docs.html)](docs.html)** | In-depth enterprise reference documentation: backend decision frameworks, UI architecture, security hardening, architecture patterns, and DevOps tooling |
| ✍️ **[Blog (blog.html)](blog.html)** | Engineering blog with narrative deep-dives: choosing a backend language, enterprise frontend architecture, supply chain security, performance at scale, and CI/CD for monorepos |

### Home — Interactive Comparison Sections

| Section | Topics Covered |
|---|---|
| 🔧 **Backend** | Go vs Python vs Rust — performance benchmarks, concurrency models, security profiles, and use-case recommendations |
| 🎨 **UI Frameworks** | React, Vue, Angular, Svelte, Next.js, Nuxt, Astro, HTMX, Alpine.js, Laravel/Blade, Django templates, Streamlit, Dash, Gradio, Reflex, NiceGUI |
| ✨ **Advanced UI/UX** | Performance (code splitting, caching, virtual lists), animations (Framer Motion, GSAP, View Transitions), real-time (WebSockets, SSE), accessibility (WCAG 2.2, ARIA), design systems, architecture patterns (Islands, RSC, PWA, Edge) |
| 🔒 **Security** | Memory safety scores, dependency ecosystem risk, XSS/CSRF prevention, SAST/DAST tooling, supply-chain security checklist |

### Documentation — Enterprise Reference

| Section | Topics Covered |
|---|---|
| 🔧 **Backend Deep Dive** | Go/Python/Rust enterprise use cases, framework selection, production checklists, decision matrix |
| 🎨 **UI Architecture** | Rendering strategies (SSR/SSG/ISR/Edge/Islands/RSC), state management guide, enterprise framework selection |
| 🔒 **Security Hardening** | Secure backend/frontend patterns, supply chain security (7-layer defence), compliance frameworks (SOC 2, HIPAA, PCI DSS, FedRAMP) |
| 🏛️ **Architecture Patterns** | Microservices, monolith vs microservices decision guide, event-driven architecture, edge computing |
| ⚙️ **DevOps & Tooling** | CI/CD pipeline stages, Docker best practices, observability stack (metrics, logs, traces), SLO framework |

### Blog — Enterprise Engineering Articles

| Article | Summary |
|---|---|
| **Choosing Your Enterprise Backend Language** | Go vs Python vs Rust decision framework grounded in production trade-offs |
| **Enterprise Frontend Architecture** | React, Angular, Astro — rendering strategies, state management, design systems |
| **Supply Chain Security** | XZ Utils attack anatomy, ecosystem risk profiles, 7-layer defence stack |
| **Backend Performance at Scale** | Why benchmarks mislead, real-world RPS figures, practical optimization checklist |
| **CI/CD for Multi-Language Monorepos** | Change detection, build caching, GitHub Actions patterns, progressive delivery |

---

## 🗂️ Repository Structure

```
techstack-comparisons/
├── index.html                  # Single-page app — interactive tech stack comparisons
├── docs.html                   # Enterprise technical documentation
├── blog.html                   # Engineering blog with enterprise deep-dives
├── css/
│   └── styles.css              # Dark-themed, responsive stylesheet (CSS variables, animations)
├── js/
│   └── main.js                 # Tab navigation, score-bar animations, hash routing
├── .github/
│   ├── workflows/
│   │   └── deploy.yml          # GitHub Actions — CI validation + GitHub Pages deployment
│   └── PULL_REQUEST_TEMPLATE.md # PR checklist template
├── CONTRIBUTING.md             # Contribution guide — agent workflow, sample prompts, test mandate
├── LICENSE                     # MIT License
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

Please read **[CONTRIBUTING.md](CONTRIBUTING.md)** for the full contribution guide, including:

- 🤖 **Agent-based development workflow** — recommended AI-agent tools and step-by-step process
- 💬 **Sample prompts** for adding comparisons, docs, blog posts, bug fixes, and CI checks
- ✅ **Mandatory pre-PR checklist** — automated validation and browser testing steps that must pass before opening a PR

### Quick start

1. Fork the repository and create a feature branch (`git checkout -b feat/add-bun-comparison`)
2. Use an AI agent with the [sample prompts](CONTRIBUTING.md#sample-prompts-for-code-development) from CONTRIBUTING.md
3. Run the [mandatory validation checks](CONTRIBUTING.md#mandatory-test-run-before-raising-a-pr) locally
4. Open a Pull Request — the CI workflow validates your changes automatically

---

## 📄 License

MIT — see [LICENSE](LICENSE) for the full text.

