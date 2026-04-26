# vietz.dev Website UI Kit

Interactive click-through prototype of the vietz.dev personal website.

## Screens
1. **Home / About** — intro, bio, links
2. **Writing (Blog List)** — filterable list of blog posts with cards
3. **Blog Post** — full post reading view with code blocks
4. **Projects** — project cards with tech tags

## Components
- `Nav.jsx` — top navigation + dark mode toggle
- `Footer.jsx` — minimal footer with links
- `BlogCard.jsx` — interactive post card with hover shadow
- `Tag.jsx` — tag-dark and tag-accent variants
- `CodeBlock.jsx` — syntax-highlighted code block

## Usage
Open `index.html` for the interactive prototype.

## Notes
- Built from `src/styles/global.css` in vietz-dev/vietz.dev
- Icons from Lucide CDN
- Fonts: IBM Plex Mono + IBM Plex Sans (Google Fonts)
- Dark mode via `:root.dark` class toggle
