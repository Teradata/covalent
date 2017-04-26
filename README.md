## Covalent-Editor is a Text and Code Editor built on Covalent and Angular Material

[![Build Status](https://travis-ci.org/Teradata/covalent.svg?branch=develop)](https://travis-ci.org/Teradata/covalent)
[![npm version](https://badge.fury.io/js/%40covalent%2Fcore.svg)](https://badge.fury.io/js/%40covalent%2Fcore)
[![Join the chat at https://gitter.im/Teradata/covalent](https://badges.gitter.im/Teradata/covalent.svg)](https://gitter.im/Teradata/covalent?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency Status](https://dependencyci.com/github/Teradata/covalent/badge)](https://dependencyci.com/github/Teradata/covalent)

Covalent is a reusable UI platform from Teradata for building web applications with common standards and tooling. It is based on Angular 2 and Material Design.

Covalent Github Repo: https://github.com/Teradata/covalent

Covalent-Editor is an Angular Component for text and code editing based on Covalent

## Setup

* Ensure you have Node 6.9.1 or up and NPM 3+ installed.
* Install Angular CLI `npm i -g @angular/cli@latest`
* Install Typescript `npm i -g typescript`
* Install TSLint `npm install -g tslint`
* Install Protractor for e2e testing `npm install -g protractor`
* Install Node packages `npm i`
* Update Webdriver `webdriver-manager update` and `./node_modules/.bin/webdriver-manager update`
* Run local build `ng serve` or `ng serve --aot`
* If using yarn locally, `npm rebuild node-sass` is required for https://github.com/yarnpkg/yarn/issues/1981 as of `v0.22.0`

---

* [Contributing Guidelines](docs/CONTRIBUTING.md)