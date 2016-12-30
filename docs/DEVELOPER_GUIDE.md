# Developer Guide for the Platform

* [Source Structure](#source-structure)
* [Adding a new platform component](#adding-a-new-platform-component) 
* [Adding a new documentation component](#adding-a-new-documentation-component) 

## Source Structure

The source has two parts, the platform and a documentation app.

```
/src/app - Contains the documentation application
/src/platform - Contains the platform assets 
```

## Adding a new platform module

Add a new directory based on the name to `src/platform/[name]` and it should contain a folder structure that has the following:

* `index.ts` - exports values
* `[name].component.ts` - component source
* `[name].component.html` - component markup
* `[name].component.css` - component css (change extention to scss manually, we want scss files to compile)
* `[name].component.spec.ts` - component unit test
* `package.json` - configurations used for npm to publish it (name[@covalent/name], version, dependencies, etc)
* `README.md` - readme file with documentation for github and npm registry.

## Adding a new documentation component

You can use the `ng generate component components/[name]` and it will generate the new component stub in `src/app/components/[name]`.
