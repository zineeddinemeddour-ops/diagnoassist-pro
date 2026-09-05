# DiagnoAssist — frontend-only edition

This is the active GitHub Pages website. It contains a new layout and design
system for all ten original Arabic pages, preserving their existing wording.

The public website is a **frontend demonstration**, not a production clinical
service. There is no backend, server-side authentication, database, email
delivery, payment processing, or multi-device synchronization. Registration,
login and the workflow run in the browser. Password verifiers use salted PBKDF2;
this is not a substitute for real authentication. Demo profiles and records are
stored locally, separated by local account; clearing browser storage removes
them. Do not enter real patient information, reusable passwords, or card details.

Original clinical scoring, sample records, prices, claims and copy were retained
at the owner's request. This redesign does not validate medical accuracy, test
licensing, security claims or regulatory compliance. The checkout only displays
the original demonstration state and does not charge a card or send a receipt.

## Files

- `design.css`: independent emerald-and-white responsive design system.
- `modern.css`, `motion.js`: dimensional surfaces, scroll entrances, pointer
  interaction and reduced-motion support, with no extra libraries.
- `assets/*-3d.webp`: a coordinated family of transparent 3D illustrations made
  with the built-in image-generation tool. The homepage uses nine distinct
  images: brain, shield, heart, speech, stethoscope, comparison, clipboard,
  chart, and folder. Login, registration, and plans use their own semantic icons.
  Exact prompts are recorded in `assets/artwork-prompts.json`. WebP assets are
  optimized to 640 pixels with their alpha preserved.
- `brand.svg`, `icons.svg`: vector identity and consistent line icons.
- `runtime.js`: browser-local state and accessible interactions.
- `auth.js`: browser-local account demonstration.
- `pages/*.js`: original client workflow adapted for local-only state.
- `*.html`: generated pages; edit the source content in `../public/*.html`.
- `content-audit.json`: per-page preserved-word counts from the build.

## Build and check

From the repository root, with Node 22.13 or later:

```sh
node scripts/rebuild-frontend.mjs
node scripts/verify-frontend.mjs
```

No package installation is needed for this frontend. Use an ordinary static
HTTP server for local viewing. GitHub Actions rebuilds, checks and deploys only
this directory. The separate historical Sites/server sources are not included
in the Pages artifact.

Decorative floating motion loops continuously at staggered speeds. The pause
button remembers the visitor's preference. Offscreen artwork and hidden tabs
pause to save resources, then resume when visible. Scroll entrances run once per
section; pointer tilt and card highlights use a fine pointer. All effects respect
the operating system's reduced-motion setting. Content remains visible if
JavaScript or IntersectionObserver is unavailable. Print output is static.

Each workflow card links to its corresponding existing page. FAQ items form an
exclusive accordion, with the first answer open initially; all original answers
remain in the document.

Existing `#` placeholder legal/help links are retained because the original
site did not contain destination pages; no policy content has been invented.
