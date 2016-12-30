import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { CovalentCommonModule } from '../common/common.module';

import { TdMenuComponent } from './menu.component';

const TD_MENU: Type<any>[] = [
  TdMenuComponent,
];

export { TdMenuComponent } from './menu.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    CovalentCommonModule.forRoot(),
  ],
  declarations: [
    TD_MENU,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    CovalentCommonModule,

    TD_MENU,
  ],
})
export class CovalentMenuModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentMenuModule,
      providers: [ ],
    };
  }
}
