import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { DialogsDemoComponent } from './dialogs-demo.component';
import {
  DialogsDemoDraggableComponent,
  DraggableDialogComponent,
} from './dialogs-demo-draggable/dialogs-demo-draggable.component';
import {
  DraggableResizableDialogComponent,
  DialogsDemoDraggableResizableComponent,
} from './dialogs-demo-draggable-resizable/dialogs-demo-draggable-resizable.component';
import { DialogsDemoRoutingModule } from './dialogs-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { DialogsDemoBasicSharedModule } from './dialogs-demo-basic/dialogs-demo-basic-shared';
import {
  DraggableResizableWindowDialogComponent,
  DialogsDemoDraggableResizableWindowComponent,
} from './dialogs-demo-draggable-resizable-window/dialogs-demo-draggable-resizable-window.component';

@NgModule({
  declarations: [
    DialogsDemoComponent,
    DialogsDemoDraggableComponent,
    DraggableDialogComponent,
    DraggableResizableDialogComponent,
    DialogsDemoDraggableResizableComponent,
    DraggableResizableWindowDialogComponent,
    DialogsDemoDraggableResizableWindowComponent,
  ],
  imports: [
    DialogsDemoBasicSharedModule,
    DemoModule,
    DialogsDemoRoutingModule,
    /** Covalent Modules */
    CovalentDialogsModule,
    /** Angular Modules */
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class DialogsDemoModule {}
