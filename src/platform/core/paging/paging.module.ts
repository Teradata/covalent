import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MatIconModule, MatButtonModule } from '@angular/material';

import { TdPagingBarComponent } from './paging-bar.component';

export { TdPagingBarComponent, IPageChangeEvent } from './paging-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
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
