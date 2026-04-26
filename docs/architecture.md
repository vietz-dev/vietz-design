# Architecture

## Monorepo structure

```text
.
├── AGENTS.md
├── apps/
│   └── storybook/
├── docs/
│   ├── ai-context.md
│   ├── architecture.md
│   ├── components.md
│   ├── decisions/
│   └── source/
├── packages/
│   └── vietz-design-react/
└── pnpm-workspace.yaml
```

## Package responsibilities

### `packages/vietz-design-react`

Owns the React implementation of the design system.

Responsibilities:

- React component APIs
- Ark UI composition
- design tokens and base CSS
- component styles
- package exports for consumers

### `apps/storybook`

Owns the visual and interactive documentation experience.

Responsibilities:

- documenting component states and examples
- serving as the fastest feedback loop during development
- making current component coverage visible

### `docs/`

Owns AI-readable and human-readable project memory.

Responsibilities:

- architecture overviews
- component inventory
- decision records
- imported design references

## Styling strategy

The initial styling model is plain CSS driven by custom properties.

Why:

- portable across frameworks
- easy for AI agents to inspect
- easy to map from imported design reference CSS
- compatible with Ark UI's data attributes

Structure:

- `src/styles/tokens.css` — design tokens
- `src/styles/base.css` — global typography and utility-like baseline styles
- `src/styles/components/*.css` — component-level styling
- `styles.css` — public aggregate stylesheet entry for consumers

## Component strategy

Interactive components should be built on Ark UI where Ark provides a fitting primitive.

Pattern:

1. use Ark UI for state, accessibility, keyboard handling, and data attributes
2. layer bespoke styling via tokens and CSS
3. expose a React API that feels ergonomic for consumers
4. document the component in Storybook and `docs/components.md`

## Documentation strategy

This repo stores project memory in three places:

- Storybook for visual/component behavior memory
- markdown docs for architectural memory
- ADRs for durable decision memory

## Future expansion

This structure is designed to support additional packages later, for example:

- `packages/vietz-design-vue`
- `packages/vietz-design-solid`
- shared token packaging if framework-neutral distribution becomes necessary
