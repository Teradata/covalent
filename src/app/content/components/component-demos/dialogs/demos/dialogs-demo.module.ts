import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { DialogsDemoComponent } from './dialogs-demo.component';
import { DialogsDemoRoutingModule } from './dialogs-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { DialogsDemoBasicComponent } from './dialogs-demo-basic/dialogs-demo-basic.component';
import {
  DialogsDemoDraggableComponent,
  DraggableDialogComponent,
} from './dialogs-demo-draggable/dialogs-demo-draggable.component';
import {
  DraggableResizableDialogComponent,
  DialogsDemoDraggableResizableComponent,
} from './dialogs-demo-draggable-resizable/dialogs-demo-draggable-resizable.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DialogsDemoComponent,
    DialogsDemoBasicComponent,
    DialogsDemoDraggableComponent,
    DraggableDialogComponent,
    DraggableResizableDialogComponent,
    DialogsDemoDraggableResizableComponent,
  ],
  imports: [
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
