# MdNavigatorComponent

A component for rendering and navigating through markdown, such as documentation. Supports github urls.

## API Summary

#### Inputs
+ items: IMdNavigatorItem[]
  + List of IMdNavigatorItems to be rendered
+ labels?: IMdNavigatorLabels
  + Translated labels
+ toolbarColor?: ThemePalette
  + Color palette for toolbar
  + Defaults to 'primary'

## Setup

```typescript
import { CovalentMdNavigatorModule } from '@covalent/markdown-navigator';
@NgModule({
  imports: [
    CovalentMdNavigatorModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

```html
  <td-md-navigator [items]="items"></td-md-navigator>

```

#### Sample items

```typescript
oneItem: IMdNavigatorItem[] = [
  {
    url: 'https://github.com/Teradata/covalent/blob/develop/README.md',
  },
];

itemWithRawMarkdown: IMdNavigatorItem[] = [
  {
    markdownString: '# Heading',
  },
];

multipleItems: IMdNavigatorItem[] = [
  {
    url: 'https://raw.githubusercontent.com/Teradata/covalent-code-editor/master/docs/API.md',
    title: 'Code Editor API',
  },
  {
    url: 'https://raw.githubusercontent.com/angular/angular/master/README.md',
    title: 'Angular',
  },
];

oneItemWithAnchor: IMdNavigatorItem[] = [
  {
    url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/docs/DEVELOPER_GUIDE.md',
    anchor: 'Adding a new documentation component',
  },
];

nestedItems: IMdNavigatorItem[] = [
  {
    title: 'Covalent Components',
    children: [
      {
        title: 'Markdown Components',
        children: [
          {
            url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/src/platform/core/loading/README.md',
            title: 'td-markdown',
          },
        ],
      },
    ],
  },
];

```

For reference:
```typescript
interface IMdNavigatorItem {
  title?: string;
  url?: string;
  httpOptions?: object;
  markdownString?: string; // raw markdown
  anchor?: string;
  children?: IMdNavigatorItem[];
}
```

# MdNavigatorWindowService

A service that opens a MdNavigatorWindowComponent inside a draggable dialog. Uses the openDraggable method of the TdDialogService.

## API Summary

#### Methods

+ open: function(config: IMdNavigatorWindowServiceConfig)
  + Opens a MdNavigatorWindowComponent inside a draggable dialog.

For reference:
```typescript
interface IMdNavigatorWindowServiceConfig {
  items: IMdNavigatorItem[];
  dialogConfig?: MatDialogConfig;
  labels?: IMdNavigatorWindowLabels;
  toolbarColor?: ThemePalette;
}
```

## Setup

```typescript
import { CovalentMdNavigatorModule } from '@covalent/markdown-navigator';
@NgModule({
  imports: [
    CovalentMdNavigatorModule,
    ...
  ],
  ...
})
export class MyModule {}
```


## Usage

Example:

```typescript
import {
  MdNavigatorWindowComponent,
  MdNavigatorWindowService,
  IMdNavigatorItem,
} from '@covalent/markdown-navigator';
import { MatDialogRef } from '@angular/material/dialog';

export class SampleComponent{

  ref: MatDialogRef<MdNavigatorWindowComponent>;

  constructor(private _mdNavigatorWindowService: MdNavigatorWindowService) {}

  ngOnInit(): void {
    this.ref = this._mdNavigatorWindowService.open({
      items: [{ url: 'https://github.com/Teradata/covalent/blob/develop/README.md' }]
    });
    this.ref.afterOpened().subscribe(() => {

    });
    this.ref.afterClosed().subscribe(() => {

    });
  }
}
```
