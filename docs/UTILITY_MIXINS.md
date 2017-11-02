## Utility SASS Mixins

You can cherry pick the `utility` classes that fit your needs with our `scss` mixins instead of including everything with the `platform.css`.

After adding the `all-theme.scss`, the mixins will be available for usage:

```css
@import '~@covalent/core/theming/all-theme';
```

### Core Styles Mixin

Covalent includes out of the box some styles to make your application look better, this can be used by adding the following:

```css
// Include the core styles for Covalent
@include covalent-core();
```

We also bundle the material icons

```css
// Include pre-bundled material-icons
$mat-font-url: '../node_modules/@covalent/core/common/styles/font/';
@include covalent-material-icons();
// Alternative way to include material-icons
// @import '../node_modules/@covalent/core/common/material-icons.css';
```

### Covalent Utilities Mixin

To include [utility classes](https://teradata.github.io/covalent/#/style-guide/utility-styles), add the following:

```css
// Include covalent utility classes
@include covalent-utilities();
```

### Flex Layout Mixin

To include [flex layout v1](https://teradata.github.io/covalent/#/layouts), add the following:

```css
// Include flex layout classes
@include covalent-layout();
```

### Colors Mixin

To include the [color classes](https://teradata.github.io/covalent/#/style-guide/colors), add the following:

```css
// Include covalent color classes
@include covalent-colors();
```

### Typography Mixin

To include the [typography classes](https://teradata.github.io/covalent/#/style-guide/typography), add the following:

```css
// Include covalent typography classes
@include covalent-typography();
```

### Example including every single mixin

If you want to include everything, include the following snippet (or just include the `platform.css` as described in the [getting started](http://localhost:4200/#/docs) docs)

```css
@import '~@covalent/core/theming/all-theme';

// Include the core styles for Covalent
@include covalent-core();

// Include pre-bundled material-icons
$mat-font-url: '../node_modules/@covalent/core/common/styles/font/';
@include covalent-material-icons();
// Alternative way to include material-icons
// @import '../node_modules/@covalent/core/common/material-icons.css';

// Include covalent utility classes
@include covalent-utilities();

// Include flex layout classes
@include covalent-layout();

// Include covalent typography classes
@include covalent-typography();

// Include covalent color classes
@include covalent-colors();
```

