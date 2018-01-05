# Release Guide for the Platform

## Release

* [Pre Release Checklist](#pre-release-checklist)
* [Start Release](#start-release)
* [Generate Changelog](#generate-changelog)
* [Finish Release](#finish-release) 
* [Publish Release](#publish-release)
* [Post Release Checklist](#post-release-checklist)

#### Pre Release Checklist

1. Notifications need to be updated in the covalent `home` screen.
2. Make sure the `platform` `package.json`s point to the correct versions.
3. `ng serve --aot` works fine.
4. `npm run build:release` works fine.

#### Start Release

Execute `npm run release:start -- [version]` to start the automatic release process. The steps executed are:
  1. Checks out the `master` branch and pulls the latest.
  2. Checks out the `develop` branch.
  3. Executes a typescript linting test.
  4. Executes a sass linting test.
  5. Executes unit tests.
  6. Executes a build release test.
  7. Bumps its version to [version] release

#### Generate Changelog

Execute `npm run generate:changelog` to generate a draft of the changelog with the commits that happened between the last tagged release and the last commit. NOTE: It need to be double checked and modified as needed.

#### Finish Release

Execute `npm run release:finish -- [version]` to finish the release process. The steps executed are:
  1. Adds, commits all changes (changelog changes, bump, etc etc).
  2. Creates new `[version]` tag
  3. Pushes commit and new tag into the repository (`develop`).
  5. Merges `develop` into `master` and pushes changes to repository.
  5. Returns to `develop` branch.

#### Publish Release

Execute `npm run publish:npm` from develop branch to start the automatic publishing process. The steps executed are:
  1. Executes `npm run build:release` process.
  2. Executes `bash scripts/npm-publish` process.

#### Post Release Checklist

1. Deploy to ghpages using `npm run ghpages:deploy`
2. Update release `plnkr` and `stackblitz` if needed
3. Update Covalent Quickstart (or Seed) with small commits to show step by step the upgrade process
4. Update UPGRADE.md as necessary.
5. Throw party~
