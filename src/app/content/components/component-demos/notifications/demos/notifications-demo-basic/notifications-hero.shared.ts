import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsDemoBasicComponent } from './notifications-demo-basic.component';
import { CovalentNotificationsModule } from '../../../../../../../platform/core/notifications';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NotificationsDemoBasicComponent],
  imports: [CommonModule, CovalentNotificationsModule, MatButtonModule, MatIconModule],
  exports: [NotificationsDemoBasicComponent],
})
export class NotificationsHeroSharedModule {}
