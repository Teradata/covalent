## Covalent: UI Platform based on Angular-Material

[![Covalent CI](https://github.com/teradata/covalent/actions/workflows/ci.yml/badge.svg)](https://github.com/teradata/covalent/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/%40covalent/core.svg)](https://www.npmjs.com/package/@covalent/core)
[![npm](https://img.shields.io/npm/v/%40covalent/core/next.svg)](https://www.npmjs.com/package/@covalent/core/v/next)
[![Join the chat at https://gitter.im/Teradata/covalent](https://badges.gitter.im/Teradata/covalent.svg)](https://gitter.im/Teradata/covalent?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![npm](https://img.shields.io/npm/l/@covalent/core.svg)](LICENSE)

<img alt="Covalent" src="https://gitcdn.link/repo/Teradata/covalent/develop/src/assets/icons/covalent.svg" width="150">

Covalent is a reusable UI platform from Teradata for building web applications with common standards and tooling. It is based on Angular and Material Design.

**Vision: To build an atomic, reusable component platform for Teradata to consume, while collaborating in an open source model.**

## Setup

* Ensure you have Node 12.20.x+ and NPM 6+ installed.
* Install Angular CLI `npm i -g @angular/cli`
* Install Typescript `npm i -g typescript`
* Install Node packages `npm ci`
* Run local build `npm run start`
---

* [Getting Started](docs/GETTING_STARTED.md)
* [Contributing Guidelines](docs/CONTRIBUTING.md)
* [Developer Guide](docs/DEVELOPER_GUIDE.md)
* [Upgrading](docs/UPGRADE.md)
* [Releasing](docs/RELEASE.md)
* [Changelog](docs/CHANGELOG.md)
* [StackBlitz Template](https://stackblitz.com/edit/covalent)
* [Plunker Template](http://plnkr.co/edit/XhSrUWBw2RhCkXPoE4fn)

---

## Angular Support

Certain covalent version are meant for certain angular versions, and here is the matrix:

| Covalent | Angular |
|:---:|:---:|
| 2.X | 8.X |
| 3.X | 9.X / 10.X / 11.x |
| 4.X | 12.X / 13.X |
| Future / Nightly | 13.X |

## Browser Support

Covalent is built on a CSS Flexbox layout and all layouts and components heavily rely up that support, so the current browsers are supported in order or recommendation:

#### Current version - 1 for the following:

|   | Chrome | Firefox | Safari | Edge | Mobile Chrome | Mobile Safari
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| __Supported__ | ✓ | ✓ | ✓ | ✓ | ~ | ~ |


~ Indicates limited testing & lower priority
