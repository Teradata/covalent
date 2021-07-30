## Covalent: UI Platform based on Angular-Material

[![Covalent CI](https://github.com/teradata/covalent/actions/workflows/ci.yml/badge.svg)](https://github.com/teradata/covalent/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/%40covalent/core.svg)](https://www.npmjs.com/package/@covalent/core)
[![npm](https://img.shields.io/npm/v/%40covalent/core/next.svg)](https://www.npmjs.com/package/@covalent/core/v/next)
[![Join the chat at https://gitter.im/Teradata/covalent](https://badges.gitter.im/Teradata/covalent.svg)](https://gitter.im/Teradata/covalent?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Coverage Status](https://coveralls.io/repos/github/Teradata/covalent/badge.svg)](https://coveralls.io/github/Teradata/covalent)
[![npm](https://img.shields.io/npm/l/@covalent/core.svg)](LICENSE)

<img alt="Covalent" src="https://gitcdn.link/repo/Teradata/covalent/develop/src/assets/icons/covalent.svg" width="150">

Covalent is a reusable UI platform from Teradata for building web applications with common standards and tooling. It is based on Angular and Material Design.

**Vision: To build an atomic, reusable component platform for Teradata to consume, while collaborating in an open source model.**

## Setup

* Ensure you have Node 8.9.4+ and NPM 5+ installed.
* Install Angular CLI `npm i -g @angular/cli`
* Install Typescript `npm i -g typescript`
* Install TSLint `npm install -g tslint`
* Install Protractor for e2e testing `npm install -g protractor`
* Install Node packages `npm ci`
* Run local build `npm run serve` or `npm run serve:prod`
---

* [Getting Started](docs/GETTING_STARTED.md)
* [Contributing Guidelines](docs/CONTRIBUTING.md)
* [Developer Guide](docs/DEVELOPER_GUIDE.md)
* [Upgrading](docs/UPGRADE.md)
* [Releasing](docs/RELEASE.md)
* [Changelog](docs/CHANGELOG.md)
* [StackBlitz Template](https://stackblitz.com/edit/covalent)
* [Plunker Template](http://plnkr.co/edit/XhSrUWBw2RhCkXPoE4fn)
* [Covalent Electron](https://github.com/Teradata/covalent-electron)
* [Covalent Mock Data Server](https://github.com/Teradata/covalent-data)

---

## Angular Support

Certain covalent version are meant for certain angular versions, and here is the matrix:

| Covalent | Angular
|:---:|:---:|
| 2.X | 8.X |
| 3.X | 9.X / 10.X / 11.x |
| Future / Nightly | 11.X |

## Browser Support

Covalent is built on a CSS Flexbox layout and all layouts and components heavily rely up that support, so the current browsers are supported in order or recommendation:

#### Current version - 1 for the following:

|   | Chrome | Firefox | Safari | Edge | Mobile Chrome | Mobile Safari | [IE11](docs/IE11.md)
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| __Supported__ | ✓ | ✓ | ✓ | ✓ | ~ | ~ | ~ |


~ Indicates limited testing & lower priority

[IE11 requirements & best practices](docs/IE11.md)
