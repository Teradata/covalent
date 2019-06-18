# HelpComponent

A component for rendering and navigating through documentation. Supports github urls.

## API Summary

#### Inputs
+ items: IHelpMenuDataItem[]
  + List of IHelpMenuDataItems to be rendered
+ labels?: IHelpComponentLabels
  + Translated labels
  * Optional

## Setup

```typescript
import { CovalentHelpModule } from '@covalent/experimental/help';
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
oneItem: IHelpMenuDataItem[] = [
  {
    url: 'https://github.com/Teradata/covalent/blob/develop/README.md',
  },
];

multipleItems: IHelpMenuDataItem[] = [
  {
    url: 'https://raw.githubusercontent.com/Teradata/covalent-code-editor/master/docs/API.md',
    title: 'API',
  },
  {
    url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/docs/DEVELOPER_GUIDE.md',
    title: 'Developer Guide',
  },
  {
    url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/src/platform/core/loading/README.md',
    title: 'Loading',
  },
  {
    url: 'https://raw.githubusercontent.com/angular/angular/master/README.md',
    title: 'Angular',
  },
  {
    url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/README.md',
    title: 'Covalent',
  },
  {
    url: 'https://raw.githubusercontent.com/Teradata/covalent-tools/develop/docs/CLI.md',
    title: 'up a level: E2E Code Coverage',
  },
];

oneItemWithAnchor: IHelpMenuDataItem[] = [
  {
    url: 'https://raw.githubusercontent.com/Teradata/covalent-code-editor/master/docs/API.md',
    title: 'API',
    anchor: 'Properties',
  },
];

nestedItems: IHelpMenuDataItem[] = [
  {
    title: 'Nested Items',
    children: [
      {
        url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/src/platform/core/loading/README.md',
        title: 'Loading',
      },
      {
        url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/docs/DEVELOPER_GUIDE.md',
        title: 'Developer Guide',
      },
    ],
  },
];

```

For reference:
```typescript
interface IHelpMenuDataItem {
  title?: string;
  url?: string;
  httpOptions?: object;
  markdownString?: string; // raw markdown
  anchor?: string;
  children?: IHelpMenuDataItem[];
}
```

# DraggableHelpWindowDialogService

This is a service that opens a HelpWindowComponent inside a draggable dialog.

## API Summary

#### Methods

+ open: function( items: IHelpMenuDataItem[], config?: MatDialogConfig, labels?: IHelpWindowComponentLabels)
  + Opens a HelpWindowComponent inside a draggable dialog.



## Setup

```typescript
import { CovalentHelpModule } from '@covalent/experimental/help';
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
  DraggableHelpWindowDialogComponent,
  DraggableHelpWindowDialogService,
  IHelpMenuDataItem,
} from '@covalent/experimental/help';
import { MatDialogRef } from '@angular/material/dialog';

export class SampleComponent{

  ref: MatDialogRef<DraggableHelpWindowDialogComponent>;

  constructor(private draggableHelpWindowDialogService: DraggableHelpWindowDialogService) {}

  ngOnInit(): void {
    this.ref = this.draggableHelpWindowDialogService.open([{url: 'https://github.com/Teradata/covalent/blob/develop/README.md'}]);
    this.ref.afterOpened().subscribe(() => {

    });
    this.ref.afterClosed().subscribe(() => {

    });
  }
}
```
