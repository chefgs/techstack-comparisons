# Contributing to TechStack Comparisons

Thank you for your interest in contributing! This project uses an **agent-assisted development workflow** to keep code quality high and contributions consistent.

---

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Agent-Based Development Workflow](#agent-based-development-workflow)
3. [Sample Prompts for Code Development](#sample-prompts-for-code-development)
4. [Mandatory Test Run Before Raising a PR](#mandatory-test-run-before-raising-a-pr)
5. [How to Contribute](#how-to-contribute)
6. [Style Guide](#style-guide)
7. [Commit Message Convention](#commit-message-convention)

---

## Code of Conduct

By participating in this project you agree to be respectful, constructive, and inclusive. Harassment or exclusionary behaviour of any kind will not be tolerated.

---

## Agent-Based Development Workflow

All code contributions are **strongly recommended** to follow the agent-based workflow below. Using an AI coding agent (GitHub Copilot, Cursor, Cody, Continue, or similar) reduces manual error, speeds up development, and ensures changes conform to the existing architecture.

### Recommended agent system

Use any of the following agent-enabled environments:

| Tool | How to launch |
|---|---|
| **GitHub Copilot (VS Code / JetBrains)** | Open the Copilot Chat panel → use `@workspace` context |
| **GitHub Copilot Coding Agent** | Open an Issue or PR → assign it to `@copilot` |
| **Cursor** | Open the repo folder in Cursor → use `Ctrl+K` / `Cmd+K` for inline edits |
| **Continue (open-source)** | Install the VS Code extension and configure a model |
| **Cody (Sourcegraph)** | Install the VS Code / JetBrains extension |

### Workflow steps

```
1. Open an issue describing the change you want to make
2. Ask an AI agent to implement the change (see sample prompts below)
3. Review the agent's diff carefully before accepting
4. Run the mandatory validation checks (see below)
5. Open a Pull Request using the PR template
```

> **Why agents?**  
> AI agents help surface edge cases, maintain consistent HTML/CSS structure, and auto-generate test commands — all of which reduce review cycles and maintain project quality.

---

## Sample Prompts for Code Development

Use the prompts below as starting points. Adjust them to match the specific change you are making.

### Adding a new tech-stack comparison

```
@workspace I want to add a comparison of <TechA> vs <TechB> to index.html.
Follow the existing section structure used for "Go vs Python vs Rust".
Add:
- A scoring table with the same columns (performance, safety, ecosystem, learning-curve, enterprise-readiness)
- A bar-chart entry in the benchmark section
- A use-case recommendation paragraph
Also add any required CSS classes to css/styles.css if they do not already exist.
Do NOT remove or modify any existing sections.
```

### Adding a documentation section

```
@workspace Add a new documentation section to docs.html for "<Topic>".
Use the existing section template: h2 heading, introductory paragraph, h3 subsections,
and a .decision-table or .step-list where appropriate.
Follow the dark-theme CSS variable conventions in css/styles.css.
```

### Adding a blog article

```
@workspace Add a new blog article to blog.html titled "<Article Title>".
Follow the existing article template:
- A <div class="article"> with an id, h1, subtitle paragraph, and multiple h2 sections
- A card entry in the #blog-index post list
- A sidebar link in the "All Articles" widget
- Wire up showArticle / showIndex in the article nav footer (see js/main.js)
Keep the prose style consistent with existing articles.
```

### Fixing a UI/UX bug

```
@workspace There is a UI bug: <describe the bug>.
Locate the relevant HTML in index.html / docs.html / blog.html and the CSS in css/styles.css.
Propose the minimal change needed to fix the issue without touching unrelated code.
Explain why the fix works.
```

### Improving accessibility

```
@workspace Audit the <file.html> file for WCAG 2.2 AA accessibility issues.
List each issue with its line number and suggest a minimal fix.
After I approve, apply all fixes in a single diff.
```

### Adding a CI check

```
@workspace I want to add a new automated check to .github/workflows/deploy.yml.
The check should <describe what to verify>.
Follow the existing shell-script style used in the "validate" step.
Ensure the workflow still deploys to GitHub Pages on success.
```

---

## Mandatory Test Run Before Raising a PR

> ⚠️ **No PR will be merged without evidence that the validation checks have passed locally.**

### 1 — Run the built-in validation script

The CI workflow (`deploy.yml`) runs the following checks on every push. Run them locally first:

```bash
# Check required files exist
for f in index.html css/styles.css js/main.js; do
  [ -f "$f" ] || { echo "MISSING: $f"; exit 1; }
done
echo "✅ Required files present"

# Check asset references in index.html resolve to real files
missing_assets=0
while read -r asset; do
  if [ ! -f "$asset" ]; then
    echo "❌ Missing asset: $asset"
    missing_assets=1
  fi
done < <(grep -oP '(?<=href="|src=")[^"]+' index.html | grep -v '^http')

if [ "$missing_assets" -ne 0 ]; then
  echo "❌ Asset reference check failed"
  exit 1
fi
echo "✅ Asset references checked"
```

Run from the repository root. Both checks must pass with no errors.

### 2 — Test with a local server

```bash
# Python (no install required)
python3 -m http.server 8080

# Node.js
npx serve .
```

Open **http://localhost:8080** and manually verify:

- [ ] All tabs/pages load without console errors
- [ ] Your new/changed section renders correctly at desktop (1280 px) and mobile (375 px) widths
- [ ] No broken links or missing images

### 3 — Run agent-assisted validation (recommended)

If you used an agent to write the code, use it to validate as well:

```
@workspace Run a self-review of the diff I just created.
Check for:
- HTML validity (unclosed tags, missing alt attributes)
- CSS class names that are referenced in HTML but not defined in styles.css
- JavaScript errors in main.js (undefined variables, missing event listeners)
- Broken internal anchor links
Report any issues found.
```

### 4 — Push and watch CI

After pushing your branch, go to **Actions → Deploy to GitHub Pages** and confirm both the **Build Site** and **Deploy to Pages** jobs are green before requesting a review.

---

## How to Contribute

### Adding a new comparison

1. Fork the repository and create a feature branch:
   ```bash
   git checkout -b feat/add-<technology>-comparison
   ```
2. Edit `index.html` — add a new `<section>` or extend an existing one.
3. Add corresponding styles in `css/styles.css` if needed.
4. Run the mandatory checks above.
5. Open a Pull Request using the provided template.

### Adding documentation

1. Edit `docs.html` — add new sections or expand existing topics.
2. Follow the existing section structure (`h2` for major sections, `h3` for subsections).
3. Use the established CSS classes: `.note`, `.warn`, `.danger`, `.decision-table`, `.step-list`.

### Adding blog posts

1. Edit `blog.html` — add a new article `<div>` following the existing article template.
2. Add a card for it in the blog index (`#blog-index`) post list.
3. Add a sidebar link in the "All Articles" widget.
4. Wire up the `showArticle` / `showIndex` navigation in the article's nav footer.

### Suggested future additions

- [ ] Bun vs Node.js vs Deno runtime comparison
- [ ] Database comparisons (PostgreSQL vs MySQL vs SQLite vs MongoDB)
- [ ] Container & orchestration (Docker vs Podman, Kubernetes vs Nomad)
- [ ] Cloud provider comparison (AWS vs GCP vs Azure)
- [ ] Mobile frameworks (React Native vs Flutter vs Expo)
- [ ] Testing framework comparisons
- [ ] Blog: Choosing a database for enterprise applications
- [ ] Docs: Kubernetes deployment patterns for polyglot microservices

---

## Style Guide

| Area | Convention |
|---|---|
| **HTML** | 2-space indentation, semantic elements, `alt` on every `<img>` |
| **CSS** | CSS custom properties (`--var`) for all colours; BEM-like class names |
| **JavaScript** | Vanilla ES6+; no frameworks or bundlers; `const`/`let` only |
| **Prose** | Active voice, present tense, UK/US neutral spelling |

---

## Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short summary>

[optional body]
[optional footer]
```

| Type | When to use |
|---|---|
| `feat` | New comparison, article, or documentation section |
| `fix` | Bug fix in HTML, CSS, or JS |
| `docs` | Changes to README, CONTRIBUTING, or inline comments |
| `style` | Formatting, whitespace, CSS-only changes |
| `chore` | CI/CD, tooling, dependency changes |
| `refactor` | Code restructuring with no functional change |

**Examples:**

```
feat(index): add Bun vs Node.js runtime comparison
fix(css): correct mobile nav overflow on small screens
docs(contributing): add agent workflow sample prompts
chore(ci): pin ubuntu-latest to ubuntu-24.04
```

---

*Questions? Open a [GitHub Discussion](https://github.com/chefgs/techstack-comparisons/discussions) or drop a comment on an existing issue.*
