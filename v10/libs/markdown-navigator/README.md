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

The Markdown Navigator automatically detects Covalent Icons and applies the correct font styling. Covalent Icons are **completely optional** - the component works perfectly with Material Icons only.

### Icon Detection (Built-in)

The component includes icon detection out-of-the-box. **No additional setup or installation required.**

Icon detection is bundled within the component and works with any version of `@covalent/icons` installed in your project.

### Rendering Covalent Icons (Optional)

If you want to **render** Covalent Icons (not just Material Icons), you need to install the icon fonts:

**Option 1: Using with Covalent Design System**

If your project already uses other Covalent components with the following in your global styles:

```scss
@use '@covalent/icons';
```

Covalent Icons will work automatically.

**Option 2: Standalone Installation**

1. **Install the icons package:**

   ```bash
   npm install @covalent/icons
   ```

2. **Import in your global styles** (`src/styles.scss`):
   ```scss
   @import '@covalent/markdown-navigator/styles/markdown-navigator-icons.scss';
   ```

### Icon Usage

Both icon types work the same way in your data:

```typescript
// Material Icons (always available via Google Fonts)
{
  title: 'Notebooks',
  icon: 'book',
}

// Covalent Icons (requires @covalent/icons for rendering)
{
  title: 'Vector Store',
  icon: 'variable_outlined',  // Auto-detected as Covalent icon
}
```

**Note:** If a Covalent icon is used but `@covalent/icons` is not installed, the icon will display as an empty box. Material Icons always work without additional setup.

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
