# AI context

## What this repository is

`vietz-design` is a monorepo for a reusable design system based on Justin Vietz's personal brand and UI language.

The design system should:

- work across multiple projects
- begin with a React implementation
- rely on Ark UI for accessible, headless behavior
- keep styling bespoke and portable
- be easy for AI agents to inspect, extend, and reason about

## Current package map

- `packages/vietz-design-react`: React component library package
- `apps/storybook`: Storybook documentation and preview app
- `docs/source/claude-design`: imported source material from the Claude design ZIP

## Architectural intent

- separate framework-specific packages from shared documentation and source material
- keep tokens and component CSS explicit and readable
- colocate React component code with stories where it improves discoverability
- use Storybook as the visual contract for implemented components
- use markdown docs as the AI-readable contract for decisions and inventory

## Current implementation status

Implemented foundations:

- global tokens and base styles
- React package structure
- Storybook structure

Implemented components:

- `Accordion` — Ark UI based
- `Button`
- `Field` — Ark UI based
- `Input` — Ark UI Field based
- `Textarea` — Ark UI Field based
- `Tag`
- `SurfaceCard`
- `InlineCode`

Planned next areas:

- buttons and links
- additional form controls
- navigation primitives
- code blocks
- cards specific to content/project/blog usage
- theming ergonomics and packaging improvements

## How to keep this repo AI-friendly

When you change the repo:

- update `docs/components.md` when component APIs or availability change
- update `docs/architecture.md` when folder structure or cross-package patterns change
- add an ADR for meaningful architectural decisions
- prefer descriptive file names and explicit exports
- keep styles token-driven
