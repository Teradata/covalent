import { Type } from '@angular/core';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TdNotificationCountComponent } from './notification-count.component';

const TD_NOTIFICATIONS: Type<any>[] = [
  TdNotificationCountComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TD_NOTIFICATIONS,
  ],
  exports: [
    TD_NOTIFICATIONS,
  ],
})
export class CovalentNotificationsModule {

}
