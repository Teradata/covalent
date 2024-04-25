# Covalent icons

## Adding a custom covalent icon

To integrate a new custom Covalent icon, follow these steps::

### Upload the svg icon

1. Begin by uploading the new icon SVG file to the [svgs](https://github.com/Teradata/covalent/tree/main/libs/icons/svgs) folder.
2. Login to [IcoMoon](https://icomoon.io/) and navigate to the [IcoMoon App](https://icomoon.io/app/#/select).
3. Unzip the existing `covalent-icons-v<X.X>.zip` file, available [here](https://github.com/Teradata/covalent/tree/main/libs/icons).
4. Use the "Import Icons" button in the navbar to upload the `selections.json` file from the unzipped `covalent-icons-v<X.X>` folder.
5. Once the library is loaded on the screen, click on the menu icon (located at the top-right corner) and select "import to set".
6. Import the SVG file of the new icon.
7. Click on `Generate font` (located in the footer) and customize the ligature name for the icon in the next page.
8. Click on `Download` to download the customized font package.

### Update covalent icons

1. Replace the existing Covalent icons zip file (found [here](https://github.com/Teradata/covalent/tree/main/libs/icons)) with the newly generated zip file and ensure to update the version.
2. Replace the files `covalent-icons.svg`, `covalent-icons.woff`, `covalent-icons.ttf` in [this](https://github.com/Teradata/covalent/tree/main/libs/icons) folder with the files found in the `fonts` folder of the zip file.
3. Add the icon variable for the custom icon in the `covalent-icons-variables.scss` file. Retrieve the Unicode value from IcoMoon.

```css
$cov-<icon-name>: unquote('"\\<unicode-value>"');
```

Example:

```css
$cov-sample_icon: unquote('"\\e000"');
```

4. Open the styles.css file in the zip folder. Copy the query parameter from the src URLs of the font files. Replace the existing query parameters in the covalent-icons.scss and covalent-icons.css files with the copied ones. In the below example, `sn0lb0` is the query param.

```css
@font-face {
  font-family: 'covalent-icons';
  src: url('./covalent-icons.ttf?sn0lb0') format('truetype'), url('./covalent-icons.woff?sn0lb0') format('woff'), url('./covalent-icons.svg?sn0lb0#covalent-icons') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
```

5. In the covalent-icons.scss and covalent-icons.css files, define the icon variable.

```css
.cov-sample_icon {
  &:before {
    content: $cov-sample_icon;
  }
}
```

### Storybook/Basic usage

To explore the usage of the icon in Storybook:

1. Add the icon name to the `COV_ICON_LIST` in this [file](https://github.com/Teradata/covalent/blob/main/libs/components/src/icon/icon.stories.js)

2. Run storybook

```
npm run storybook
```

3. In storybook, navigate to the Icon component and select `Covalent Icons`. Then, choose the newly added icon from the Storybook controls.
