## Covalent: UI Platform based on Angular-Material

[![Build Status](https://travis-ci.org/Teradata/covalent.svg?branch=develop)](https://travis-ci.org/Teradata/covalent)
[![npm version](https://badge.fury.io/js/%40covalent%2Fcore.svg)](https://badge.fury.io/js/%40covalent%2Fcore)
[![Join the chat at https://gitter.im/Teradata/covalent](https://badges.gitter.im/Teradata/covalent.svg)](https://gitter.im/Teradata/covalent?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency Status](https://dependencyci.com/github/Teradata/covalent/badge)](https://dependencyci.com/github/Teradata/covalent)
[![Coverage Status](https://coveralls.io/repos/github/Teradata/covalent/badge.svg)](https://coveralls.io/github/Teradata/covalent)

<img alt="Covalent" src="https://cdn.rawgit.com/Teradata/covalent/develop/src/app/assets/icons/covalent.svg" width="150">

Covalent is a reusable UI platform from Teradata for building web applications with common standards and tooling. It is based on Angular and Material Design.

**Vision: To build an atomic, reusable component platform for Teradata to consume, while collaborating in an open source model.**

## Setup

* Ensure you have Node 6.11.1 or up and NPM 3+ installed.
* Install Angular CLI `npm i -g @angular/cli@latest`
* Install Typescript `npm i -g typescript`
* Install TSLint `npm install -g tslint`
* Install Protractor for e2e testing `npm install -g protractor`
* Install Node packages `npm i`
* Update Webdriver `webdriver-manager update` and `./node_modules/.bin/webdriver-manager update`
* Run local build `ng serve` or `ng serve --aot`
* If using yarn locally, `npm rebuild node-sass` is required for https://github.com/yarnpkg/yarn/issues/1981 as of `v0.22.0`
---

* [Getting Started](docs/GETTING_STARTED.md)
* [Contributing Guidelines](docs/CONTRIBUTING.md)
* [Developer Guide](docs/DEVELOPER_GUIDE.md)
* [Upgrading](docs/UPGRADE.md)
* [Releasing](docs/RELEASE.md)
* [Changelog](docs/CHANGELOG.md)
* [Quickstart](docs/QUICKSTART.md)
* [StackBlitz Template](https://stackblitz.com/edit/covalent)
* [Plunker Template](http://plnkr.co/edit/7uZQn4mLNJkL6XN9WSNd)
* [Nightly Build Plunker Template](http://plnkr.co/edit/XhSrUWBw2RhCkXPoE4fn)
* [Covalent Electron](https://github.com/Teradata/covalent-electron)
* [Covalent Mock Data Server](https://github.com/Teradata/covalent-data)

---

## Browser Support

Covalent is built on a CSS Flexbox layout and all layouts and components heavily rely up that support, so the current browsers are supported in order or recommendation:

#### Current version - 1 for the following:

|   | Chrome | Firefox | Safari | Edge | Mobile Chrome | Mobile Safari | [IE11](docs/IE11.md)
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| __Supported__ | ✓ | ✓ | ✓ | ✓ | ~ | ~ | ~ |


~ Indicates limited testing & lower priority

[IE11 requirements & best practices](docs/IE11.md)
