import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MdInputModule, MdIconModule, MdButtonModule } from '@angular/material';

import { TdSearchInputComponent } from './search-input/search-input.component';
import { TdSearchBoxComponent } from './search-box/search-box.component';

export { TdSearchBoxComponent } from './search-box/search-box.component';
export { TdSearchInputComponent } from './search-input/search-input.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MdInputModule.forRoot(),
    MdIconModule.forRoot(),
    MdButtonModule.forRoot(),
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
