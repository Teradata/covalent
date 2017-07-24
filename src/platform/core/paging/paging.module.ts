import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MdIconModule, MdButtonModule } from '@angular/material';

import { TdPagingBarComponent } from './paging-bar.component';

export { TdPagingBarComponent, IPageChangeEvent } from './paging-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdButtonModule,
  ],
  declarations: [
    TdPagingBarComponent,
  ],
  exports: [
    TdPagingBarComponent,
  ],
})
export class CovalentPagingModule {

}
