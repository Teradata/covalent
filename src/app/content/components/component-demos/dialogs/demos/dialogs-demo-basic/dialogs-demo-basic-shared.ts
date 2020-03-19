import { NgModule } from '@angular/core';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { DialogsDemoBasicComponent } from './dialogs-demo-basic.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DialogsDemoBasicComponent],
  imports: [
    /** Covalent Modules */
    CovalentDialogsModule,
    MatButtonModule,
  ],
  exports: [DialogsDemoBasicComponent],
})
export class DialogsDemoBasicSharedModule {}
