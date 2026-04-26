# vietz-design

Design-system monorepo for Justin Vietz's component library.

## Goals

- build a reusable design system that can be adapted across multiple projects
- use Ark UI as the headless accessibility and behavior layer
- start with React, while keeping room for future framework packages
- document architecture and design decisions so future AI sessions can understand the repo quickly
- document every component in Storybook

## Workspace layout

- `packages/vietz-design-react` — React component package
- `apps/storybook` — Storybook app that documents and previews the component library
- `docs/` — architecture, AI context, ADRs, and imported design references
- `.agents/skills/vietz-design-system` — project skill for AI-assisted work in this repo

## Documentation map

Start here when working with the repo:

1. `AGENTS.md`
2. `docs/ai-context.md`
3. `docs/architecture.md`
4. `docs/decisions/0001-monorepo-react-storybook.md`
5. `docs/source/claude-design/README.md`

## Source material

The original Claude-generated design-system ZIP is treated as source input. Its useful files were extracted into `docs/source/claude-design/`.
The raw archive was moved to `docs/source/raw/vietz-design-system.zip` and is ignored via `.gitignore`.

## Planned workflow

1. refine tokens from the imported design reference
2. implement React components on top of Ark UI
3. document each component in Storybook and in the AI-readable catalog
4. add more framework packages later if needed

## Getting started

```bash
pnpm install
pnpm dev:storybook
```

## Current status

Initial monorepo scaffold with:

- pnpm workspace
- React package scaffold
- Storybook app scaffold
- imported design reference docs
- AI-facing project docs
- initial implemented components: Accordion, Tag, SurfaceCard, InlineCode
