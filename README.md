## Covalent Design System

[![Covalent CI](https://github.com/teradata/covalent/actions/workflows/ci.yml/badge.svg)](https://github.com/teradata/covalent/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/%40covalent/core.svg)](https://www.npmjs.com/package/@covalent/core)
[![npm](https://img.shields.io/npm/v/%40covalent/core/next.svg)](https://www.npmjs.com/package/@covalent/core/v/next)
[![Join the chat at https://gitter.im/Teradata/covalent](https://badges.gitter.im/Teradata/covalent.svg)](https://gitter.im/Teradata/covalent?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![npm](https://img.shields.io/npm/l/@covalent/core.svg)](LICENSE)

<img alt="Covalent" src="https://raw.githubusercontent.com/Teradata/covalent/main/apps/docs-app/src/assets/icons/covalent.svg" width="150">

Covalent is Teradata's design system used to create Teradata branded experiences. This space is intended to be used to support developers creating coded experiences for Teradata products. Currently we are only supporting angular and a library of web components.

**Vision: To build an atomic, reusable component platform for Teradata to consume, while collaborating in an open source model.**

## Setup

- Ensure you have Node 22.16.0+
- Install Node packages `npm ci`
- Run local build `npm run start`

---

- [Web Components](docs/COMPONENTS_QUICKSTART.md)
- [Web Components theming](docs/COMPONENTS_DEVELOPER_GUIDE.md)
- [Web Components developer Guide](docs/COMPONENTS_DEVELOPER_GUIDE.md)
- [Contributing guidelines](docs/CONTRIBUTING.md)
- [Releasing](docs/RELEASE.md)
- [Changelog](docs/CHANGELOG.md)

---

## Angular Support

- [Getting Started](docs/GETTING_STARTED.md)
- [StackBlitz Template](https://stackblitz.com/edit/covalent)
- [Plunker Template](http://plnkr.co/edit/XhSrUWBw2RhCkXPoE4fn)

Certain versions of Covalent are designed to work with specific versions of Angular. Below is a matrix that outlines these compatibility details:

| Covalent |      Angular      |
| :------: | :---------------: |
|   2.X    |        8.X        |
|   3.X    | 9.X / 10.X / 11.x |
|   4.X    |    12.X / 13.X    |
|   5.X    |       14.X        |
|   6.X    |       15.X        |
|   7.X    |       16.X        |
|   8.X    |       17.X        |
|   9.X    |       18.X        |
|   10.X   |       19.X        |
|   11.X   |       20.X        |

...existing code...

---

## Angular Support

...existing code...

| 11.X | 20.X |

---

---

## Browser Support

Covalent is built on a CSS Flexbox layout and all layouts and components heavily rely up that support, so the current browsers are supported in order or recommendation:

#### Current version - 1 for the following:

|               | Chrome | Firefox | Safari | Edge | Mobile Chrome | Mobile Safari |
| ------------- | :----: | :-----: | :----: | :--: | :-----------: | :-----------: |
| **Supported** |   ✓    |    ✓    |   ✓    |  ✓   |       ~       |       ~       |

~ Indicates limited testing & lower priority

## Using this workspace with VS code and NX

- Covalent uses [Nx](https://nx.dev/) for monorepo builds and task running.
- For a better experience, install the [Nx Console extension for VS Code](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console).
- **Nx Console** lets you:
  - Run builds, tests, lint, and affected commands with a click.
  - Generate libraries, components, and schematics interactively.
  - Explore project/dependency graphs visually.
  - Edit workspace configs quickly.
- **Get started:**
  1. Open the repo in VS Code.
  2. Install Nx Console from the Extensions Marketplace.
  3. Use the Nx Console sidebar or search Nx commands in the Command Palette (`Cmd+Shift+P`).

## Running Chromatic

`npx chromatic --project-token=${CHROMATIC_PROJECT_TOKEN}`
