import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';

import { TdSearchInputComponent } from './search-input/search-input.component';
import { TdSearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    TdSearchInputComponent,
    TdSearchBoxComponent,
  ],
  exports: [
    TdSearchInputComponent,
    TdSearchBoxComponent,
  ],
})
export class CovalentSearchModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentSearchModule,
      providers: [ ],
    };
  }
}
