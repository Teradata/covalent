import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CovalentMessageModule } from '@covalent/core/message';
import { MessageDemoBasicComponent } from './message-demo-basic.component';

@NgModule({
  declarations: [MessageDemoBasicComponent],
  imports: [
    CovalentMessageModule,
    /** Angular Modules */
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  exports: [MessageDemoBasicComponent],
})
export class MessageDemoBasicSharedModule {}
