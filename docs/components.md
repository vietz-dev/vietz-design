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

### AngleSlider

- package: `@vietz-design/react`
- file: `packages/vietz-design-react/src/components/angle-slider/angle-slider.tsx`
- status: implemented
- basis: Ark UI Angle Slider
- purpose: branded circular input for selecting an angle in degrees
- notable states: markers, stepped selection via Ark UI `step`, disabled, invalid, dark-theme compatible through tokens

### Button

- package: `@vietz-design/react`
- file: `packages/vietz-design-react/src/components/button/button.tsx`
- status: implemented
- basis: native button element (Ark UI does not provide a standalone button primitive)
- purpose: primary and supporting actions for forms and general UI flows
- variants: `primary`, `secondary`, `ghost`
- sizes: `sm`, `md`, `lg`
- notable states: disabled, icon support, full-width layout support, dark-theme compatible through tokens

### Checkbox

- package: `@vietz-design/react`
- file: `packages/vietz-design-react/src/components/checkbox/checkbox.tsx`
- status: implemented
- basis: Ark UI Checkbox
- purpose: branded boolean choice control with optional helper text
- notable states: checked, indeterminate, disabled, dark-theme compatible through tokens

### Field

- package: `@vietz-design/react`
- file: `packages/vietz-design-react/src/components/field/field.tsx`
- status: implemented
- basis: Ark UI Field
- purpose: accessible form-field wrapper for labels, helper text, error text, and required state
- notable states: required, invalid, disabled, read-only through Ark UI field state

### Fieldset

- package: `@vietz-design/react`
- file: `packages/vietz-design-react/src/components/fieldset/fieldset.tsx`
- status: implemented
- basis: Ark UI Fieldset
- purpose: accessible grouping container for related form controls with legend, helper text, and error text
- notable states: disabled, helper text, error text, dark-theme compatible through tokens

### Input

- package: `@vietz-design/react`
- file: `packages/vietz-design-react/src/components/input/input.tsx`
- status: implemented
- basis: Ark UI Field.Input
- purpose: branded single-line text input for form entry
- notable states: placeholder, invalid, disabled, read-only, dark-theme compatible through tokens

### Textarea

- package: `@vietz-design/react`
- file: `packages/vietz-design-react/src/components/textarea/textarea.tsx`
- status: implemented
- basis: Ark UI Field.Textarea
- purpose: branded multiline text input for longer form content
- notable states: invalid, disabled, read-only, resizable, dark-theme compatible through tokens

### RadioGroup

- package: `@vietz-design/react`
- file: `packages/vietz-design-react/src/components/radio-group/radio-group.tsx`
- status: implemented
- basis: Ark UI Radio Group
- purpose: branded single-selection group for mutually exclusive options
- notable states: checked, disabled items, descriptive option text, dark-theme compatible through tokens

### Select

- package: `@vietz-design/react`
- file: `packages/vietz-design-react/src/components/select/select.tsx`
- status: implemented
- basis: Ark UI Select
- purpose: branded single-select input for choosing one option from a list
- notable states: placeholder, open, checked item, invalid, disabled items, dark-theme compatible through tokens

### Switch

- package: `@vietz-design/react`
- file: `packages/vietz-design-react/src/components/switch/switch.tsx`
- status: implemented
- basis: Ark UI Switch
- purpose: branded on/off toggle for immediate preference changes
- notable states: checked, disabled, helper text, dark-theme compatible through tokens

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

- Link
- CodeBlock
- BlogCard / content cards
- Navigation primitives
- Theme toggle
- tags and filters composed into richer patterns

## Update rule

Whenever a component is added, removed, or its API materially changes, update this file.
