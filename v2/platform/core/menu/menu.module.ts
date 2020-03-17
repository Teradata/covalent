import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

import { TdMenuComponent } from './menu.component';

const TD_MENU: Type<any>[] = [
  TdMenuComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatDividerModule,
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
