import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdNotificationCountComponent } from './notification-count.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TdNotificationCountComponent,
  ],
  exports: [
    TdNotificationCountComponent,
  ],
})
export class CovalentNotificationsModule {

}
