import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdFlipperComponent } from './flipper/flipper.component';
import { TdFrontComponent } from './flipper/front/front.component';
import { TdBackComponent } from './flipper/back/back.component';

const TD_ANIMATIONS: Type<any>[] = [
  TdFlipperComponent,
  TdFrontComponent,
  TdBackComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TD_ANIMATIONS,
  ],
  exports: [
    TD_ANIMATIONS,
  ],
})
export class CovalentAnimationsModule {

}
