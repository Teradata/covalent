# MarkdownNavigatorComponent

A component for rendering and navigating through markdown, such as documentation. Supports github urls.

## API Summary

#### Inputs

- items: IMarkdownNavigatorItem[]
  - List of IMarkdownNavigatorItems to be rendered
- labels?: IMarkdownNavigatorLabels
  - Translated labels
- startAt?: IMarkdownNavigatorItem | IMarkdownNavigatorItem[]
  - Item or path to jump to
- compareWith?: IMarkdownNavigatorCompareWith
  - Function used to find startAt item
  - Defaults to comparison by strict equality (===)
- footer:? Type<any>
  - Custom component to be used as global footer
- copyCodeToClipboard?: boolean
  - Display copy button on code snippets to copy code to clipboard.
- copyCodeTooltips?: ICopyCodeTooltips
  - Tooltips for copy button to copy and upon copying.

#### Outputs

- buttonClicked: ITdFlavoredMarkdownButtonClickEvent
  - Emitted when a button is clicked
- itemSelected: IMarkdownNavigatorItem
  - Emitted the selected item when a item is selected

For reference:

```typescript
interface IMarkdownNavigatorItem {
  id?: string; // used to compare items by default and as attr id for content
  title?: string;
  url?: string;
  httpOptions?: object;
  markdownString?: string; // raw markdown
  anchor?: string;
  children?: IMarkdownNavigatorItem[];
  childrenUrl?: string;
  description?: string;
  icon?: string;
  footer?: Type<any>;
}

interface ICopyCodeTooltips {
  copy?: string;
  copied?: string;
}
```

## Setup

```typescript
import { CovalentMarkdownNavigatorModule } from '@covalent/markdown-navigator';
@NgModule({
  imports: [CovalentMarkdownNavigatorModule],
})
export class MyModule {}
```

## Covalent Icons Support (Optional)

The Markdown Navigator component supports both **Material Icons** (default) and **Covalent Icons** (optional).

### Using with Covalent Design System

If your project already uses other Covalent components and has the following in your global styles:

```scss
@use '@covalent/icons';
```

**You don't need to do anything additional.** Covalent Icons will work automatically.

### Using Markdown Navigator Standalone

If you're using the Markdown Navigator component without the full Covalent Design System:

1. **Install the icons package:**

   ```bash
   npm install @covalent/icons
   ```

2. **Import in your global styles** (`src/styles.scss`):
   ```scss
   @import '@covalent/markdown-navigator/styles/markdown-navigator-icons.scss';
   ```

### Without Covalent Icons

The component works perfectly with **Material Icons only**. Covalent Icons are completely optional.

### Icon Usage

You can specify icons in your items using:

- **Material Icons:** Use the icon name directly

  ```typescript
  {
    title: 'Notebooks',
    icon: 'book',  // Material Icon
    // ...
  }
  ```

- **Covalent Icons:** Use the icon name (the component auto-detects Covalent icons)
  ```typescript
  {
    title: 'Vector Store',
    icon: 'variable_outlined;covalent-icons',  // Covalent Icon
    // ...
  }
  ```

The component automatically detects which font to use based on the icon name. No additional configuration needed in your TypeScript code.

## Usage

```html
<td-markdown-navigator [items]="items"></td-markdown-navigator>
```

```typescript
const items = [
  {
    id: 'covalent',
    title: 'Covalent',
    children: [
      {
        id: 'component',
        title: 'Components',
        children: [
          {
            id: 'td-loading',
            url: 'https://raw.githubusercontent.com/Teradata/covalent/main/src/platform/core/loading/README.md',
            title: 'tdLoading',
          },
        ],
      },
    ],
  },
];
```

# MarkdownNavigatorWindowComponent

A component that contains a MarkdownNavigator component and a toolbar

## API Summary

#### Inputs

- items: IMarkdownNavigatorItem[]
  - List of IMarkdownNavigatorItems to be rendered
- labels?: IMarkdownNavigatorLabels
  - Translated labels
- startAt?: IMarkdownNavigatorItem | IMarkdownNavigatorItem[]
  - Item or path to jump to
- compareWith?: IMarkdownNavigatorCompareWith
  - Function used to find startAt item
  - Defaults to comparison by strict equality (===)
- toolbarColor?: ThemePalette
  - Toolbar color
  - Defaults to 'primary'
- footer:? Type<any>;
  - Custom component to be used as global footer

#### Outputs

- closed: void
  - Event emitted when the close button is clicked.
- buttonClicked: ITdFlavoredMarkdownButtonClickEvent
  - Emitted when a button is clicked
- itemSelected: IMarkdownNavigatorItem
  - Emitted the selected item when a item is selected

## Setup

```typescript
import { CovalentMarkdownNavigatorModule } from '@covalent/markdown-navigator';
@NgModule({
  imports: [CovalentMarkdownNavigatorModule],
})
export class MyModule {}
```

## Usage

```html
<td-markdown-navigator-window [items]="items"></td-markdown-navigator-window>
```

# MarkdownNavigatorWindowService

A service that opens a MarkdownNavigatorWindowComponent inside a draggable dialog. Uses the openDraggable method of the TdDialogService.

## API Summary

#### Methods

- open: function(config: IMarkdownNavigatorWindowConfig)
  - Opens a MarkdownNavigatorWindowComponent inside a draggable dialog.

For reference:

```typescript
interface IMarkdownNavigatorWindowConfig {
  items: IMarkdownNavigatorItem[];
  dialogConfig?: MatDialogConfig;
  labels?: IMarkdownNavigatorWindowLabels;
  toolbarColor?: ThemePalette;
  startAt?: IMarkdownNavigatorItem | IMarkdownNavigatorItem[];
  compareWith?: IMarkdownNavigatorCompareWith;
  footer?: Type<any>;
}
```

## Setup

```typescript
import { CovalentMarkdownNavigatorModule } from '@covalent/markdown-navigator';
@NgModule({
  imports: [CovalentMarkdownNavigatorModule],
})
export class MyModule {}
```

## Usage

```typescript
import { TdMarkdownNavigatorWindowComponent, TdMarkdownNavigatorWindowService, IMarkdownNavigatorItem } from '@covalent/markdown-navigator';
import { MatDialogRef } from '@angular/material/dialog';

export class SampleComponent {
  constructor(private _markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) {}

  ngOnInit(): void {
    const ref: MatDialogRef<TdMarkdownNavigatorWindowComponent> = this._markdownNavigatorWindowService.open({
      items: [
        {
          url: 'https://github.com/Teradata/covalent/blob/main/README.md',
        },
      ],
    });
    ref.afterOpened().subscribe(() => {});
    ref.afterClosed().subscribe(() => {});
  }
}
```

# MarkdownNavigatorWindowDirective

A directive that calls the TdMarkdownNavigatorWindowService open method on click events.

## API Summary

#### Inputs

- tdMarkdownNavigatorWindow: IMarkdownNavigatorWindowConfig
  - Config to open window with
- disabled: boolean
  - Whether disabled or not

## Setup

```typescript
import { CovalentMarkdownNavigatorModule } from '@covalent/markdown-navigator';
@NgModule({
  imports: [CovalentMarkdownNavigatorModule],
})
export class MyModule {}
```

## Usage

Example:

```html
<button mat-button [tdMarkdownNavigatorWindow]="{ items: [] }" [disabled]="false">Open window</button>
```
