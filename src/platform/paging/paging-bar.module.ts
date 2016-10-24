import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';

import { TdPagingBarComponent } from './paging-bar.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    TdPagingBarComponent,
  ],
  exports: [
    TdPagingBarComponent,
  ],
})
export class CovalentPagingBarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentPagingBarModule,
      providers: [ ],
    };
  }
}
