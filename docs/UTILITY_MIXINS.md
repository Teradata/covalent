## Utility SASS Mixins

You can cherry pick the `utility` classes that fit your needs with our `scss` mixins instead of including everything with the `platform.css`.

After adding the `all-theme.scss`, the mixins will be available for usage:

```scss
@import '@covalent/core/theming/all-theme' as cov;
```

### Core Styles Mixin

Covalent includes out of the box some styles to make your application look better, this can be used by adding the following:

```scss
// Include the core styles for Covalent
cov.covalent-core();
```

We also bundle the material icons

```scss
// Include pre-bundled material-icons
$mat-font-url: './';
cov.covalent-material-icons();
// Alternative way to include material-icons
// @import '../node_modules/@covalent/core/common/material-icons.css';
```

### Covalent Utilities Mixin

To include [utility classes](https://teradata.github.io/covalent/#/utilities/styling), add the following:

```scss
// Include covalent utility classes
cov.covalent-utilities();
```

### Flex Layout Mixin

To include flex layout, add the following:

```scss
// Include flex layout classes
cov.covalent-layout();
```

### Colors Mixin

To include the color classes, add the following:

```scss
// Include covalent color classes
cov.covalent-colors();
```

### Example including every single mixin

If you want to include everything, include the following snippet (or just include the `platform.css` as described in the [getting started](https://teradata.github.io/covalent/#/docs) docs)

```scss
@use '@covalent/core/theming/all-theme' as cov;

// Include the core styles for Covalent
cov.covalent-core();

// Include pre-bundled material-icons
$mat-font-url: '../node_modules/@covalent/core/common/styles/font/';
cov.covalent-material-icons();
// Alternative way to include material-icons
// @import '../node_modules/@covalent/core/common/material-icons.css';

// Include covalent utility classes
cov.covalent-utilities();

// Include flex layout classes
cov.covalent-layout();

// Include covalent color classes
cov.covalent-colors();
```
