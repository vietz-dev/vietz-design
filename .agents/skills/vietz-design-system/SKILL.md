---
name: vietz-design-system
description: Use this skill when working on the vietz-design repository to understand the current architecture, component inventory, and imported design-system source material before making changes.
user-invocable: true
---

Read these files first:

1. `AGENTS.md`
2. `docs/ai-context.md`
3. `docs/architecture.md`
4. `docs/components.md`
5. latest ADRs in `docs/decisions/`
6. `docs/source/claude-design/README.md`

Rules for this repository:

- use Ark UI for interactive primitives when suitable
- keep React implementation inside `packages/vietz-design-react`
- keep Storybook documentation inside `apps/storybook`
- update `docs/components.md` when component inventory changes
- write a new ADR for meaningful architectural decisions
- treat `docs/source/claude-design/` as source material, not production code
