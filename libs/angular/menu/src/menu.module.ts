import { Type } from '@angular/core';
import { NgModule } from '@angular/core';
import { TdMenuComponent } from './menu.component';

const TD_MENU: Type<any>[] = [TdMenuComponent];

/**
 * @deprecated since version 8.x, modules are no longer needed use standalone components instead
 */
@NgModule({
  imports: [TD_MENU],
  exports: [TD_MENU],
})
export class CovalentMenuModule {}
