# Covalent icons

## Adding custom covalent icons

To integrate new custom Covalent icons, follow these steps::

### Upload the svg icon

1. Begin by uploading the new icon SVG file to the [svgs](https://github.com/Teradata/covalent/tree/main/libs/icons/svgs) folder. All SVG files must be stripped of extra content, including fill color. The SVG should only contain one path. Here is an example of an accepted SVG:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/></svg>

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
  src: url('./covalent-icons.ttf?sn0lb0') format('truetype'), url('./covalent-icons.woff?sn0lb0') format('woff'), url('./covalent-icons.svg?sn0lb0#covalent-icons') format('svg');
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

1. Add the icon names to the `COV_ICON_LIST` in this [file](https://github.com/Teradata/covalent/blob/main/libs/components/src/icon/icon.stories.js)

2. Run storybook

```
npm run storybook
```

3. In storybook, navigate to the Icon component and select `Covalent Icons`. Then, choose the newly added icons from the Storybook controls.
