# Component inventory

This file is the AI-readable inventory of what exists in the design system.

## Foundations

### Tokens

Available through `@vietz-design/react/styles.css`.

Important token groups:

- colors: background, foreground, accent, borders, code, tags
- typography: IBM Plex Sans and IBM Plex Mono families, scale, tracking, line heights
- radii, shadows, layout spacing, focus treatment

### Base styling

Global baseline styles are provided for:

- page/display/body/meta typography roles
- selection styling
- focus-visible outline treatment
- layout helpers like `site-container` and `page-section`

## Implemented React components

### Accordion

- package: `@vietz-design/react`
- file: `packages/vietz-design-react/src/components/accordion/accordion.tsx`
- status: implemented
- basis: Ark UI Accordion
- purpose: disclosure content with branded styling and accessible behavior
- notable states: open, closed, disabled, dark-theme compatible through tokens

### Tag

- package: `@vietz-design/react`
- file: `packages/vietz-design-react/src/components/tag/tag.tsx`
- status: implemented
- purpose: compact metadata or technology label
- variants: `dark`, `accent`

### SurfaceCard

- package: `@vietz-design/react`
- file: `packages/vietz-design-react/src/components/surface-card/surface-card.tsx`
- status: implemented
- purpose: reusable branded card surface
- variants: `static`, `interactive`

### InlineCode

- package: `@vietz-design/react`
- file: `packages/vietz-design-react/src/components/inline-code/inline-code.tsx`
- status: implemented
- purpose: inline code styling aligned with the source design system

## Planned components

These are expected next, based on the imported design reference:

- Button
- Link
- CodeBlock
- BlogCard / content cards
- Navigation primitives
- Theme toggle
- form inputs and textareas
- tags and filters composed into richer patterns

## Update rule

Whenever a component is added, removed, or its API materially changes, update this file.
