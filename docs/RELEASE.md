# Release Guide for the Platform

## Release

* [Pre Release Checklist](#pre-release-checklist)
* [Start Release](#start-release)
* [Finish Release](#finish-release) 
* [Publish Release](#publish-release)
* [Post Release Checklist](#post-release-checklist)

#### Pre Release Checklist

1. Changelog needs to be updated with all release features/fixes/enhancements.
2. Notifications need to be updated in the covalent `home` screen.
3. Make sure the `platform` `package.json`s point to the correct versions.
4. `ng serve --aot` works fine.
5. `npm run build` works fine.

#### Start Release

Execute `npm run start-release -- [version]` to start the automatic release process. The steps executed are:
  1. Creating a `release/v[version]` branch using `git flow release`.
  2. Bumping its version to [version] release and commiting bumped version files.
  3. Publishing `release/v[version]` branch into repository. 
  4. Executes `npm run lint` and `npm run test`.

The release is published in case there is a need for any additional tests, version fixes or bug fixes. This can be added before it is actually released.

#### Finish Release

Execute `git flow release finish v[version]` and `npm run finish-release` to finish the release process. The steps executed are:
  1. Finishes, tags and deletes the `release/[version]` branch.
  2. Pushes the new `[version]` tag into the repository.
  3. Merges release into `develop` and pushes changes to repository.
  4. Merges release into `master` and pushes changes to repository.
  5. Returns to `develop` branch.

#### Publish Release

Execute `npm run npm-publish` from develop branch to start the automatic publishing process. The steps executed are:
  1. Executes `npm run build` process.
  2. Executes `bash scripts/npm-publish` process.

#### Post Release Checklist

1. Deploy to ghpages using `npm run ghpages-deploy`
2. Update release `plnkr` (and nightly release `plnkr` if needed)
3. Update Covalent Quickstart (or Seed) with small commits to show step by step the upgrade process
4. Update UPGRADE.md as necessary.
5. Throw party~