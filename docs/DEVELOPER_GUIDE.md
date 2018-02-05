# Developer Guide for the Platform

* [Source Structure](#source-structure)
* [Adding a new platform feature (component/module/utility)](#adding-a-new-platform-feature-componentmoduleutility) 
* [Adding a new documentation component](#adding-a-new-documentation-component) 

## Source Structure

The source has two parts, the platform and a documentation app.

```
/src/app - Contains the documentation application
/src/platform - Contains the platform assets 
```

## Adding a new platform feature (component/module/utility)

Covalent uses [ng-packagr](https://github.com/dherges/ng-packagr) to package the Angular based library for distribution. The format we use follows ng-packagr's conventions. We recommend reading ng-packagr [README](https://github.com/dherges/ng-packagr/blob/master/README.md#secondary-entry-points) to get a brief understanding of primary and secondary entry points before continuing. 

**Note:** 

  There some caveats with ng-packagr at the time of this writing, one involving inter-dependency support, it is actively being worked on at the time of this writing [here](https://github.com/dherges/ng-packagr/pull/419). There is currently a build script work around mentioned below, that resolves this caveat.

  The instructions provided are for creating a **standalone** feature with 1 primary entry point associated with 1 or more secondary entry points (repeat as necessary for additional secondary entry point association to a primary). The definition of **standalone** in this case means that the new feature your creating does not use/import relative inter-dependencies (AKA files in the new feature do not relatively import another feature in the same root project EX: `import { xxx } from './../other-internal-feature-path'`). By creating a **standalone** feature you won't run into the inter-dependency caveat noted above. If you do need to relay on relative inter-dependencies right now before this [PR](https://github.com/dherges/ng-packagr/pull/419) is resolved you might have to modify the build script's current workaround, depending on the inter-dependencies your new feature relies on, let's briefly explore that next, you can skip the next section if your not using inter-dependencies in your feature. 

  The current build script work around supports a few inter-dependencies. (1) the inter-dependency of `import { ** } from '@covalent/core/common';` for files in `./src/platform/core/**/*` is supported. (2) inter-dependencies from `import { ** } from '@covalent/core/**/*';` for files in any of the other primary or secondary entry points `./src/platform/**/*` except in `./src/platform/core/**/*` is supported, with respect to (1). If you are interested in creating a feature that does have internal interdependencies that are not currently supported out of the box you can checkout the workaround [here](https://github.com/Teradata/covalent/blob/develop/scripts/build-release) it is well commented in the build script. Wanted to note again that this work around will not be necessary in the future once this ng-packangr [PR](https://github.com/dherges/ng-packagr/pull/419) resolves the problem. 

* **Instructions: Create A Standalone Feature** 
    * Create Feature's **Primary** Entry Point
        1. Add a new directory `./src/platform/[my-primary-entry-name]` (EX: `@covalent/core`)
           1. Add a file named `ng-package.js` with the content below. Make sure to replace `[my-primary-entry-name]` respectively.
              ```
              let ngPackageSettings = require('../ng-package-common.js');
              ngPackageSettings["dest"] = "../../../deploy/platform/[my-primary-entry-name]"
              module.exports = ngPackageSettings;

              ```
           1. Add a file named `index.ts` with the content below.
              ```
              export * from './public-api';
              ```
           2. Add a file named `public-api.ts`, this is where you choose what parts of your feature you want to expose publicly for developers to use when they access your features **primary** entry point, `import { ** } from '@covalent/[my-primary-entry-name]'`. Explore `./src/core/public-api.ts` `import { ** } from '@covalent/core'` for examples.
           3. Add a file named `package.json` with the content below. Make sure to replace `[my-primary-entry-name]` respectively, provide a version, provide a description, and make any other necessary changes that fit your use case.
              ```
              {
                "name": "@covalent/[my-primary-entry-name]",
                "version": "",
                "description": "",
                "keywords": [
                ],
                "scripts": {
                },
                "repository": {
                  "type": "git",
                  "url": "https://github.com/teradata/covalent.git"
                },
                "bugs": {
                  "url": "https://github.com/teradata/covalent/issues"
                },
                "license": "MIT",
                "author": "Teradata UX",
                "contributors": [
                ],
                "dependencies": {
                },
                "peerDependencies": {
                }
              }

              ```
            4. Add a file named `README.md`. Supply it with content that fit your use case.
            5. Add a file named `tsconfig.json` with the content below. Make sure to replace `[my-primary-entry-name]` respectively. This is for the IDE's intellisense detection of your secondary entry points, if used as inter-dependencies between each other, respective of the parent primary entry point. If you are relying on inter-dependencies between other primary entry points you will also add their `paths` here for intellisense purposes, see `./src/platform/dynamic-forms/tsconfig.json` for example as it is relying on `@covalent/core/**/*` as an inter-dependency.
                ```
                {
                  "extends": "../../tsconfig.app.json",
                  "compilerOptions": {
                    "rootDir": ".",
                    "baseUrl": ".",
                    "paths": {
                      "@covalent/[my-primary-entry-name]/*": ["./*"]
                    }
                  },
                  "include": ["./**/*.ts"]
                }
                ```
      2. Modify the root projects `./tsconfig.json` `paths: ` property to contain your features new primary entry point like below. Make sure to replace `[my-primary-entry-name]` respectively. This is for the IDE's intellisense detection of your new feature's primary entry point, if used as an inter-dependency inside other primary or secondary entry point.
          ```
          ...
          "paths": {
            ...
            "@covalent/[my-primary-entry-name]": ["./platform/[my-primary-entry-name]"]
          },
          ...
          ```
      3. You just finished setting up the structure for your new feature's **primary** entry point to be properly included into the Covalent build! Now you can focus on creating your feature. Make sure to export your feature's public api in the primary entry point's `public-api.ts` file as you develop it.

    * Create Feature's **Secondary** Entry Point
        1. Add a new directory `./src/platform/[my-primary-entry-name]/[my-secondary-entry-name]` (EX: `@covalent/core/data-table`)
          1. Add a new file `package.json` with the minimum content below. If this secondary entry point uses any inter-dependencies you will have to add those inter-dependencies to the `umdModuleIds` see `./src/platform/core/data-table/package.json` as an example. You can also reference the `umdModuleIds` in `./src/platform/ng-package-common.js`.
              ```
              {
                "ngPackage": {
                  "lib": {
                    "entryFile": "index.ts",
                    "umdModuleIds": {
                    }
                  }
                }
              }

              ```
          2. Add a file named `index.ts` with the content below.
              ```
              export * from './public-api';
              ```
          3. Add a file named `public-api.ts`, this is where you choose what parts of your feature you want to expose publicly for developers to use when they access your features **secondary** entry point, `import { ** } from '@covalent/[my-primary-entry-name]/[my-secondary-entry-name]'`. Explore `.src/core/data-table/public-api.ts` `import { ** } from '@covalent/core/data-table'` for examples.
          4. Add a file named `README.md`. Supply it with content that fit your use case.
          3. Modify the root projects `./tsconfig.json` `paths: ` property to contain your features new secondary entry point like below. Make sure to replace `[my-primary-entry-name]` respectively. This is for the IDE's intellisense detection of your new feature's secondary entry point, if used as an inter-dependency inside other primary or secondary entry point.
              ```
              ...
              "paths": {
                ...
                "@covalent/[my-primary-entry-name]/*": ["./platform/[my-primary-entry-name]/*"]
              },
              ...
              ```
          5. You just finished setting up the structure for your new feature's **secondary** entry point to be properly included into the Covalent build! Now you can focus on creating your feature. Make sure to export your feature's public api in the primary and secondary entry point's `public-api.ts` file as you develop it. 


 
## Adding a new documentation component

You can use the `ng generate component components/[name]` and it will generate the new component stub in `src/app/components/[name]`.
