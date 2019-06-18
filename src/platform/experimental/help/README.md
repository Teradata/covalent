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
