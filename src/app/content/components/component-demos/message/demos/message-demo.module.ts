import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageDemoBasicComponent } from './message-demo-basic/message-demo-basic.component';
import { CovalentMessageModule } from '@covalent/core/message';
import { MessageDemoComponent } from './message-demo.component';
import { MessageDemoRoutingModule } from './message-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';

@NgModule({
  declarations: [MessageDemoComponent, MessageDemoBasicComponent],
  imports: [
    DemoModule,
    MessageDemoRoutingModule,
    /** Covalent Modules */
    CovalentMessageModule,
    /** Angular Modules */
    CommonModule,
  ],
})
export class MessageDemoModule {}
