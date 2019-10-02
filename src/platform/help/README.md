# HelpComponent

A component for rendering and navigating through documentation. Supports github urls.

## API Summary

#### Inputs
+ items: IHelpItem[]
  + List of IHelpMenuDataItems to be rendered
+ labels?: IHelpComponentLabels
  + Translated labels
+ toolbarColor?: ThemePalette
  + Color palette for toolbar
  + Defaults to 'primary'

## Setup

```typescript
import { CovalentHelpModule } from '@covalent/help';
@NgModule({
  imports: [
    CovalentHelpModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

```html
  <td-help [items]="items"></td-help>

```

#### Sample items

```typescript
oneItem: IHelpItem[] = [
  {
    url: 'https://github.com/Teradata/covalent/blob/develop/README.md',
  },
];

itemWithRawMarkdown: IHelpItem[] = [
  {
    markdownString: '# Heading',
  },
];

multipleItems: IHelpItem[] = [
  {
    url: 'https://raw.githubusercontent.com/Teradata/covalent-code-editor/master/docs/API.md',
    title: 'Code Editor API',
  },
  {
    url: 'https://raw.githubusercontent.com/angular/angular/master/README.md',
    title: 'Angular',
  },
];

oneItemWithAnchor: IHelpItem[] = [
  {
    url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/docs/DEVELOPER_GUIDE.md',
    anchor: 'Adding a new documentation component',
  },
];

nestedItems: IHelpItem[] = [
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
interface IHelpItem {
  title?: string;
  url?: string;
  httpOptions?: object;
  markdownString?: string; // raw markdown
  anchor?: string;
  children?: IHelpItem[];
}
```

# HelpWindowService

A service that opens a HelpWindowComponent inside a draggable dialog. Uses the openDraggable method of the TdDialogService.

## API Summary

#### Methods

+ open: function(config: IHelpWindowServiceConfig)
  + Opens a HelpWindowComponent inside a draggable dialog.

For reference:
```typescript
interface IHelpWindowServiceConfig {
  items: IHelpItem[];
  dialogConfig?: MatDialogConfig;
  labels?: IHelpWindowComponentLabels;
  toolbarColor?: ThemePalette;
}
```

## Setup

```typescript
import { CovalentHelpModule } from '@covalent/help';
@NgModule({
  imports: [
    CovalentHelpModule,
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
  HelpWindowComponent,
  HelpWindowService,
  IHelpItem,
} from '@covalent/help';
import { MatDialogRef } from '@angular/material/dialog';

export class SampleComponent{

  ref: MatDialogRef<HelpWindowComponent>;

  constructor(private _helpWindowService: HelpWindowService) {}

  ngOnInit(): void {
    this.ref = this._helpWindowService.open({
      items: [{ url: 'https://github.com/Teradata/covalent/blob/develop/README.md' }]
    });
    this.ref.afterOpened().subscribe(() => {

    });
    this.ref.afterClosed().subscribe(() => {

    });
  }
}
```
