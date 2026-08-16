# ADR 0002: Release with Changesets to the GitHub Packages registry

- Status: accepted
- Date: 2026-08-16

## Context

`packages/vietz-design-react` is meant to be consumed by other projects rather than only by the
Storybook app in this repository. That requires a real registry, a versioning scheme, and a
changelog that survives across releases.

Constraints:

- the repository is a pnpm monorepo, and further framework packages are expected later
- releases should not depend on manual version edits or on a maintainer's local machine
- the package is personal infrastructure, so a separate npmjs.com account and token is avoidable
  overhead if the code already lives on GitHub

## Decision

Use [Changesets](https://changesets.dev) for versioning and publishing, and publish to the
GitHub Packages npm registry of this repository.

- intent-based versioning: contributors declare `patch` / `minor` / `major` in a changeset file
  instead of the tooling inferring it from commit messages
- changesets are markdown files in `.changeset/`, so rebasing and squashing stay safe
- `@changesets/changelog-github` generates changelog entries that link back to pull requests
- `privatePackages: { version: false, tag: false }` keeps `apps/storybook` out of the release
- `.github/workflows/release.yml` runs `changesets/action` on pushes to `main`: it opens a
  *Version Packages* pull request, and publishes once that pull request is merged
- `.github/workflows/ci.yml` runs `changeset status` so a pull request touching the package
  without a changeset fails

The package is named `@vietz-dev/design-react`.

## Consequences

### Positive

- releases are reproducible and run entirely in CI
- publishing uses the workflow's built-in `GITHUB_TOKEN`; no npm token or PAT is stored in the repo
- changelog and version history are generated from the same source as the release intent
- adding a second framework package later needs no release-tooling changes

### Trade-offs

- the npm scope is forced to match the repository owner, so the package had to be renamed from
  `@vietz-design/react` to `@vietz-dev/design-react`, and moving the repo to another owner would
  require renaming again
- GitHub Packages requires authentication even for public packages, so every consuming project
  needs an `.npmrc` and a token with `read:packages`
- `changeset version` needs a `GITHUB_TOKEN` in the environment because of the GitHub changelog
  generator, so it is effectively a CI-only command
- contributors must remember to add a changeset; CI enforces this rather than the tooling
  inferring it

## Follow-up implications

- every change to `packages/vietz-design-react` carries a changeset
- versions and `CHANGELOG.md` are never edited by hand
- future framework packages are added to the same workspace and released by the same workflow
