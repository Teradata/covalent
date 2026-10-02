# Covalent icons

## Provenance and legal review

Every SVG must have a matching entry under `icons` in `icons.manifest.json`.
Use the SVG path relative to this directory as the key, for example
`svgs/sample.svg`. Outlined and filled variants are separate files and require
separate entries.

Use these value rules consistently:

- Use a string only for a verified value.
- Use `null` when a string value is not known or does not exist. Do not use an
  empty string, `false`, or a placeholder such as `TBD`.
- Use `true` or `false` for `is3rdParty` only after ownership has been
  confirmed. (Using `null` right now while it is unknown).

The current entries marked `is3rdParty: false` are a provisional first-party
prefill. A spreadsheet still needs to be created and presented to the Design
team to confirm that these icons are owned by Teradata and are not third-party
assets. Until that review is complete, an `approved` verdict with the note
`Needs confirmation by the Design team.` and `verdictAuthor` set to
`ProvisionalAuthor` must not be treated as final Design or Legal/OSS approval.

### Manifest fields

| Field                | Value                      | Meaning                                                                                                                                                                   |
| -------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `figmaUrl`           | URL or `null`              | Direct link to the Figma component or node.                                                                                                                               |
| `sourceUrl`          | URL or `null`              | Authoritative location where the original artwork was published or obtained. For third-party icons, it must point to the authoritative external source.                   |
| `retrievedOn`        | Date                       | Date formatted as `YYYY-MM-DD`. Existing entries use the repository introduction commit date as a provisional proxy because the original retrieval date was not recorded. |
| `originalAuthor`     | String or `null`           | Original creator of the artwork. May remain `null` when Legal/OSS confirms that the creator cannot be determined.                                                         |
| `copyrightHolder`    | String or `null`           | Person or organization that owns the artwork copyright. Required for third-party icons.                                                                                   |
| `prUrl`              | URL or `null`              | Pull request that introduced the SVG to this repository.                                                                                                                  |
| `commitHash`         | String                     | Commit that introduced the SVG to this repository.                                                                                                                        |
| `commitAuthor`       | String                     | Author of that commit                                                                                                                                                     |
| `is3rdParty`         | `true`, `false`, or `null` | Whether the artwork is owned by a party other than Teradata. `null` means ownership has not been confirmed.                                                               |
| `license`            | SPDX identifier or `null`  | Copyright license for the original artwork. Prefer identifiers such as `MIT`, `Apache-2.0`, `CC-BY-4.0`, `CC-BY-SA-4.0`, `CC0-1.0`, or `OFL-1.1`.                         |
| `licenseUrl`         | URL or `null`              | Authoritative page or file containing the applicable license.                                                                                                             |
| `copyrightUrl`       | URL or `null`              | Authoritative copyright notice for the original artwork.                                                                                                                  |
| `trademarkUrl`       | URL or `null`              | Authoritative trademark notice for the represented brand.                                                                                                                 |
| `brandGuidelinesUrl` | URL or `null`              | Official rules for using the brand or logo. Brand guidelines are not a copyright license.                                                                                 |
| `verdict`            | Status                     | Legal/OSS decision: `approved`, `restricted`, `rejected`, `pending`, or `unknown`. Use `pending` when a review is expected and `unknown` when review status is not known. |
| `verdictNotes`       | String or `null`           | Conditions, restrictions, reasoning, or other context supplied by Legal/OSS.                                                                                              |
| `verdictAuthor`      | String or `null`           | Person who supplied the Legal/OSS verdict. `ProvisionalAuthor` is a temporary placeholder, not a person's name or final approval.                                         |

Example entry:

```json
"svgs/sample.svg": {
  "figmaUrl": null,
  "sourceUrl": "https://example.com/official-assets/sample.svg",
  "retrievedOn": "2026-09-22",
  "originalAuthor": null,
  "copyrightHolder": "Example Organization",
  "prUrl": "https://github.com/Teradata/covalent/pull/1234",
  "commitHash": "0123456789abcdef0123456789abcdef01234567",
  "commitAuthor": "Example Contributor",
  "is3rdParty": true,
  "license": null,
  "licenseUrl": null,
  "copyrightUrl": null,
  "trademarkUrl": null,
  "brandGuidelinesUrl": null,
  "verdict": "pending",
  "verdictNotes": null,
  "verdictAuthor": null
}
```

Third-party brand marks require legal/OSS approval before they are added to or
replaced in the font. A copied Figma component, existing repository SVG, image
search result, or font extraction is not sufficient original provenance. Do
not proceed while the verdict is `pending` or `unknown`.

Run these checks after changing an SVG or the manifest:

```sh
npx nx run icons:check-manifest
```

The check treats `svgs/` as the source inventory because those files are the
original assets for which provenance is recorded. It fails when an SVG is
missing from the manifest, when a manifest entry has no matching SVG, or when
an icon's verdict is not `approved`. Third-party entries must also include a
`sourceUrl`, `retrievedOn`, and `copyrightHolder`. Entries with `pending`,
`restricted`, `rejected`, `unknown`, or a missing verdict do not pass the
compliance gate.

The generated font variables are not used as the provenance inventory. Their
names can differ during font generation and should be validated separately as
part of the font build workflow.

### Third-party notices

`THIRD-PARTY-NOTICES.md` is distributed with the package and summarizes the
third-party assets for consumers. While an entry remains under review, the
notice must identify it as pending and must not claim a license, permission, or
approval that Legal/OSS has not confirmed.

After Legal/OSS completes a review, update both `icons.manifest.json` and the
corresponding notice section with the approved license, attribution, policy
links, usage restrictions, and disposition. The manifest is the structured
source for CI; the notice is the human-readable document shipped in the npm
package.

## Adding custom covalent icons

After the provenance gate is complete, follow these steps:

### Upload the svg icon

1. Add the approved icon SVG file to the [svgs](https://github.com/Teradata/covalent/tree/main/libs/icons/svgs) folder and complete its manifest entry. All SVG files must be stripped of extra content, including fill color. The SVG should only contain one path. Here is an example of an accepted SVG:

```css
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/></svg>
```

2. Login to [IcoMoon](https://icomoon.io/) and navigate to the [IcoMoon App](https://icomoon.io/app/#/select).
3. Unzip the existing `covalent-icons-v<X.X>.zip` file, available [here](https://github.com/Teradata/covalent/tree/main/libs/icons).
4. Use the "Import Icons" button in the navbar to upload the `selections.json` file from the unzipped `covalent-icons-v<X.X>` folder. Select "Yes" when asked if settings should be saved for these icons.
5. Once the library is loaded on the screen, click on the menu icon (located at the top-right corner) and select "import to set".
6. Import the SVG files of the new icons. If you are replacing existing icons with new versions, select "Replace" when asked if exisiting icons should be replaced.
7. Make sure all of the new icons are highlighted along with existing ones.
8. Click on `Generate font` (located in the footer) and customize the ligature name for the icon in the next page. All icons must have a ligature name.
9. Click on `Download` to download the customized font package.

### Update covalent icons

1. Replace the existing Covalent icons zip file (found [here](https://github.com/Teradata/covalent/tree/main/libs/icons)) with the newly generated zip file and ensure to update the version.
2. Replace the files `covalent-icons.svg`, `covalent-icons.woff`, `covalent-icons.ttf` in [this](https://github.com/Teradata/covalent/tree/main/libs/icons) folder with the files found in the `fonts` folder of the zip file.
3. Open the styles.css file in the zip folder. Copy the query parameter from the src URLs of the font files. Replace the existing query parameters in the covalent-icons.scss and covalent-icons.css files with the copied ones. In the below example, `sn0lb0` is the query param.

```css
@font-face {
  font-family: 'covalent-icons';
  src:
    url('./covalent-icons.ttf?sn0lb0') format('truetype'),
    url('./covalent-icons.woff?sn0lb0') format('woff'),
    url('./covalent-icons.svg?sn0lb0#covalent-icons') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
```

4. Copy all icon variables from `variables.scss` in the zip file into the `covalent-icons-variables.scss` file in covalent.

Example:

```css
$cov-sample_icon: unquote('"\\e000"');
```

5. Copy all icon variables from `style.scss` in the zip file into the `covalent-icons.scss` file in covalent.

Example:

```css
.cov-sample_icon {
  &:before {
    content: $cov-sample_icon;
  }
}
```

6. Copy all icon variables from `style.css` in the zip file into the `covalent-icons.css` file in covalent.

Example:

```css
.cov-sample_icon:before {
  content: '\e000';
}
```

### Storybook/Basic usage

To explore the usage of the icons in Storybook:

1. Add the icon names to `COV_ICON_LIST` in [icon-list.ts](./icon-list.ts).

2. Run storybook

```
npm run storybook
```

3. In storybook, navigate to the Icon component and select `Covalent Icons`. Then, choose the newly added icons from the Storybook controls.
