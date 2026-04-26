# ADR 0001: Use a pnpm monorepo with a dedicated React package and Storybook app

- Status: accepted
- Date: 2026-04-26

## Context

This repository starts from an empty project and needs to become the home for a reusable design system.

The design system should:

- start with React
- remain open to future framework packages
- use Ark UI for headless interactive behavior
- preserve project memory for future AI sessions
- document components visually

## Decision

We will use:

- a `pnpm` workspace monorepo
- `packages/vietz-design-react` as the first publishable framework package
- `apps/storybook` as the documentation and preview application
- `docs/` for AI-readable architecture and decision memory

## Consequences

### Positive

- easy to add future framework packages without restructuring the repo
- Storybook stays isolated from the published package
- package boundaries remain clear for publishing and testing
- architecture and decisions have a durable home for AI-assisted work

### Trade-offs

- slightly more setup than a single-package repo
- Storybook and package dependencies must be coordinated across workspaces
- cross-package scripts require workspace-aware commands

## Follow-up implications

- all new components should be implemented in `packages/vietz-design-react`
- all new visual docs should appear in `apps/storybook`
- all important architectural changes should be recorded in new ADRs
