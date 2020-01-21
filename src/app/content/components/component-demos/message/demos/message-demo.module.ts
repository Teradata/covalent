import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageDemoBasicComponent } from './message-demo-basic/message-demo-basic.component';
import { CovalentMessageModule } from '@covalent/core/message';
import { MessageDemoComponent } from './message-demo.component';
import { MessageDemoRoutingModule } from './message-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MessageDemoComponent, MessageDemoBasicComponent],
  imports: [
    DemoModule,
    MessageDemoRoutingModule,
    /** Covalent Modules */
    CovalentMessageModule,
    /** Angular Modules */
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
  ],
})
export class MessageDemoModule {}
