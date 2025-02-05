# Releases

The release process is fully automated using Semantic Release, ensuring a seamless and efficient workflow. Versions are automatically determined based on the commit history of the new set of changes, allowing for precise and consistent versioning. Each release is tagged and branched using the structure "release/x.x.x", providing clear and organized version tracking. This automation not only saves time but also reduces the potential for human error, making the release process more reliable and streamlined. 

## Beta releases
we support beta releases by pushing code to the "beta" branch, allowing for pre-release testing and feedback before the final version is deployed.

**Note:** Only publish to beta branch with the latest changes from the main branch.

## Triggering a Major Release with Semantic Release
To trigger a major release using Semantic Release, ensure that your commit messages follow the Conventional Commits specification. Specifically, include a `BREAKING CHANGE` note in the commit message footer. For example:

```
feat: add new authentication module

BREAKING CHANGE: The authentication module has been completely redesigned, requiring updates to the login flow.
```

When Semantic Release detects the `BREAKING CHANGE` note, it will automatically increment the major version number and publish a new major release.