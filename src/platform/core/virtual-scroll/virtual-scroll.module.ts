import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdVirtualScrollRowDirective } from './virtual-scroll-row.directive';
import { TdVirtualScrollContainerComponent } from './virtual-scroll-container.component';

const TD_VIRTUAL_SCROLL: Type<any>[] = [
  TdVirtualScrollRowDirective,
  TdVirtualScrollContainerComponent,
];

export { TdVirtualScrollRowDirective, TdVirtualScrollContainerComponent };

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TD_VIRTUAL_SCROLL,
  ],
  exports: [
    TD_VIRTUAL_SCROLL,
  ],
})
export class CovalentVirtualScrollModule {

}
