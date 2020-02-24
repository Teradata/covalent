import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageDemoBasicComponent } from './message-demo-basic/message-demo-basic.component';
import { MessageDemoCardComponent } from './message-demo-card/message-demo-card.component';
import { MessageDemoToggleVisibilityComponent } from './message-demo-toggle-visibility/message-demo-toggle-visibility.component';
import { MessageDemoCssComponent } from './message-demo-css/message-demo-css.component';
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
    MessageDemoBasicComponent,
    MessageDemoCardComponent,
    MessageDemoCssComponent,
    MessageDemoToggleVisibilityComponent,
  ],
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
