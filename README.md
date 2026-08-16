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
- `.changeset/` — Changesets configuration and pending release notes
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

## Releasing

Versioning and publishing are driven by [Changesets](https://changesets.dev).
`packages/vietz-design-react` is published as `@vietz-dev/design-react` to the
GitHub Packages registry of this repository.

Every pull request that changes the package should carry a changeset:

```bash
pnpm changeset
```

Pick the package, pick `patch` / `minor` / `major`, and describe the change.
For changes that need no release (docs, Storybook-only tweaks), use `pnpm changeset --empty`.
CI runs `changeset status` and fails a pull request that changes the package without one.

The rest is automated by `.github/workflows/release.yml`:

1. merging to `main` opens (or updates) a **Version Packages** pull request that applies the
   pending changesets, bumps the version, and writes `CHANGELOG.md`
2. merging that pull request builds the package and publishes it to GitHub Packages,
   creates the git tag, and creates a GitHub release

Publishing uses the workflow's built-in `GITHUB_TOKEN` — no personal access token
or npm token needs to be stored in the repository.

### One-time repository setup

- enable *Settings → Actions → General → Allow GitHub Actions to create and approve pull requests*
- the repository must live under the `vietz-dev` account, because GitHub Packages requires the
  npm scope to match the repository owner

Consuming the package from another project is described in
[`packages/vietz-design-react/README.md`](packages/vietz-design-react/README.md).

## Current status

Initial monorepo scaffold with:

- pnpm workspace
- React package scaffold
- Storybook app scaffold
- imported design reference docs
- AI-facing project docs
- initial implemented components: Accordion, Tag, SurfaceCard, InlineCode
