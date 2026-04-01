## Summary

<!-- A short, one-sentence description of what this PR does. -->


## Type of change

<!-- Check all that apply -->

- [ ] ✨ New tech-stack comparison (feat)
- [ ] 📖 New documentation section (feat/docs)
- [ ] ✍️ New blog article (feat)
- [ ] 🐛 Bug fix (fix)
- [ ] 💄 Style / CSS change (style)
- [ ] ♻️ Refactor (refactor)
- [ ] ⚙️ CI / tooling change (chore)
- [ ] 📝 Documentation update (docs)

---

## Changes made

<!-- Describe the files changed and why. Be specific. -->

| File | Change description |
|---|---|
| `index.html` | |
| `docs.html` | |
| `blog.html` | |
| `css/styles.css` | |
| `js/main.js` | |
| Other: | |

---

## Agent-assisted development

<!-- Did you use an AI agent to help write this code? -->

- [ ] Yes — agent used: <!-- e.g. GitHub Copilot, Cursor, Continue, Cody -->
- [ ] No — written manually

If yes, paste the key prompt(s) you used:

```
<!-- Your agent prompt(s) here -->
```

---

## Mandatory pre-PR checklist

> All items must be checked before requesting a review. See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### Automated validation

- [ ] Ran the file-existence and asset-reference checks locally with no errors
- [ ] CI is green (both **Build Site** and **Deploy to Pages** jobs pass on this branch)

### Manual browser testing

- [ ] Verified the change renders correctly at **desktop width (≥ 1280 px)**
- [ ] Verified the change renders correctly at **mobile width (≤ 375 px)**
- [ ] No JavaScript console errors on any affected page
- [ ] No broken internal links or missing assets

### Agent-assisted review (if applicable)

- [ ] Asked the agent to self-review the diff for HTML validity, undefined CSS classes, JS errors, and broken anchors
- [ ] Addressed all issues surfaced by the agent review

### Code quality

- [ ] HTML is valid and all `<img>` elements have `alt` attributes
- [ ] CSS uses existing custom properties (`--var`) for colours; no hardcoded hex values
- [ ] JavaScript uses `const`/`let` only; no `var`
- [ ] No unrelated files modified

---

## Screenshots / recordings

<!-- If your change affects the visual output, add a before/after screenshot or screen recording. -->

| Before | After |
|---|---|
| <!-- paste screenshot --> | <!-- paste screenshot --> |

---

## Related issues / PRs

<!-- Link any related issues: "Closes #123" or "Related to #456" -->

---

## Additional notes

<!-- Anything else reviewers should know. -->
