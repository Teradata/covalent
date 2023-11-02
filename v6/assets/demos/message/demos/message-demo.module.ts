import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageDemoBasicSharedModule } from './message-demo-basic/message-demo-basic-shared';
import { MessageDemoActionComponent } from './message-demo-action/message-demo-action.component';
import { MessageDemoToggleVisibilityComponent } from './message-demo-toggle-visibility/message-demo-toggle-visibility.component';
import { MessageDemoColorComponent } from './message-demo-color/message-demo-color.component';
import { CovalentMessageModule } from '@covalent/core/message';
import { MessageDemoComponent } from './message-demo.component';
import { MessageDemoRoutingModule } from './message-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MessageDemoComponent,
    MessageDemoActionComponent,
    MessageDemoColorComponent,
    MessageDemoToggleVisibilityComponent,
  ],
  imports: [
    DemoModule,
    MessageDemoBasicSharedModule,
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
