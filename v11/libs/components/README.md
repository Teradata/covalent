# Covalent components

Covalent components is a coded implementation of Covalent Design System using [lit](https://lit.dev/) framework to compile to native HTML elements, ready to use any where HTML is supported with no framework lock-in.

## 🚀 Quick Start: CDN (60 Seconds)

Jump in immediately using a CDN. Perfect for prototyping, CodePens, or simple projects:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Latest full bundle -->
    <script type="module" src="https://cdn.jsdelivr.net/npm/@covalent/components@latest/+esm"></script>

    <!-- Optional theme (choose light/dark) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@covalent/components@latest/theme/prebuilt/light-theme.css" />
  </head>
  <body>
    <!-- Start using components! -->
    <cv-button label="Get Started" icon="rocket" raised></cv-button>
    <cv-alert heading="Pro Tip" type="success"> Check our Storybook for component playgrounds! </cv-alert>
  </body>
</html>
```

### Need Just One Component?

Optimize load times by importing only what you need:

```html
<!-- just include the button component -->
<script type="module" src="https://cdn.jsdelivr.net/npm/@covalent/components@latest/button.mjs"></script>
```

### 📦 Production Setup (npm/yarn)

Use your favorite package management tool to add covalent components to your project.

```bash
# Using npm
npm install --save @covalent/components

# Using yarn
yarn add @covalent/components
```

### Using with Angular

Applications using angular can use covalent components in the same way they use HTML elements today adding [`CUSTOM_ELEMENTS_SCHEMA`](https://angular.io/api/core/CUSTOM_ELEMENTS_SCHEMA) schema to any Angular module or standalone component.

```javascript
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

import '@covalent/components/button';

@component({
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: '<cv-button label="Hello world" raised></cv-button>',
})
export class AppComponent {}
```

### Using with React

While Covalent web components work directly in React, for optimal TypeScript support and React-centric APIs, we recommend using our dedicated React wrapper library. This provides:

✅ Native React prop handling  
✅ First-class event binding  
✅ Full TS type definitions  
✅ Component documentation in JSX format

```jsx
// Example usage
import { CovalentButton, CovalentSwitch } from '@covalent/components-react';

function App() {
  return (
    <>
      <CovalentSwitch checked onChange={(e) => console.log(e.detail)} />
      <CovalentButton label="React Power" onClick={() => alert('Works like regular React components!')} />
    </>
  );
}
```

**Get Started with React:**  
📚 See the [Full React Components Documentation](https://github.com/Teradata/covalent/blob/main/libs/components-react/README.md)

```bash
npm install @covalent/components-react
# or
yarn add @covalent/components-react
```

### 🧩 Component Catalog

Importing individual Covalent web components is supported and encouraged for production deployments. By importing only the components you need, you can reduce the overall code size and improve the performance of your application.

Here is a table listing the imports for Covalent web components:

| Component Name     | Selector                | Path                                      |
| ------------------ | ----------------------- | ----------------------------------------- |
| ActionRibbon       | cv-action-ribbon        | @covalent/components/action-ribbon        |
| Alert              | cv-alert                | @covalent/components/alert                |
| AppShell           | cv-app-shell            | @covalent/components/app-shell            |
| Badge              | cv-badge                | @covalent/components/badge                |
| Button             | cv-button               | @covalent/components/button               |
| Card               | cv-card                 | @covalent/components/card                 |
| Checkbox           | cv-checkbox             | @covalent/components/checkbox             |
| Chip               | cv-chip                 | @covalent/components/chip                 |
| ChipSet            | cv-chip-set             | @covalent/components/chip-set             |
| CircularProgress   | cv-circular-progress    | @covalent/components/circular-progress    |
| CodeEditor         | cv-code-editor          | @covalent/components/code-editor          |
| CodeSnippet        | cv-code-snippet         | @covalent/components/code-snippet         |
| Drawer             | cv-drawer               | @covalent/components/drawer               |
| Dialog             | cv-dialog               | @covalent/components/dialog               |
| EmptyState         | cv-empty-state          | @covalent/components/empty-state          |
| ExpansionPanel     | cv-expansion-panel      | @covalent/components/expansion-panel      |
| ExpansionPanelItem | cv-expansion-panel-item | @covalent/components/expansion-panel-item |
| FocusedPage        | cv-focused-page         | @covalent/components/focused-page         |
| Formfield          | cv-formfield            | @covalent/components/formfield            |
| FullscreenDialog   | cv-full-screen-dialog   | @covalent/components/full-screen-dialog   |
| Icon               | cv-icon                 | @covalent/components/icon                 |
| IconButton         | cv-icon-button          | @covalent/component/icon-button           |
| IconButtonToggle   | cv-icon-button-toggle   | @covalent/components/icon-button-toggle   |
| IconCheckToggle    | cv-checkbox-icon        | @covalent/components/icon-check-toggle    |
| IconLockup         | cv-icon-lockup          | @covalent/components/icon-lockup          |
| IconRadioToggle    | cv-radio-icon           | @covalent/components/icon-radio-toggle    |
| LinearProgress     | cv-linear-progress      | @covalent/components/linear-progress      |
| List               | cv-list                 | @covalent/components/list                 |
| ListItem           | cv-list-item            | @covalent/components/list-item            |
| CheckListItem      | cv-check-list-item      | @covalent/components/check-list-item      |
| RadioListItem      | cv-radio-list-item      | @covalent/components/radio-list-item      |
| NavRailListItem    | cv-nav-list-item        | @covalent/components/nav-list-item        |
| Menu               | cv-menu                 | @covalent/components/menu                 |
| NotebookCell       | cv-notebook-cell        | @covalent/components/notebook-cell        |
| Radio              | cv-radio                | @covalent/components/radio                |
| Select             | cv-select               | @covalent/components/select               |
| SideSheet          | cv-side-sheet           | @covalent/components/side-sheet           |
| Slider             | cv-slider               | @covalent/components/slider               |
| SliderRange        | cv-slider-range         | @covalent/components/slider-range         |
| Snackbar           | cv-snackbar             | @covalent/components/snackbar             |
| StatusDialog       | cv-status-dialog        | @covalent/components/status-dialog        |
| StatusHeader       | cv-status-header        | @covalent/components/status-header        |
| StatusHeaderItem   | cv-status-header-item   | @covalent/components/status-header-item   |
| Switch             | cv-switch               | @covalent/components/switch               |
| Tab                | cv-tab                  | @covalent/components/tab                  |
| TabBar             | CovalentTabBar          | @covalent/components/tab-bar              |
| TextLockup         | cv-text-lockup          | @covalent/components/text-lockup          |
| TextArea           | cv-textarea             | @covalent/components/textarea             |
| TextField          | cv-textfield            | @covalent/components/textfield            |
| Toolbar            | cv-toolbar              | @covalent/components/toolbar              |
| Tooltip            | cv-tooltip              | @covalent/components/tooltip              |
| TopAppBar          | cv-top-app-bar          | @covalent/components/top-app-bar          |
| TopAppBarFixed     | cv-top-app-bar-fixed    | @covalent/components/top-app-bar-fixed    |
| TreeList           | cv-tree-list            | @covalent/components/tree-list            |
| TreeListItem       | cv-tree-list-item       | @covalent/components/tree-list-item       |
| Typography         | cv-typography           | @covalent/components/typography           |

## Running the storybook docs

Run `nx storybook components` to start the main storybook documentation site for this project

## Running the build

Run `nx build components` to get a publishable set of build assets using webpack

## Running linting

Run `nx lint components` to execute the linting via [ESlint](https://eslint.org/)

Run `nx scsslint components` to execute scsslint via [Stylelint](https://stylelint.io/)

## Running unit tests

Run `nx test components` to execute the unit tests via [Jest](https://jestjs.io).
