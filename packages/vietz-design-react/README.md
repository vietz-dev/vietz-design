# @vietz-dev/design-react

React implementation of the vietz-design design system.

## Install

This package is published to the **GitHub Packages** registry of
[`vietz-dev/vietz-design`](https://github.com/vietz-dev/vietz-design), not to npmjs.com.
GitHub Packages requires authentication even for public packages, so a consuming project
needs an `.npmrc` that points the `@vietz-dev` scope at the registry:

```ini
@vietz-dev:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

`GITHUB_TOKEN` must be a personal access token with the `read:packages` scope
(in GitHub Actions, `secrets.GITHUB_TOKEN` works as long as the job has `packages: read`).

```bash
pnpm add @vietz-dev/design-react @ark-ui/react
```

## Usage

```tsx
import '@vietz-dev/design-react/styles.css'
import { Accordion, AngleSlider, Button, Checkbox, Field, Fieldset, Input, RadioGroup, Select, Switch, Tag, SurfaceCard, Textarea, ToastRegion, createToaster } from '@vietz-dev/design-react'
```

## Included today

- Accordion
- AngleSlider
- Button
- Checkbox
- Field
- Fieldset
- Input
- RadioGroup
- Select
- Switch
- Textarea
- ToastRegion
- Tag
- SurfaceCard
- InlineCode
- design tokens and base styles

See the workspace Storybook app for visual documentation.
