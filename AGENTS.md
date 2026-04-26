# AGENTS.md

This repository is intentionally optimized for human and AI collaboration.

## Read before making changes

1. `docs/ai-context.md`
2. `docs/architecture.md`
3. latest ADRs in `docs/decisions/`
4. `docs/source/claude-design/README.md`
5. package-level README files when relevant

## Project rules

- Ark UI is the behavior and accessibility foundation for interactive components.
- `packages/vietz-design-react` is the first implementation target.
- `apps/storybook` is the canonical visual documentation surface.
- Every new component should have:
  - implementation
  - Storybook story/docs entry
  - an entry in `docs/components.md`
  - updates to architecture docs if the pattern changes
- Architectural decisions should be recorded as ADRs in `docs/decisions/`.
- Prefer design tokens and shared CSS over component-local ad hoc styling.
- Keep the React package publishable as an independent package.

## Source of truth hierarchy

1. ADRs in `docs/decisions/`
2. `docs/architecture.md`
3. `docs/components.md`
4. Storybook stories
5. implementation details in code

## When adding a component

1. inspect Ark UI anatomy and state model
2. map the design-system source material into tokens and component styles
3. implement a styled component in `packages/vietz-design-react`
4. add Storybook coverage for states, variants, and accessibility-relevant behaviors
5. update `docs/components.md`
6. add an ADR if the change introduces a new architectural pattern

## Imported design reference

The Claude-generated design reference lives in `docs/source/claude-design/`.
Do not treat it as production code. Use it as source material for tokens, visuals, and component behavior targets.
