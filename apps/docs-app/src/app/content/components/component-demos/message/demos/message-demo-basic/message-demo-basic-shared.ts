import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TdMessageComponent } from '@covalent/core/message';
import { MessageDemoBasicComponent } from './message-demo-basic.component';

@NgModule({
  declarations: [MessageDemoBasicComponent],
  imports: [
    TdMessageComponent,
    /** Angular Modules */
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  exports: [MessageDemoBasicComponent],
})
export class MessageDemoBasicSharedModule {}
