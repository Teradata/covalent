import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CovalentCommonModule } from '../common/common.module';

import { TdNotificationCountComponent, TdNotificationCountPositionX, TdNotificationCountPositionY } from './notification-count.component';

const TD_NOTIFICATIONS: Type<any>[] = [
  TdNotificationCountComponent,
];

export { TdNotificationCountComponent, TdNotificationCountPositionX, TdNotificationCountPositionY } from './notification-count.component';

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
