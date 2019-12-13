import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsDemoBasicComponent } from './notifications-demo-basic/notifications-demo-basic.component';
import { CovalentNotificationsModule } from '@covalent/core/notifications';
import { NotificationsDemoComponent } from './notifications-demo.component';
import { NotificationsDemoRoutingModule } from './notifications-demo-routing.module';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NotificationsDemoComponent, NotificationsDemoBasicComponent],
  imports: [
    DemoModule,
    NotificationsDemoRoutingModule,
    /** Covalent Modules */
    CovalentNotificationsModule,
    /** Angular Modules */
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class NotificationsDemoModule {}
