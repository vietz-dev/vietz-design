# vietz.dev Design System

A personal design system for Justin Vietz — full-stack developer based in Münster, Germany. Built around a warm, functional, developer-centric aesthetic. The system covers the personal website (vietz.dev) and all future applications: todo apps, food counters, AI chat interfaces, and other tools.

**Sources**
- Codebase: `vietz-dev/vietz.dev` (GitHub) — Astro + Tailwind CSS v4
- Global styles: `src/styles/global.css`
- No Figma file provided

---

## Products / Surfaces

| Surface | Description |
|---|---|
| **vietz.dev** | Personal website — blog, projects, about |
| **Future apps** | Todo, food counter, AI chat, misc tools — will use same base system |

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **First person, direct.** Always "I", never "we". The brand is a person, not a company.
- **Casual but precise.** Like a senior dev explaining something to a peer over coffee. Technical when needed, never stuffy.
- **Confident with a wry edge.** "Hell no!" appears in production copy. Opinions are stated, not hedged.
- **Clarity over cleverness.** No jargon for the sake of it. No fluff. Short sentences win.

### Casing
- Title case for page headings (`Writing`, `Projects`, `About`)
- Sentence case for prose and UI labels
- ALL CAPS only in code contexts or technical abbreviations (JWT, TLS, REST)

### Emoji
- **Not used** in copy or UI. Zero emoji in the codebase.
- Unicode characters used functionally (e.g. arrows, punctuation) but not as decoration.

### Example copy excerpts
> "I am a full-stack developer building thoughtful web experiences and practical tools."
> "I care about code quality, clear communication, and building things that last."
> "Ever wondered how a reverse proxy like traefik handles incoming requests? Let's build one."
> "So can I use this in production now? **Hell no!**"
> "This implementation only scratches the surface."

### Writing patterns
- Blog posts open with a question, then immediately answer it
- Code-heavy posts alternate explanation paragraphs with code blocks
- Numbered steps for procedures, prose for context
- No intro padding — get to the point in line 1

---

## VISUAL FOUNDATIONS

### Color System
oklch-based, dual-mode (light/dark). Warm cream/beige backgrounds in light mode; desaturated blue-gray darks in dark mode. Accent is a burnt/rust orange.

**Light mode**
| Token | Value | Description |
|---|---|---|
| `--bg` | `oklch(97% 0.012 85)` | Warm cream page background |
| `--bg-card` | `oklch(98.5% 0.009 85)` | Slightly lighter card surface |
| `--fg` | `oklch(16% 0.01 255)` | Near-black blue-tinted text |
| `--fg-muted` | `oklch(48% 0.01 255)` | Secondary prose text |
| `--fg-faint` | `oklch(65% 0.01 255)` | Meta / timestamps / labels |
| `--border` | `oklch(82% 0.012 85)` | Subtle warm border |
| `--border-strong` | `oklch(70% 0.012 85)` | Card borders, dividers |
| `--accent` | `oklch(52% 0.14 38)` | Rust orange — links, highlights |
| `--accent-bg` | `oklch(94% 0.04 38)` | Tinted bg for inline code, badges |
| `--shadow-hover` | `6px 6px 0 oklch(72% 0.012 85)` | Flat card shadow on hover |
| `--shadow-hover-strong` | `8px 8px 0 oklch(65% 0.016 38)` | Accent-tinted strong shadow |
| `--code-bg` | `oklch(20% 0.01 255)` | Code block background |
| `--code-fg` | `oklch(90% 0.01 255)` | Code block text |
| `--tag-bg` | `oklch(20% 0.01 255)` | Dark tag background |
| `--tag-fg` | `oklch(97% 0.01 255)` | Dark tag text |

**Dark mode** — same token names, shifted to dark blue-gray bg and slightly warmer fgs. Accent brightens to `oklch(70% 0.14 38)`.

### Typography
Two fonts only, both IBM Plex family (Google Fonts):
- **IBM Plex Sans** — body, UI labels, prose
- **IBM Plex Mono** — display titles, headings, tags, meta, code

| Role | Font | Size | Weight | Notes |
|---|---|---|---|---|
| `.page-title` | IBM Plex Mono | clamp(36px, 6vw, 52px) | 700 | letter-spacing -0.02em |
| `.display-title` | IBM Plex Mono | clamp(28px, 5vw, 44px) | 700 | line-height 1.15 |
| Body prose | IBM Plex Sans | 15px | 400 | line-height 1.8 |
| `.muted-meta` | IBM Plex Mono | 13px | 400 | `--fg-faint` |
| `.tag` | IBM Plex Mono | 11px | 400 | letter-spacing 0.08em |
| `h2` in prose | IBM Plex Mono | 20px | 600 | |
| `h3` in prose | IBM Plex Mono | 17px | 600 | |

### Spacing & Layout
- Max content width: `768px`, centered with `padding-inline: 24px`
- Page sections: `padding-top: 56px`, `padding-bottom: 80px`
- Mobile breakpoint: 640px (padding collapses to 18px)

### Cards & Surfaces
- Border: `1.5px solid var(--border-strong)` (warm warm gray)
- Radius: `10px`
- Background: `var(--bg-card)`
- Padding: `20px 24px`
- Hover (interactive cards): `translate(-3px, -3px)` + `var(--shadow-hover-strong)`
- Transition: `0.18s` on transform, box-shadow, color, border-color

### Shadows
No blurred shadows. All shadows are **flat offset** (hard, graphic):
- Default hover: `6px 6px 0 <warm-border-color>`
- Strong hover: `8px 8px 0 <accent-tinted-color>`

### Borders
- Default: 1px or 1.5px, warm gray
- Focus ring: `2px solid var(--accent)`, `outline-offset: 3px`
- Blockquote: `4px solid var(--border-strong)`, left side only

### Animation & Transitions
- Theme toggle: `background 0.3s, color 0.3s`
- Card hover: `0.18s` ease (transform + box-shadow)
- No bounce, no spring. Smooth ease only.
- rough-notation library used for hand-drawn underlines/box highlights

### Hover & Press States
- Interactive cards: lift up-left via `translate(-3px, -3px)` + hard shadow appears
- Links: underline with `text-underline-offset: 3px`; color stays `--fg`
- Buttons/icon buttons: outline focus ring only (no scale/shrink)

### Backgrounds
- Flat `--bg` color (warm cream / dark blue-gray)
- No full-bleed imagery, no textures, no patterns in main UI
- Background SVG asset exists (abstract blob shapes with blue/purple gradients) — used as page decoration at low opacity

### Scrollbar
- 6px wide, pill-shaped thumb (`border-radius: 999px`)
- Track transparent, thumb uses `--border-strong`

### Selection
- `background: var(--accent-bg)`, `color: var(--fg)`

### Corner Radii
- Cards: `10px`
- Tags: `3px`
- Code blocks: `8px`
- Scrollbar thumb: `999px` (pill)
- Focus outline: square (no radius)

### Imagery & Illustrations
- No photography or illustrations in the current site
- No grain, no image filters
- Icons from Lucide (stroke-based, consistent weight) + Simple Icons (brand logos)

---

## ICONOGRAPHY

- **Lucide Icons** — primary icon set. Stroke-based, consistent 1.5–2px stroke weight. Used for UI chrome (nav, buttons, toggles). Available via CDN: `https://unpkg.com/lucide@latest`
- **Simple Icons** — brand/tech logo icons (used on projects/stack pages). SVG-based, flat fill. Available via CDN: `https://cdn.simpleicons.org/{slug}`
- No custom icon font, no PNG icons, no emoji as icons
- Icons are always inline SVG or imported via the `@lucide/astro` / `simple-icons-astro` packages

---

---

## File Index



| File | Description |
|---|---|
| `README.md` | This file — full brand and design documentation |
| `SKILL.md` | AI agent skill entrypoint |
| `colors_and_type.css` | CSS custom properties for colors, typography, spacing |
| `assets/favicon.svg` | Brand favicon (orange blob) |
| `assets/background.svg` | Decorative blob background SVG |
| `preview/` | Visual design system cards (registered in Design System tab) |
| `ui_kits/website/` | Personal website UI kit — blog, projects, about screens |
