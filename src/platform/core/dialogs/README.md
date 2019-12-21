# TdDialogService

Service provided with methods that wrap the @angular/material [MatDialog] service and provide an easier experience for simple dialogs.

Note: if no [ViewContainerRef] is provided, [TdDialogService] will throw an error.

<br/>

## API Summary

#### Methods

+ openAlert: function(IAlertConfig): MatDialogRef<TdAlertDialogComponent>
  + Opens an alert dialog with the provided config.
+ openConfirm: function(IConfirmConfig): MatDialogRef<TdConfirmDialogComponent>
  + Opens a confirm dialog with the provided config.
+ openPrompt: function(IPromptConfig): MatDialogRef<TdPromptDialogComponent>
  + Opens a prompt dialog with the provided config.
+ open: function<T>(component: ComponentType<T>, config: MatDialogConfig): MatDialogRef<T>
  + Wrapper function over the open() method in MatDialog. Opens a modal dialog containing the given component.
+ openDraggable: function<T>(IDraggableConfig<T>): MatDialogRef<T>
  + Opens a draggable dialog containing the given component
+ closeAll: function()
  + Wrapper function over the closeAll() method in MatDialog. Closes all of the currently-open dialogs.

## Usage

TypeScript

```typescript
import { ViewContainerRef } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
...
})
export class Demo {
  constructor(private _dialogService: TdDialogService,
              private _viewContainerRef: ViewContainerRef) {
    ...
  }

  openAlert(): void {
    this._dialogService.openAlert({
      message: 'This is how simple it is to create an alert with this wrapper service.',
      disableClose: true | false, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Alert', //OPTIONAL, hides if not provided
      closeButton: 'Close', //OPTIONAL, defaults to 'CLOSE'
      width: '400px', //OPTIONAL, defaults to 400px
    });
  }

  openConfirm(): void {
    this._dialogService.openConfirm({
      message: 'This is how simple it is to create a confirm with this wrapper service. Do you agree?',
      disableClose: true | false, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Confirm', //OPTIONAL, hides if not provided
      cancelButton: 'Disagree', //OPTIONAL, defaults to 'CANCEL'
      acceptButton: 'Agree', //OPTIONAL, defaults to 'ACCEPT'
      width: '500px', //OPTIONAL, defaults to 400px
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        // DO SOMETHING
      } else {
        // DO SOMETHING ELSE
      }
    });
  }

  openPrompt(): void {
    this._dialogService.openPrompt({
      message: 'This is how simple it is to create a prompt with this wrapper service. Prompt something.',
      disableClose: true | false, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Prompt', //OPTIONAL, hides if not provided
      value: 'Prepopulated value', //OPTIONAL
      cancelButton: 'Cancel', //OPTIONAL, defaults to 'CANCEL'
      acceptButton: 'Ok', //OPTIONAL, defaults to 'ACCEPT'
      width: '400px', //OPTIONAL, defaults to 400px
    }).afterClosed().subscribe((newValue: string) => {
      if (newValue) {
        // DO SOMETHING
      } else {
        // DO SOMETHING ELSE
      }
    });
  }

  openDraggable(): void {
    this._dialogService.openDraggable({
      component: DraggableDemoComponent,
      config: { height: '300px' },
      // CSS selectors of element(s) inside the component meant to be drag handle(s)
      dragHandleSelectors: ['.drag-handle'],
      // Class that will be added to the component signifying drag-ability
      draggableClass: 'custom-class',
    });
  }
}
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-draggable-demo',
  template: `
    <h2>Draggable dialog</h2>
    <p>Draggable via the drag handle</p>
    <button mat-icon-button class="drag-handle">
      <mat-icon>drag_handle</mat-icon>
    </button>
  `,
})
export class DraggableDemoComponent {}
```

## Setup

Import the [CovalentDialogsModule] in your NgModule:

```typescript
import { CovalentDialogsModule } from '@covalent/core/dialogs';

@NgModule({
  imports: [
    CovalentDialogsModule,
    ...
  ],
  ...
})
export class MyModule {}
```
After that, just inject [TdDialogService] and use it for your dialogs.


