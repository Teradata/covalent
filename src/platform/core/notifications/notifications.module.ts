import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { CovalentCommonModule } from '../common/common.module';

import { TdNotificationCountComponent, TdNotificationCountPositionX, TdNotificationCountPositionY } from './notification-count.component';

const TD_NOTIFICATIONS: Type<any>[] = [
  TdNotificationCountComponent,
];

export { TdNotificationCountComponent, TdNotificationCountPositionX, TdNotificationCountPositionY } from './notification-count.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    CovalentCommonModule.forRoot(),
  ],
  declarations: [
    TD_NOTIFICATIONS,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    CovalentCommonModule,

    TD_NOTIFICATIONS,
  ],
})
export class CovalentNotificationsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentNotificationsModule,
      providers: [ ],
    };
  }
}
