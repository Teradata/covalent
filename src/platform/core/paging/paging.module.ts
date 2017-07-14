import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MdIconModule, MdSelectModule, MdButtonModule, MdInputModule } from '@angular/material';

import { TdPagingBarComponent } from './paging-bar.component';

export { TdPagingBarComponent, IPageChangeEvent } from './paging-bar.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MdIconModule,
    MdSelectModule,
    MdButtonModule,
    MdInputModule,
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
