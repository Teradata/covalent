# core

Core Teradata UI Platform for layouts, icons, custom components and themes. This should be added as a dependency for any project that wants to use layouts, icons and themes for Angular Material.

The core will have custom components that enforce standards and best practices through built-in design patterns.


## Installation

This component can be installed as npm package.

```bash
npm i -save @covalent/core
```


## Setup

Import the modules from `@covalent/core` as needed in your NgModule:

```typescript
import { CovalentLayoutModule, CovalentStepsModule /* and many more */ } from '@covalent/core';
@NgModule({
  imports: [
    CovalentLayoutModule,
    CovalentStepsModule,
    ...
  ],
  ...
})
export class MyModule {}
```


## Styles, Icons and Theming

See [theming](https://teradata.github.io/covalent/#/docs/theme) in the covalent docs for more info

Core Teradata UI Platform comes with a base CSS file `@covalent/core/common/platform.css` (includes icons). 