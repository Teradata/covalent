import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MdMenuModule, MdListModule } from '@angular/material';

import { TdMenuComponent } from './menu.component';

const TD_MENU: Type<any>[] = [
  TdMenuComponent,
];

export { TdMenuComponent } from './menu.component';

@NgModule({
  imports: [
    CommonModule,
    MdMenuModule,
    MdListModule,
  ],
  declarations: [
    TD_MENU,
  ],
  exports: [
    TD_MENU,
  ],
})
export class CovalentMenuModule {

}
