import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatMenuModule, MatListModule } from '@angular/material';

import { TdMenuComponent } from './menu.component';

const TD_MENU: Type<any>[] = [
  TdMenuComponent,
];

export { TdMenuComponent } from './menu.component';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatListModule,
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
