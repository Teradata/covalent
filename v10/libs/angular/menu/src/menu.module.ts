import { Type } from '@angular/core';
import { NgModule } from '@angular/core';
import { TdMenuComponent } from './menu.component';

const TD_MENU: Type<any>[] = [TdMenuComponent];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */

@NgModule({
  imports: [TD_MENU],
  exports: [TD_MENU],
})
export class CovalentMenuModule {}
