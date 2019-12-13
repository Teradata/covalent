import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DialogsDemoBasicComponent } from './dialogs-demo-basic/dialogs-demo-basic.component';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { DialogsDemoComponent } from './dialogs-demo.component';
import { DialogsDemoRoutingModule } from './dialogs-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [DialogsDemoComponent, DialogsDemoBasicComponent],
  imports: [
    DemoModule,
    DialogsDemoRoutingModule,
    /** Covalent Modules */
    CovalentDialogsModule,
    /** Angular Modules */
    CommonModule,
    MatButtonModule,
  ],
})
export class DialogsDemoModule {}
