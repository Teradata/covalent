import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdVirtualScrollContainerComponent, TdVirtualScrollRowDirective} from './virtual-scroll-container.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TdVirtualScrollRowDirective,
    TdVirtualScrollContainerComponent,
  ],
  exports: [
    TdVirtualScrollRowDirective,
    TdVirtualScrollContainerComponent,
  ],
})
export class CovalentVirtualScrollModule {

}
