# Developer Guide for the Platform

* [Setup](#setup)
* [Source Structure](#source-structure)
* [Adding a new platform component](#adding-a-new-platform-component) 
* [Adding a new documentation component](#adding-a-new-documentation-component) 

## Setup

* Ensure you have Node 4.4 and NPM 3+ installed.
* Install Angular CLI `npm i -g angular-cli@1.0.0-beta.8`
* Install TSLint and Typescript `npm install -g tslint typescript`
* Install Protractor for e2e testing `npm install -g protractor`
* Install Node packages `npm i`
* Update Webdriver `webdriver-manager update` and `./node_modules/.bin/webdriver-manager update`
* Run local build `ng serve`

## Source Structure

The source has two parts, the platform and a documentation app.

```
/src/app - Contains the documentation application
/src/platform - Contains the platform assets 
```

## Adding a new platform component

Add a new directory based on the name to `src/platform/[name]` and it should contain a folder structure that has the following:

* `index.ts` - exports values
* `[name].component.ts` - component source
* `[name].component.html` - component markup
* `[name].component.css` - component css (change extention to scss manually, we want scss files to compile)
* `[name].component.spec.ts` - component unit test
* `package.json` - configurations used for npm to publish it (name[@covalent/name], version, dependencies, etc)
* `README.md` - readme file with documentation for github and npm registry.

Then you will need to add a path `src/system-config.ts` under the library barrels that points to your new component directory, such as `'platform/[name]',`.

## Adding a new documentation component

You can use the `ng generate component components/[name]` and it will generate the new component stub in `src/app/components/[name]`.
