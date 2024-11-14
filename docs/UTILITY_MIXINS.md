## Utility SASS Mixins

You can cherry pick the `utility` classes that fit your needs with our `scss` mixins instead of including everything with the `platform.css`.

After adding the `all-theme.scss`, the mixins will be available for usage:

```scss
@import '@covalent/core/theming/all-theme';
```

### Core Styles Mixin

Covalent includes out of the box some styles to make your application look better, this can be used by adding the following:

```scss
// Include the core styles for Covalent
@include covalent-core();
```

We also bundle the material icons

```scss
// Include pre-bundled material-icons
@include covalent-material-icons();
// Alternative way to include material-icons
// @import '../node_modules/@covalent/core/common/material-icons.css';
```

### Covalent Utilities Mixin

To include [utility classes](https://teradata.github.io/covalent/#/utilities/styling), add the following:

```scss
// Include covalent utility classes
@include covalent-utilities();
```

### Flex Layout Mixin

To include flex layout, add the following:

```scss
// Include flex layout classes
@include covalent-layout();
```

### Colors Mixin

To include the color classes, add the following:

```scss
// Include covalent color classes
@include covalent-colors();
```

### Example including every single mixin

If you want to include everything, include the following snippet (or just include the `platform.css` as described in the [getting started](https://teradata.github.io/covalent/v8/#/docs/get-started/overview) docs)

```scss
@import '@covalent/core/theming/all-theme';

// Include the core styles for Covalent
@include covalent-core();

// Include pre-bundled material-icons
@include covalent-material-icons();
// Alternative way to include material-icons
// @import '../node_modules/@covalent/core/common/material-icons.css';

// Include covalent utility classes
@include covalent-utilities();

// Include flex layout classes
@include covalent-layout();

// Include covalent color classes
@include covalent-colors();
```
