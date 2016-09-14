# Release Guide for the Platform

## Release

* [Start Release](#start-release)
* [Finish Release](#finish-release) 

#### Start Release

Execute `npm run start-release -- [version]` to start the automatic release process. The steps executed are:
  1. Creating a `release/v[version]` branch using `git flow release`.
  2. Bumping its version to [version] release and commiting bumped version files.
  3. Publishing `release/v[version]` branch into repository. 
  4. Executes `npm run tslint` and `npm run test`.

The release is published in case there is a need for any additional tests, version fixes or bug fixes. This can be added before it is actually released.

#### Finish Release

Execute `git flow release finish v[version]` and `npm run finish-release` to start the automatic publishing process. The steps executed are:
  1. Finishes, tags and deletes the `release/[version]` branch.
  2. Pushes the new `[version]` tag into the repository.
  3. Merges release into `develop` and pushes changes to repository.
  4. Merges release into `master` and pushes changes to repository.
  5. Executes `npm run build` process from master.
  6. Executes `npm run publish` process from master.
  7. Returns to `develop` branch.
