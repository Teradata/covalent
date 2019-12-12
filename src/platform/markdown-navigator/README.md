# MarkdownNavigatorComponent

A component for rendering and navigating through markdown, such as documentation. Supports github urls.

## API Summary

#### Inputs

+ items: IMarkdownNavigatorItem[]
  + List of IMarkdownNavigatorItems to be rendered
+ labels?: IMarkdownNavigatorLabels
  + Translated labels
+ startAt?: IMarkdownNavigatorItem
  + Item to jump to
+ compareWith?: IMarkdownNavigatorCompareWith
  + Function used to find startAt item
  + Defaults to comparison by strict equality (===)

For reference:

```typescript
interface IMarkdownNavigatorItem {
  title?: string;
  url?: string;
  httpOptions?: object;
  markdownString?: string; // raw markdown
  anchor?: string;
  children?: IMarkdownNavigatorItem[];
}
```

## Setup

```typescript
import { CovalentMarkdownNavigatorModule } from '@covalent/markdown-navigator';
@NgModule({
  imports: [CovalentMarkdownNavigatorModule]
})
export class MyModule {}
```

## Usage

```html
<td-markdown-navigator [items]="items"></td-markdown-navigator>
```

```typescript
const items = [
  {
    title: 'Covalent',
    children: [
      {
        title: 'Components',
        children: [
          {
            url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/src/platform/core/loading/README.md',
            title: 'tdLoading'
          }
        ]
      }
    ]
  }
];
```

# MarkdownNavigatorWindowComponent

A component that contains a MarkdownNavigator component and a toolbar

## API Summary

#### Inputs

+ items: IMarkdownNavigatorItem[]
  + List of IMarkdownNavigatorItems to be rendered
+ labels?: IMarkdownNavigatorLabels
  + Translated labels
+ startAt?: IMarkdownNavigatorItem
  + Item to jump to
+ compareWith?: IMarkdownNavigatorCompareWith
  + Function used to find startAt item
  + Defaults to comparison by strict equality (===)
+ toolbarColor?: ThemePalette
  + Toolbar color
  + Defaults to 'primary'
+ docked?: boolean
  + Whether docked or not.
  + Defaults to false

#### Outputs

+ closed: void
  + Event emitted when the close button is clicked.
+ dockToggled: boolean
  + Event emitted when the toggle dock state button is clicked.
  + Emits current docked state.

## Setup

```typescript
import { CovalentMarkdownNavigatorModule } from '@covalent/markdown-navigator';
@NgModule({
  imports: [CovalentMarkdownNavigatorModule]
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

+ open: function(config: IMarkdownNavigatorWindowConfig)
  + Opens a MarkdownNavigatorWindowComponent inside a draggable dialog.

For reference:

```typescript
interface IMarkdownNavigatorWindowConfig {
  items: IMarkdownNavigatorItem[];
  dialogConfig?: MatDialogConfig;
  labels?: IMarkdownNavigatorWindowLabels;
  toolbarColor?: ThemePalette;
  startAt?: IMarkdownNavigatorItem;
  compareWith?: IMarkdownNavigatorCompareWith;
}
```

## Setup

```typescript
import { CovalentMarkdownNavigatorModule } from '@covalent/markdown-navigator';
@NgModule({
  imports: [CovalentMarkdownNavigatorModule]
})
export class MyModule {}
```

## Usage

```typescript
import {
  MarkdownNavigatorWindowComponent,
  MarkdownNavigatorWindowService,
  IMarkdownNavigatorItem
} from '@covalent/markdown-navigator';
import { MatDialogRef } from '@angular/material/dialog';

export class SampleComponent {
  constructor(private _markdownNavigatorWindowService: MarkdownNavigatorWindowService) {}

  ngOnInit(): void {
    const ref: MatDialogRef<MarkdownNavigatorWindowComponent> = this._markdownNavigatorWindowService.open({
      items: [{ url: 'https://github.com/Teradata/covalent/blob/develop/README.md' }]
    });
    ref.afterOpened().subscribe(() => {});
    ref.afterClosed().subscribe(() => {});
  }
}
```

# MarkdownNavigatorWindowDirective

A directive that calls the MarkdownNavigatorWindowService open method on click events.

## API Summary

#### Inputs

+ tdMarkdownNavigatorWindow: IMarkdownNavigatorWindowConfig
  + Config to open window with
+ disabled: boolean
  + Whether disabled or not

## Setup

```typescript
import { CovalentMarkdownNavigatorModule } from '@covalent/markdown-navigator';
@NgModule({
  imports: [CovalentMarkdownNavigatorModule]
})
export class MyModule {}
```

## Usage

Example:

```html
<button mat-button [tdMarkdownNavigatorWindow]="{ items: [] }" [disabled]="false">Open window</button>
```
