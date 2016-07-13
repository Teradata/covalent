# Release Guide for the Platform
* [Manual Release](#manual-release)
* [Automatic Release](#automatic-release)

## Manual Release

* [Testing](#testing)
* [Bump Version](#bump-version)
* [Build](#build) 
* [Release](#release) 

#### Testing

Ensure that the code passes all tests before continuing.  
Execute `npm test` to test the code with `tslint` and `karma`, provided the code has `[name].component.spec.ts` unit test files.

#### Bump Version

First, double check what kind of release is going to be published. It varies if its a `dev`, `patch`, `minor`, `major` or `[version]` release.  
Execute `npm run bump-[dev|patch|minor|major]` to bump the release or execute `gulp bump-version --ver [version]`.   
NOTE: Caution when using this command, since it will change the version on every module's package.json within `src/platform`.

#### Build

The building process has 4 steps:
  1. Removes `deploy/` dir so that we guarantee there are no stale artifacts.
  2. Compiles `.ts` files within `src/platform/*`, and creates compiled files into `deploy/`. (retaining dir structure)
  3. Compiles `.scss` files within `src/platform/*`, and creates compiled files into `deploy/`. (retaining dir structure)
  4. Moves `package.json`, `README.md`, additional `.js` files and `.html` files into `deploy/`. (retaining dir structure)  
  
Execute `npm run build` to build the code you want to release.

#### Release

Execute `npm run publish` to publish to NPM. At the moment it goes into every package within `deploy/platform` that has a `package.json` file and publishes into [public NPM registry](https://www.npmjs.com/).  
It will fail to publish if you try to upload a version that already exists in the registry. Use wisely.

NOTE: Tagging version and merging to master/develop would have to be done manually.

## Automatic Release

* [Start Release](#start-release)
* [Finish Release](#finish-release) 

#### Start Release

Execute `npm run start-release -- [version]` to start the automatic release process. The steps executed are:
  1. Creating a `release/[version]` branch using `git flow release`.
  2. Bumping its version to [version] release and commiting bumped version files.
  3. Publishing `release/[version]` branch into repository. 
  4. Executes `npm run test`.

The release is published in case there is a need for any additional tests, version fixes or bug fixes. This can be added before it is actually released.

#### Finish Release

Execute `npm run finish-release -- [version]` to start the automatic publishing process. The steps executed are:
  1. Finishes, tags and deletes the `release/[version]` branch.
  2. Pushes the new `[version]` tag into the repository.
  3. Merges release into `develop` and pushes changes to repository.
  4. Merges release into `master` and pushes changes to repository.
  5. Executes `npm run build` process from master.
  6. Executes `npm run publish` process from master.
  7. Returns to `develop` branch.
